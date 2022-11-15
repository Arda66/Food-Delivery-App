import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
const Details = ({navigation, route}) => {
  const {item} = route.params;
  const renderDetailsItem = ({item}) => {
    return (
      <View style={styles.IngredientsCardItem}>
        <Image style={styles.ingredientsImage} source={item.image} />
      </View>
    );
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
        <View style={styles.headerRightButton}>
          <MaterialCommunityIcon name="star" size={12} color={colors.white} />
        </View>
      </View>
      {/* Product Information */}
      <View>
        <Text style={styles.pizzaTitle}>{item.title}</Text>
        <Text style={styles.pizzaPrice}>${item.price}</Text>
        <View style={styles.productMiddleWrapper}>
          <View style={styles.productMiddleLeft}>
            <Text style={styles.SubTitleLightText}>Size</Text>
            <Text style={styles.SubTitleDarkText}>
              {item.sizeName} {item.sizeNumber}''
            </Text>
            <Text style={styles.SubTitleLightText}>Crust</Text>
            <Text style={styles.SubTitleDarkText}>{item.crust}</Text>
            <Text style={styles.SubTitleLightText}>Delivery in</Text>
            <Text style={styles.SubTitleDarkText}>{item.deliveryTime} min</Text>
          </View>
          <View style={styles.pizzaImageWrapper}>
            <Image style={styles.pizzaImage} source={item.image} />
          </View>
        </View>
      </View>
      {/* Ingredients */}
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
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            'Order Placed Successfully!',
            'Your order is on the way.',
            [
              {
                text: 'OK',
                onPress: () => navigation.goBack(),
              },
            ],
          );
        }}>
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
  pizzaTitle: {
    marginTop: 30,
    paddingLeft: 20,
    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
    width: '50%',
    fontSize: 32,
  },
  pizzaPrice: {
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
  pizzaImageWrapper: {
    alignSelf: 'center',
    marginLeft: 40,
  },
  pizzaImage: {
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
  },
  IngredientsTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.black,
  },
  IngredientsListWrapper: {
    paddingVertical: 20,
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
  buttonText: {
    marginRight: 10,
    color: colors.black,
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    paddingVertical: 23,
  },
  buttonTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    marginTop: 40,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
});
