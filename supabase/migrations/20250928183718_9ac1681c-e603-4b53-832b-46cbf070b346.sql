-- Create prompts table
CREATE TABLE prompts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  username VARCHAR(100),
  prompt_text TEXT NOT NULL,
  selected_models TEXT[] NOT NULL,
  total_models INTEGER NOT NULL,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed'))
);

-- Create model_responses table
CREATE TABLE model_responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  prompt_id UUID NOT NULL REFERENCES prompts(id) ON DELETE CASCADE,
  model_name VARCHAR(100) NOT NULL,
  response_content TEXT,
  response_error TEXT,
  response_time_ms INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(prompt_id, model_name)
);

-- Create indexes for performance
CREATE INDEX idx_prompts_created_at ON prompts(created_at DESC);
CREATE INDEX idx_prompts_username ON prompts(username);
CREATE INDEX idx_model_responses_prompt_id ON model_responses(prompt_id);
CREATE INDEX idx_model_responses_model_name ON model_responses(model_name);

-- Create update trigger for prompts
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_prompts_updated_at
  BEFORE UPDATE ON prompts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();