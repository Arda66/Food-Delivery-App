import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
  ToastAndroid,
  TouchableHighlight,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import categoriesData from '../assets/data/categoriesData';
import colors from '../assets/colors/colors';
import PizzaData from '../assets/data/PizzaData';
import SeafoodData from '../assets/data/SeafoodData';
import HamburgerData from '../assets/data/HamburgerData';
import DessertData from '../assets/data/DessertData';
import SoftDrinkData from '../assets/data/SoftDrinkData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {isSearchBarAvailableForCurrentPlatform} from 'react-native-screens';
const Home = ({navigation}) => {
  const [FlatlistRenderer, setFlatlistRenderer] = useState(false);
  const [SelectedCategory, setSelectedCategory] = useState('Pizza');
  const [tempData, setTempData] = useState(PizzaData);
  const [SearchText, setSearchText] = useState('');
  const SearchRef = useRef(null);
  const CategoryItemPress = item => {
    item.selected = true;
    setSelectedCategory(item.title);
    categoriesData.map(category => {
      category.id != item.id && (category.selected = false);
    });
    setFlatlistRenderer(!FlatlistRenderer);
  };

  useEffect(() => {
    GetData();
    setSearchText('');
  }, []);
  useEffect(() => {
    switch (SelectedCategory) {
      case 'Pizza':
        setTempData(PizzaData);
        return;
      case 'Hamburger':
        setTempData(HamburgerData);
        return;
      case 'Seafood':
        setTempData(SeafoodData);
        return;
      case 'Dessert':
        setTempData(DessertData);
        return;
      case 'Soft Drinks':
        setTempData(SoftDrinkData);
        return;
    }
  }, [FlatlistRenderer]);
  const GetData = () => {
    AsyncStorage.getItem('FavoriteData').then(value => {
      value !== null && (FavoriteData = JSON.parse(value));
    });
  };
  const renderCategoryItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => CategoryItemPress(item)}>
        <View
          style={[
            styles.categoryItemWrapper,
            {
              backgroundColor: item.selected ? colors.primary : colors.white,
              marginLeft: item.id == 1 ? 20 : 0,
            },
          ]}>
          <Image source={item.image} style={styles.categoryItemImage} />
          <Text style={styles.categoryItemTitle}>{item.title}</Text>
          <View
            style={[
              styles.categorySelectWrapper,
              {
                backgroundColor: item.selected
                  ? colors.white
                  : colors.secondary,
              },
            ]}>
            <Feather
              name="chevron-right"
              size={14}
              style={{
                color: item.selected ? colors.black : colors.white,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Orders')}
              onLongPress={() => {
                Alert.alert('Canceling All Orders!', 'Are you sure?', [
                  {
                    text: 'Not Cancel',
                    onPress: () => null,
                    style: 'cancel',
                  },
                  {
                    text: 'Cancel',
                    onPress: () => {
                      OrdersData = [];
                      ToastAndroid.show(
                        'All orders deleted!',
                        ToastAndroid.SHORT,
                      );
                    },
                  },
                ]);
              }}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <MaterialIcons
                name="delivery-dining"
                size={26}
                color={colors.price}
              />
              <Text
                style={{
                  color: colors.price,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                Orders
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      {/* Titles */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <View style={styles.titlesWrapper}>
          <View>
            <Text style={styles.titlesSubtitle}>Food</Text>
            <Text style={styles.titlesTitle}>Menu</Text>
          </View>
          <TouchableOpacity
            onLongPress={() => {
              Alert.alert('Delete All Favorites', 'Are you sure?', [
                {
                  text: 'Cancel',
                  onPress: () =>
                    ToastAndroid.show('Canceled', ToastAndroid.SHORT),
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: () => {
                    AsyncStorage.removeItem('FavoriteData');
                    FavoriteData = [];
                  },
                },
              ]);
            }}
            onPress={() => navigation.navigate('Favorites')}>
            <View style={styles.titlesFavoriteWrapper}>
              <Text style={styles.titlesFavorite}>Favorites</Text>
              <MaterialCommunityIcons
                style={styles.titlesFavoriteIcon}
                name="heart"
                size={36}
                color={colors.secondary}
              />
            </View>
          </TouchableOpacity>
        </View>
        {/* Search */}
        <View style={styles.searchWrapper}>
          <TouchableWithoutFeedback
            onPress={() => {
              SearchRef?.current?.focus();
            }}>
            <Feather name="search" size={20} color={colors.textDark} />
          </TouchableWithoutFeedback>
          <View style={styles.search}>
            <TextInput
              style={styles.searchText}
              placeholder="Search..."
              value={SearchText}
              placeholderTextColor={colors.textLight}
              onChangeText={text => setSearchText(text)}
              autoComplete="off"
              autoCapitalize="words"
              ref={SearchRef}
            />
          </View>
        </View>
        {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Food Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              extraData={FlatlistRenderer}
              showsHorizontalScrollIndicator={false}
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
        </View>
        {/* Popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular Food</Text>
          {tempData &&
            tempData.map((item, index) => (
              <View key={item.id} style={{flex: 1}}>
                {item.title.toLowerCase().includes(SearchText.toLowerCase()) ? (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Details', {item: item});
                    }}>
                    <View
                      style={[
                        styles.popularCardWrapper,
                        {
                          marginTop: item.id == 1 ? 15 : 20,
                          marginBottom: index === tempData.length - 1 ? 20 : 0, // last item
                        },
                      ]}>
                      <View>
                        <View>
                          <View style={styles.popularTopWrapper}>
                            <MaterialCommunityIcons
                              name="crown"
                              size={12}
                              color={colors.primary}
                            />
                            <Text style={styles.popularTopText}>
                              top of the week
                            </Text>
                          </View>
                          <View style={styles.popularTitlesWrapper}>
                            <Text style={styles.popularTitlesTitle}>
                              {item.title}
                            </Text>
                            <Text style={styles.popularTitlesWeight}>
                              Weight {item.weight}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.popularCardBottom}>
                          <View style={styles.addPizzaButton}>
                            <Feather
                              name="plus"
                              size={10}
                              color={colors.textDark}
                            />
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
                      <View style={styles.popularCardRight}>
                        <Image
                          style={styles.popularCardImage}
                          source={item.image}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                ) : null}
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    bottom: 5,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  titlesFavoriteWrapper: {
    marginLeft: 10,
  },
  titlesFavorite: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: colors.secondary,
  },
  titlesFavoriteIcon: {
    alignSelf: 'center',
  },
  searchWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.black,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: 'black',
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    marginRight: 20,
    bottom: 2,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 24,
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginTop: 10,
    color: colors.textDark,
  },
  categorySelectWrapper: {
    backgroundColor: 'white',
    width: 26,
    height: 26,
    borderRadius: 26,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: 'black',
  },
  popularCardWrapper: {
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
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: 'black',
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.textDark,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
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
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});
export default Home;
