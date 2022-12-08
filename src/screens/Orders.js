import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../assets/colors/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CardComponent from '../components/CardComponent';
const Orders = ({navigation}) => {
  const [FlatlistRenderer, setFlatlistRenderer] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    OrdersData.map(item => (price += item.price));
    setTotalPrice(price.toFixed(2));
  });

  const RemoveItem = (price, id) => {
    Alert.alert('Delete Order', 'Are you sure you want to delete this order?', [
      {
        text: 'Not cancel',
        onPress: () => null,
      },
      {
        text: 'Cancel',
        onPress: () => {
          OrdersData = OrdersData.filter(item => item.id !== id);
          setTotalPrice((totalPrice - price).toFixed(2));
          setFlatlistRenderer(!FlatlistRenderer);
          ToastAndroid.show('Order canceled', ToastAndroid.SHORT);
        },
      },
    ]);
  };
  const renderOrderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          onLongPress={() => {
            RemoveItem(item.price, item.id);
          }}
          key={item.id}
          onPress={() => {
            navigation.navigate('Details', {item: item});
          }}>
          <CardComponent item={item} index={index} ArrayData={OrdersData} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.OrderWrapper}>
      {OrdersData.length > 0 ? (
        <View style={{flex: 1}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.OrderTitle}>
              Orders Get Prepared For Delivery soon!
            </Text>
            <FontAwesome5 name="motorcycle" size={35} color={colors.price} />
          </View>
          <FlatList
            extraData={FlatlistRenderer}
            data={OrdersData}
            keyExtractor={item => item.id}
            renderItem={renderOrderItem}
            showsVerticalScrollIndicator={false}
          />
          <Text style={styles.totalPrice}>Total Price : ${totalPrice}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => navigation.navigate('Payment')}>
              <View style={styles.buttonTextWrapper}>
                <Text style={styles.buttonText}>Go to the Payment</Text>
                <FontAwesome
                  style={{marginRight: 10}}
                  name="cc-visa"
                  size={30}
                  color={'blue'}
                />
                <FontAwesome name="cc-mastercard" size={30} color={'blue'} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={[
              styles.FavoriteTitle,
              {
                fontSize: 32,
                fontWeight: 'bold',
                color: colors.secondary,
                marginTop: 20,
              },
            ]}>
            Order List is empty!
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
            Lets order some food!
          </Text>
        </View>
      )}
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  OrderWrapper: {
    paddingHorizontal: 20,
    flex: 1,
  },
  OrderTitle: {
    fontSize: 25,
    width: '85%',
    lineHeight: 30,
    color: colors.price,
    marginVertical: 20,
    alignSelf: 'center',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  totalPrice: {
    fontSize: 30,
    textAlign: 'center',
    color: colors.price,
    fontFamily: 'Montserrat-SemiBold',
    marginVertical: 30,
  },
  buttonText: {
    marginRight: 50,
    color: colors.black,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    fontWeight: 'bold',
    paddingVertical: 23,
  },
  buttonTextWrapper: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 50,
    shadowColor: colors.black,
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
