import { ITreeItem } from '../TreeItem/types'

export const mockupTree: ITreeItem = {
  name: 'Root',
  items: [
    { name: 'First' },
    { name: 'Second' },
    { name: 'Third' },
    {
      name: 'Fourth',
      items: [
        { name: 'Grand First' },
        { name: 'Grand Second' },
        { name: 'Grand Third' },
        {
          name: 'Grand Fourth',
          items: [
            { name: 'Grand Grand First' },
            { name: 'Grand Grand Second' },
            { name: 'Grand Grand Third' },
          ],
        },
      ],
    },
  ],
}
