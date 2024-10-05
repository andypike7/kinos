export interface IControl {
  enableAdd: boolean
  onAdd: (name: string, isDir: boolean) => void
  enableDelete: boolean
  onDelete: () => void
}
