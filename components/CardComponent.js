import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../assets/colors/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const CardComponent = ({item, index, ArrayData}) => {
  return (
    <View
      style={[
        styles.CardWrapper,
        {
          marginTop: index == 0 ? 15 : 20,
          marginBottom: index == ArrayData.length - 1 ? 20 : 0, // last item
        },
      ]}>
      <View>
        <View>
          <View style={styles.TopWrapper}>
            <MaterialCommunityIcons
              name="crown"
              size={12}
              color={colors.primary}
            />
            <Text style={styles.TopText}>top of the week</Text>
          </View>
          <View style={styles.TitlesWrapper}>
            <Text style={styles.TitlesTitle}>{item.title}</Text>
            <Text style={styles.TitlesWeight}>Weight {item.weight}</Text>
          </View>
        </View>
        <View style={styles.CardBottom}>
          <View style={styles.addPizzaButton}>
            <Feather name="plus" size={10} color={colors.textDark} />
          </View>
          <View style={styles.ratingWrapper}>
            <MaterialCommunityIcons
              name="star"
              size={10}
              color={colors.textDark}
            />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
      </View>
      <View style={styles.CardRight}>
        <Image style={styles.CardImage} source={item.image} />
      </View>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  CardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  TopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: 'black',
  },
  TitlesWrapper: {
    marginTop: 20,
  },
  TitlesTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.textDark,
  },
  TitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  CardBottom: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -20,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  ratingWrapper: {
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: colors.black,
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 5,
    fontSize: 12,
  },
  CardRight: {
    marginLeft: 40,
  },
  CardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});
