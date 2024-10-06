import { ITreeItem } from '../components/TreeItem/types'

export const mockupTree: ITreeItem = {
  name: 'Root',
  items: [
    { name: 'First' },
    { name: 'Second' },
    { name: 'Third' },
    {
      name: 'Fourth',
      items: [
        { name: 'Grand First 1' },
        { name: 'Grand Second 1' },
        { name: 'Grand Third 1' },
        {
          name: 'Grand Fourth 1',
          items: [
            { name: 'Grand Grand First 1' },
            { name: 'Grand Grand Second 1' },
            { name: 'Grand Grand Third 1' },
          ],
        },
        {
          name: 'Grand Fifth 1',
          items: [
            { name: 'Grand Grand First 2' },
            { name: 'Grand Grand Second 2' },
            { name: 'Grand Grand Third 2' },
            { name: 'Grand Grand Fourth 2' },
            { name: 'Grand Grand Fifth 2' },
          ],
        },
      ],
    },
    {
      name: 'Fifth',
      items: [
        { name: 'Grand First 2' },
        { name: 'Grand Second 2' },
        { name: 'Grand Third 2' },
        {
          name: 'Grand Fourth 2',
          items: [
            { name: 'Grand Grand First 3' },
            { name: 'Grand Grand Second 3' },
            { name: 'Grand Grand Third 3' },
          ],
        },
      ],
    },
  ],
}
