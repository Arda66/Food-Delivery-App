import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../assets/colors/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardComponent from './CardComponent';

const Favorites = ({navigation}) => {
  const [FlatlistRenderer, setFlatlistRenderer] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('FavoriteData').then(value => {
      value !== null && (FavoriteData = JSON.parse(value));
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
          <CardComponent item={item} index={index} ArrayData={FavoriteData} />
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
            Favorite Food List is empty!
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
            Lets add some food to the list!
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
});
