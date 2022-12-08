import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Details = ({navigation, route}) => {
  const {item} = route.params;

  useEffect(() => {
    // Initialize the data
    AsyncStorage.getItem('FavoriteData').then(value => {
      value !== null && (FavoriteData = JSON.parse(value));
    });
  }, []);

  const renderDetailsItem = ({item}) => {
    return (
      <View style={styles.IngredientsCardItem}>
        <Image style={styles.ingredientsImage} source={item.image} />
        <Text style={styles.IngredientsCardName}>{item.name}</Text>
      </View>
    );
  };

  const AddFavorite = () => {
    // Check if the item is already in the array
    const isItemInArray = FavoriteData.some(
      arrayItem => arrayItem.title === item.title,
    );
    if (isItemInArray) alert('Already in the favorite list');
    else {
      const newItem = item;
      newItem.id = Math.floor(Math.random() * 1000);
      FavoriteData.push(newItem);
      AsyncStorage.setItem('FavoriteData', JSON.stringify(FavoriteData));
      Alert.alert(
        'Added successfully!',
        'This item has been added to favorites',
        [
          {
            text: 'Go to favorites',
            onPress: () => navigation.navigate('Favorites'),
          },
          {
            text: 'Stay here',
            onPress: () => null,
          },
        ],
      );
    }
  };

  const PlaceOrder = () => {
    // Check if the item is already in the array
    const isItemInArray = OrdersData.some(
      arrayItem => arrayItem.title === item.title,
    );
    if (isItemInArray) alert('This menu is already ordered!');
    else {
      const newItem = item;
      newItem.id = Math.floor(Math.random() * 1000);
      OrdersData.push(newItem);
      Alert.alert('Order Placed Successfully!', 'Your order is on the way.', [
        {
          text: 'Close',
          onPress: () => navigation.navigate('Home'),
        },
        {
          text: 'Go to Orders page',
          onPress: () => navigation.navigate('Orders'),
        },
      ]);
    }
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.headerBackButton}>
            <Feather name="chevron-left" size={12} color={colors.black} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => AddFavorite()}>
          <View style={styles.headerRightButton}>
            <MaterialCommunityIcon name="star" size={12} color={colors.white} />
          </View>
        </TouchableOpacity>
      </View>
      {/* Product Information */}
      <View>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <View style={styles.productMiddleWrapper}>
          <View style={styles.productMiddleLeft}>
            <Text style={styles.SubTitleLightText}>Size</Text>
            <Text style={styles.SubTitleDarkText}>
              {item.sizeName}{' '}
              {item.title.includes('Pizza') ? (
                <Text>{item.sizeNumber}''</Text>
              ) : null}
            </Text>
            {item.title.includes('Pizza') ? (
              <View>
                <Text style={styles.SubTitleLightText}>Crust</Text>
                <Text style={styles.SubTitleDarkText}>{item.crust}</Text>
              </View>
            ) : null}
            <Text style={styles.SubTitleLightText}>Delivery in</Text>
            <Text style={styles.SubTitleDarkText}>{item.deliveryTime} min</Text>
          </View>
          <View>
            <Image style={styles.ProductImage} source={item.image} />
          </View>
        </View>
      </View>
      {/* Ingredients */}
      {item.ingredients !== undefined ? (
        <View style={styles.IngredientsWrapper}>
          <Text style={styles.IngredientsTitle}>Ingredients</Text>
          <View style={styles.IngredientsListWrapper}>
            <FlatList
              data={item.ingredients}
              renderItem={renderDetailsItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      ) : (
        <View style={styles.IngredientsWrapper}></View>
      )}
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center'}}
        onPress={() => PlaceOrder()}>
        <View style={styles.buttonTextWrapper}>
          <Text style={styles.buttonText}>Place an order</Text>
          <Feather name="chevron-right" size={16} color={colors.black} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  headerBackButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.textLight,
    borderWidth: 2,
    borderRadius: 10,
  },
  headerRightButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  productTitle: {
    marginTop: 30,
    paddingLeft: 20,
    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
    width: '75%',
    fontSize: 32,
  },
  productPrice: {
    color: colors.price,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 32,
    paddingLeft: 20,
    marginTop: 20,
  },
  productMiddleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  productMiddleLeft: {
    paddingLeft: 20,
  },
  ProductImage: {
    alignSelf: 'center',
    left: 40,
    resizeMode: 'contain',
    width: 250,
    height: 150,
  },
  SubTitleDarkText: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.black,
    fontSize: 16,
    marginTop: 5,
  },
  SubTitleLightText: {
    fontSize: 14,
    color: colors.textLight,
    fontFamily: 'Montserrat-Medium',
    marginTop: 20,
  },
  IngredientsWrapper: {
    paddingLeft: 20,
    marginTop: 40,
    flex: 1,
  },
  IngredientsTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.black,
  },
  IngredientsListWrapper: {
    paddingTop: 20,
  },
  ingredientsImage: {
    width: 82,
    height: 85,
  },
  IngredientsCardItem: {
    marginRight: 15,
    bottom: 2,
    backgroundColor: colors.white,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  IngredientsCardName: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: colors.textDark,
    textAlign: 'center',
    marginTop: 5,
  },
  buttonText: {
    marginRight: 10,
    color: colors.black,
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    paddingVertical: 23,
  },
  buttonTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    shadowColor: colors.black,
    marginTop: 70,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    right: 0,
    left: 0,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
});
