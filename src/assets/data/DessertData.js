const DessertData = [
  {
    id: '1',
    image: require('../images/dessertImages/cheesecake.png'),
    title: 'CheeseCake',
    weight: '260 gr',
    rating: '4.8',
    price: 4.99,
    sizeName: 'Medium',
    deliveryTime: 20,
    ingredients: [
      {
        id: '1',
        name: 'strawberry',
        image: require('../images/dessertImages/strawberry.png'),
      },
      {
        id: '2',
        name: 'cherry',
        image: require('../images/dessertImages/cherry.png'),
      },
      {
        id: '3',
        name: 'blackberry',
        image: require('../images/dessertImages/blackberry.png'),
      },
      {
        id: '4',
        name: 'cheese',
        image: require('../images/dessertImages/cheese.png'),
      },
    ],
  },
  {
    id: '2',
    image: require('../images/dessertImages/cookie.png'),
    title: 'Cookies',
    weight: '150 gr',
    rating: '4.0',
    price: 5.99,
    sizeName: '6 Pieces',
    deliveryTime: 30,
    ingredients: [
      {
        id: '1',
        name: 'dough',
        image: require('../images/dessertImages/dough.png'),
      },
      {
        id: '2',
        name: 'chocolate',
        image: require('../images/dessertImages/chocolate.png'),
      },
    ],
  },
  {
    id: '3',
    image: require('../images/dessertImages/tart.png'),
    title: 'Strawberry Tart',
    weight: '300 gr',
    rating: '4.5',
    price: 9.99,
    sizeName: 'Normal',
    deliveryTime: 10,
    ingredients: [
      {
        id: '1',
        name: 'strawberry',
        image: require('../images/dessertImages/strawberry.png'),
      },
      {
        id: '2',
        name: 'flour',
        image: require('../images/dessertImages/flour.png'),
      },
    ],
  },
  {
    id: '4',
    image: require('../images/dessertImages/cake.png'),
    title: 'Chocolate Cake',
    weight: '300 gr',
    rating: '4.8',
    price: 5.99,
    sizeName: 'Normal',
    deliveryTime: 15,
    ingredients: [
      {
        id: '1',
        name: 'chocolate',
        image: require('../images/dessertImages/chocolate.png'),
      },
      {
        id: '2',
        name: 'cherry',
        image: require('../images/dessertImages/cherry.png'),
      },
      {
        id: '3',
        name: 'dough',
        image: require('../images/dessertImages/dough.png'),
      },
    ],
  },
  {
    id: '5',
    image: require('../images/dessertImages/chocolatemousse.png'),
    title: 'Chocolate Mousse',
    weight: '350 gr',
    rating: '5.0',
    price: 9.99,
    sizeName: 'Large Cup',
    deliveryTime: 30,
    ingredients: [
      {
        id: '1',
        name: 'chocolate',
        image: require('../images/dessertImages/chocolate.png'),
      },
      {
        id: '2',
        name: 'whipped cream',
        image: require('../images/dessertImages/whippedcream.png'),
      },
    ],
  },
];

export default DessertData;
