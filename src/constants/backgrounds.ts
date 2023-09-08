import {
  ChildRoom,
  JapaneseStreet,
  LiveRoom,
  ParentRoom,
  Penthouse,
  SunsetMountain,
} from '@src/assets';

export const backgrounds = [
  { id: 'child-room', src: ChildRoom },
  { id: 'japanese-street', src: JapaneseStreet },
  { id: 'live-room', src: LiveRoom },
  { id: 'parent-room', src: ParentRoom },
  { id: 'penthouse', src: Penthouse },
  { id: 'sunset-mountain', src: SunsetMountain },
] as const;
