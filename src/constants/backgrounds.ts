import { images } from '@src/assets';

const {
  ChildRoom,
  JapaneseStreet,
  LiveRoom,
  ParentRoom,
  Penthouse,
  SunsetMountain,
} = images;

export type Background = {
  id: string;
  src: string;
  imageUrl: string;
  author: string;
};

export const backgrounds: Background[] = [
  {
    id: 'child-room',
    src: ChildRoom,
    imageUrl:
      'https://www.freepik.com/free-vector/kids-bedroom-interior-pirate-thematic-night_7588865.htm',
    author: 'upklyak',
  },
  {
    id: 'japanese-street',
    src: JapaneseStreet,
    imageUrl:
      'https://www.freepik.com/free-photo/bright-pop-landscape-design_21141824.htm',
    author: 'freepik',
  },
  {
    id: 'living-room',
    src: LiveRoom,
    imageUrl:
      'https://www.freepik.com/free-ai-image/comfortable-armchair-sits-beside-modern-sofa-generated-by-ai_41595400.htm',
    author: 'vecstock',
  },
  {
    id: 'parent-room',
    src: ParentRoom,
    imageUrl:
      'https://www.freepik.com/free-vector/realist-illustration-room-interior_15066638.htm',
    author: 'pikisuperstar',
  },
  {
    id: 'penthouse',
    src: Penthouse,
    imageUrl:
      'https://www.freepik.com/free-vector/girl-bedroom-interior-attic-night_7588808.htm',
    author: 'upklyak',
  },
  {
    id: 'sunset-mountain',
    src: SunsetMountain,
    imageUrl:
      'https://www.freepik.com/free-ai-image/sunset-mountain-range-with-red-sky-sun-setting-it_40964027.htm',
    author: 'vecstock',
  },
];
