export const kASCIILog = ``

export type CardInfo = {
  sponsor: string
  parameters: string
  type: string
  ram: string
  title: string
  description: string
  fileSize: string
  feature: string
  quant: string
}

export const kRecommendationList: CardInfo[] = [
  {
    sponsor: 'Stability AI',
    parameters: '3B',
    type: 'StableLM',
    ram: '8GB+',
    title: 'Stable Code Instruct 3B',
    description: `Stable Code Instruct 3B is a decoder-only language model with 2.7 billion parameters, developed from the stable-code-3b. It has been trained on a combination of publicly available and synthetic datasets, with the latter generated through Direct Preference Optimization (DPO). This model has shown competitive performance in comparison to other models of similar size, as evidenced by its results on the MultiPL-E metrics across various programming languages using the BigCode Evaluation Harness, and on code-related tasks in MT Bench. It is fine-tuned for use in general code/software engineering conversations and SQL query generation and discussion.`,
    fileSize: '2.97GB',
    feature: 'Less Compressed',
    quant: 'Q8_0'
  },
  {
    sponsor: 'Nexusflow',
    parameters: '7B',
    type: 'Mistral',
    ram: '8GB+',
    title: 'Starling LM 7B beta',
    description: `Starling-LM-7B-beta is a language model fine-tuned through Reinforcement Learning with Human Feedback (RLHF) and AI Feedback (RLAIF), developed by Banghua Zhu, Evan Frick, Tianhao Wu, Hanlin Zhu, Karthik Ganesan, Wei-Lin Chiang, Jian Zhang, and Jiantao Jiao. It is available under an Apache-2.0 license, provided it's not used in competition against OpenAI. Originating from Openchat-3.5-0106, which is based on Mistral-7B-v0.1, Starling-LM-7B-beta employs a new reward model, Nexusflow/Starling-RM-34B, and a policy optimization method, Fine-Tuning Language Models from Human Preferences (PPO). Utilizing the berkeley-nest/Nectar ranking dataset, the enhanced Starling-RM-34B reward model, and a novel reward training and policy tuning pipeline, Starling-LM-7B-beta achieves a score of 8.12 in MT Bench, with GPT-4 serving as the evaluator.`,
    fileSize: '3.94GB',
    feature: 'Small & Fast',
    quant: 'IQ4_XS'
  },
  {
    sponsor: 'NousResearch',
    parameters: '7B',
    type: 'Mistral',
    ram: '8GB+',
    title: 'Hermes 2 Pro Mistral 7B',
    description: `Hermes 2 Pro, an updated version of Nous Hermes 2, incorporates an enhanced and cleaned OpenHermes 2.5 Dataset alongside a new in-house developed dataset for Function Calling and JSON Mode. This version retains its robust performance in general tasks and conversations while showing notable improvements in Function Calling, JSON Structured Outputs, achieving a 90% score in function calling evaluation conducted with Fireworks.AI, and 84% in structured JSON Output evaluation. It introduces a special system prompt and a multi-turn function calling structure, incorporating a chatml role to streamline and simplify function calling.`,
    fileSize: '4.11GB',
    feature: 'Small & Fast',
    quant: 'Q4_0'
  }
]
