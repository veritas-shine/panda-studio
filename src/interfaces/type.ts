// tauri commands
export const kCommand = {
  getSystemInfo: 'get_system_info'
}

// settings
export type UserSettings = {
  theme: string
  language: string
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

//
export type SystemInfo = {
  total_memory: number
  cpu_count: number
}
