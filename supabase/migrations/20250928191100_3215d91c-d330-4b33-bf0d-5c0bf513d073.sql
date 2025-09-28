-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Public access for prompts" ON public.prompts;
DROP POLICY IF EXISTS "Public access for model_responses" ON public.model_responses;

-- Add session_id column to prompts table to track ownership without authentication
ALTER TABLE public.prompts 
ADD COLUMN IF NOT EXISTS session_id UUID DEFAULT gen_random_uuid();

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_prompts_session_id ON public.prompts(session_id);

-- Create more restrictive RLS policies for prompts table
-- Users can only insert their own prompts (session_id must be provided)
CREATE POLICY "Users can insert their own prompts" 
ON public.prompts 
FOR INSERT 
WITH CHECK (session_id IS NOT NULL);

-- Users can only view their own prompts based on session_id
-- Since we don't have authentication, we'll rely on the client providing the session_id
-- This is a temporary measure until proper authentication is implemented
CREATE POLICY "Users can view their own prompts" 
ON public.prompts 
FOR SELECT 
USING (false); -- Temporarily block all SELECT until we implement session-based access in the app

-- Users cannot update or delete prompts (for data integrity)
-- No UPDATE or DELETE policies means these operations are denied by default

-- Create restrictive RLS policies for model_responses table
-- Allow inserting responses (needed for the app to function)
CREATE POLICY "System can insert model responses" 
ON public.model_responses 
FOR INSERT 
WITH CHECK (prompt_id IS NOT NULL);

-- Users can only view responses for their own prompts
-- This will be enforced through a join with the prompts table
CREATE POLICY "Users can view responses for their prompts" 
ON public.model_responses 
FOR SELECT 
USING (false); -- Temporarily block all SELECT until we implement session-based access

-- No UPDATE or DELETE policies means these operations are denied by default