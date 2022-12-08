const SeafoodData = [
  {
    id: '1',
    image: require('../images/seafoodImages/sushi.png'),
    title: 'Sushi',
    weight: '350 gr',
    rating: '4.7',
    price: 9.99,
    sizeName: 'Medium',
    deliveryTime: 25,
    ingredients: [
      {
        id: '1',
        name: 'rice',
        image: require('../images/seafoodImages/rice.png'),
      },
      {
        id: '2',
        name: 'seaweedsheet',
        image: require('../images/seafoodImages/seaweedsheet.png'),
      },
      {
        id: '3',
        name: 'sesameseeds',
        image: require('../images/seafoodImages/sesameseeds.png'),
      },
    ],
  },
  {
    id: '2',
    image: require('../images/seafoodImages/octopus.png'),
    title: 'Octopus',
    weight: '450 gr',
    rating: '5.0',
    price: 12.99,
    sizeName: 'Large Portion',
    deliveryTime: 45,
  },
  {
    id: '3',
    image: require('../images/seafoodImages/fish.png'),
    title: 'Fish Grill',
    weight: '600 gr',
    rating: '4.9',
    price: 9.99,
    sizeName: 'Large Portion',
    deliveryTime: 35,
    ingredients: [
      {
        id: '1',
        name: 'tomato',
        image: require('../images/seafoodImages/tomato.png'),
      },
      {
        id: '2',
        name: 'lemon',
        image: require('../images/seafoodImages/lemon.png'),
      },
      {
        id: '3',
        name: 'greens',
        image: require('../images/seafoodImages/greens.png'),
      },
    ],
  },
  {
    id: '4',
    image: require('../images/seafoodImages/mussel.png'),
    title: 'Mussel',
    weight: '450 gr',
    rating: '4.4',
    price: 8.99,
    sizeName: 'Normal',
    deliveryTime: 20,
    ingredients: [
      {
        id: '1',
        name: 'lemon',
        image: require('../images/seafoodImages/lemon.png'),
      },
    ],
  },
  {
    id: '5',
    image: require('../images/seafoodImages/crab.png'),
    title: 'Crab',
    weight: '1000 gr',
    rating: '5.0',
    price: 19.99,
    sizeName: 'Large',
    deliveryTime: 50,
    ingredients: [
      {
        id: '1',
        name: 'lemon',
        image: require('../images/seafoodImages/lemon.png'),
      },
      {
        id: '2',
        name: 'greens',
        image: require('../images/seafoodImages/greens.png'),
      },
    ],
  },
];

export default SeafoodData;
