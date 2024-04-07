// search related type

export type SiblingInfo = {
  rfilename: string
}

export type SearchItemInfo = {
  _id: string
  id: string
  author: string
  gated: boolean
  lastModified: string
  likes: number
  private: boolean
  sha: string
  downloads: number
  tags: string[]
  createdAt: string
  modelId: string
  siblings: SiblingInfo[]
}
