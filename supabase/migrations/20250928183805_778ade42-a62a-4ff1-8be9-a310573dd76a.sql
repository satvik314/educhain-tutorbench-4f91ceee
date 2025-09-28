-- Fix security warnings: Enable RLS and create public access policies since no auth is required

-- Enable RLS on both tables
ALTER TABLE prompts ENABLE ROW LEVEL SECURITY;
ALTER TABLE model_responses ENABLE ROW LEVEL SECURITY;

-- Create public access policies (since no auth is required)
CREATE POLICY "Public access for prompts" ON prompts
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Public access for model_responses" ON model_responses
  FOR ALL USING (true) WITH CHECK (true);

-- Fix function search path
ALTER FUNCTION update_updated_at_column() SET search_path = public;