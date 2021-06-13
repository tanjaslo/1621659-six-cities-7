const AVATAR_URL = 'https://i.pravatar.cc/128';

const reviews = [
  {
    comment:
      'The room was quite spacious, comfortable bed, staff was super helpful! Location is great. Nice priced, good value for Amsterdam. Definitely will come back again.',
    date: '2020-07-13T11:22:13.375Z',
    id: 1,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: true,
      name: 'Jessica',
    },
  },
  {
    comment:
      'Staff were extremely accommodating, let us check out an hour later free of charge! Over all decor of the hotel was fabulous. Loved it and would stay again.',
    date: '2020-07-12T11:22:13.375Z',
    id: 2,
    rating: 2,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: true,
      name: 'Yonatan',
    },
  },
  {
    comment:
      ' Our room was lovely, really large and the bed was huge!! Bathroom small but exactly what you need, wet room tiled style. Located less than 5mins walk from central station and 5 mins from the district. Plenty of food places on the same road and shopping the road behind, right in the heart of everything. Staff were lovely and went above expectations when I said in the booking it was my partners birthday, which was a lovely surprise.',
    date: '2020-07-11T11:22:13.375Z',
    id: 3,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Molly',
    },
  },
  {
    comment:
      'The style of the room was very special but we liked it. We liked the size of the bed very much. Also the location of the hotel is good. The staf is very friendly and helpfull. Would stay again if I return to Amsterdam.',
    date: '2020-07-10T11:22:13.375Z',
    id: 4,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: false,
      name: 'Tina',
    },
  },
];

export default reviews;
