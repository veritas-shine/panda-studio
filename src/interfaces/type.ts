// search related type

export const kCommand = {
  getSystemInfo: 'get_system_info'
}

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
