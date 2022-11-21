import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../assets/colors/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const Favorites = ({navigation}) => {
  const [FlatlistRenderer, setFlatlistRenderer] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('FavoriteData').then(value => {
      if (value !== null) {
        FavoriteData = JSON.parse(value);
      }
    });
  }, []);
  const RemoveItem = id => {
    Alert.alert('Remove item', 'Are you sure you want to remove this item?', [
      {
        text: 'Cancel',
        onPress: () => null,
      },
      {
        text: 'Remove',
        onPress: () => {
          FavoriteData = FavoriteData.filter(item => item.id !== id);
          AsyncStorage.setItem('FavoriteData', JSON.stringify(FavoriteData));
          setFlatlistRenderer(!FlatlistRenderer);
          ToastAndroid.show('Item removed', ToastAndroid.SHORT);
        },
      },
    ]);
  };

  const RenderFavoriteItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          onLongPress={() => {
            RemoveItem(item.id);
          }}
          key={item.id}
          onPress={() => {
            navigation.navigate('Details', {item: item});
          }}>
          <View
            style={[
              styles.FavoriteCardWrapper,
              {
                marginTop: index == 0 ? 15 : 20,
                marginBottom: index == FavoriteData.length - 1 ? 20 : 0, // last item
              },
            ]}>
            <View>
              <View>
                <View style={styles.FavoriteTopWrapper}>
                  <MaterialCommunityIcons
                    name="crown"
                    size={12}
                    color={colors.primary}
                  />
                  <Text style={styles.FavoriteTopText}>top of the week</Text>
                </View>
                <View style={styles.FavoriteTitlesWrapper}>
                  <Text style={styles.FavoriteTitlesTitle}>{item.title}</Text>
                  <Text style={styles.FavoriteTitlesWeight}>
                    Weight {item.weight}
                  </Text>
                </View>
              </View>
              <View style={styles.FavoriteCardBottom}>
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
            <View style={styles.FavoriteCardRight}>
              <Image style={styles.FavoriteCardImage} source={item.image} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.FavoriteWrapper}>
      {FavoriteData.length > 0 ? (
        <View style={{flex: 1}}>
          <Text style={styles.FavoriteTitle}>Favorite Food</Text>
          <FlatList
            extraData={FlatlistRenderer}
            data={FavoriteData}
            renderItem={RenderFavoriteItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={[
              styles.FavoriteTitle,
              {fontSize: 32, fontWeight: 'bold', color: colors.secondary},
            ]}>
            No Favorite Food in the List
          </Text>
          <Text
            style={[
              styles.FavoriteTitle,
              {
                marginTop: 40,
                fontSize: 26,
                fontWeight: 'bold',
                color: colors.textDark,
              },
            ]}>
            Please, first add some food to the list!
          </Text>
        </View>
      )}
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  FavoriteWrapper: {
    paddingHorizontal: 20,
    flex: 1,
  },
  FavoriteTitle: {
    marginTop: 10,
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: 10,
  },
  FavoriteCardWrapper: {
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
  FavoriteTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  FavoriteTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: 'black',
  },
  FavoriteTitlesWrapper: {
    marginTop: 20,
  },
  FavoriteTitlesTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.textDark,
  },
  FavoriteTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  FavoriteCardBottom: {
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
  FavoriteCardRight: {
    marginLeft: 40,
  },
  FavoriteCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});
