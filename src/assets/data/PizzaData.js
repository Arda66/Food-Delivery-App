const PizzaData = [
  {
    id: '1',
    image: require('../images/pizzaImages/pizza1.png'),
    title: 'Pepperoni Pizza',
    weight: '540 gr',
    rating: '4.5',
    price: 4.99,
    sizeName: 'Medium',
    sizeNumber: 14,
    crust: 'Thin Crust',
    deliveryTime: 20,
    ingredients: [
      {
        id: '1',
        name: 'ham',
        image: require('../images/pizzaImages/ham.png'),
      },
      {
        id: '2',
        name: 'tomato',
        image: require('../images/pizzaImages/tomato.png'),
      },
      {
        id: '3',
        name: 'cheese',
        image: require('../images/pizzaImages/cheese.png'),
      },
      {
        id: '4',
        name: 'garlic',
        image: require('../images/pizzaImages/garlic.png'),
      },
    ],
  },
  {
    id: '2',
    image: require('../images/pizzaImages/pizza2.png'),
    title: 'Margarita Pizza',
    weight: '450 gr',
    rating: '4.0',
    price: 5.99,
    sizeName: 'Small',
    sizeNumber: 10,
    crust: 'Thick Crust',
    deliveryTime: 30,
    ingredients: [
      {
        id: '1',
        name: 'cheese',
        image: require('../images/pizzaImages/cheese.png'),
      },
      {
        id: '2',
        name: 'garlic',
        image: require('../images/pizzaImages/garlic.png'),
      },
    ],
  },
  {
    id: '3',
    image: require('../images/pizzaImages/pizza3.png'),
    title: 'Vegan Pizza',
    weight: '700 gr',
    rating: '4.7',
    price: 9.99,
    sizeName: 'Large',
    sizeNumber: 18,
    crust: 'Thin Crust',
    deliveryTime: 20,
    ingredients: [
      {
        id: '1',
        name: 'tomato',
        image: require('../images/pizzaImages/tomato.png'),
      },
      {
        id: '2',
        name: 'cheese',
        image: require('../images/pizzaImages/cheese.png'),
      },
    ],
  },
  {
    id: '4',
    image: require('../images/pizzaImages/pizza4.png'),
    title: 'Special Pizza',
    weight: '900 gr',
    rating: '4.8',
    price: 12.99,
    sizeName: 'Extra Large',
    sizeNumber: 20,
    crust: 'Thick Parmesan Crust',
    deliveryTime: 40,
    ingredients: [
      {
        id: '1',
        name: 'tomato',
        image: require('../images/pizzaImages/tomato.png'),
      },
      {
        id: '2',
        name: 'olive',
        image: require('../images/pizzaImages/olive.png'),
      },
      {
        id: '3',
        name: 'cheese',
        image: require('../images/pizzaImages/cheese.png'),
      },
      {
        id: '4',
        name: 'ham',
        image: require('../images/pizzaImages/ham.png'),
      },
    ],
  },
  {
    id: '5',
    image: require('../images/pizzaImages/pizza5.png'),
    title: 'Full Mixed Pizza',
    weight: '1000 gr',
    rating: '5.0',
    price: 19.99,
    sizeName: 'XXL',
    sizeNumber: 25,
    crust: 'Thick Crust',
    deliveryTime: 50,
    ingredients: [
      {
        id: '1',
        name: 'tomato',
        image: require('../images/pizzaImages/tomato.png'),
      },
      {
        id: '2',
        name: 'olive',
        image: require('../images/pizzaImages/olive.png'),
      },
      {
        id: '3',
        name: 'cheese',
        image: require('../images/pizzaImages/cheese.png'),
      },
      {
        id: '4',
        name: 'ham',
        image: require('../images/pizzaImages/ham.png'),
      },
    ],
  },
];

export default PizzaData;
