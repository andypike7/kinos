export interface ITreeItem {
  name: string
  items?: ITreeItem[] | undefined
  level?: number
  onDelete?: (item: ITreeItem) => void
}
