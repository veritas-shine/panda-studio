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
  }
]
