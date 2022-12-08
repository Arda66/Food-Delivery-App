import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import CreditCard from 'react-native-credit-card-form-ui';
import colors from '../assets/colors/colors';

const Payment = () => {
  const creditCardRef = React.useRef(null);

  const handleSubmit = React.useCallback(() => {
    if (creditCardRef.current) {
      const {error, data} = creditCardRef.current.submit();
      // console.log('ERROR: ', error);
      Alert.alert('Error!', `${error}`);
      // console.log('CARD DATA: ', data);
    }
  }, []);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={styles.Wrapper}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={20}>
          <CreditCard
            ref={creditCardRef}
            placeholders={{
              number: '0000 0000 0000 0000',
              holder: 'Name and Surname',
              expiration: 'MM/YYYY',
              cvv: '000',
            }}
            labels={{
              holder: 'Card Owner',
              expiration: 'Expiration Date',
              cvv: 'CVV',
            }}
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.Button}>
            <Text style={styles.ButtonText}>Pay</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textLight,
    flex: 1,
    alignItems: 'center',
  },
  Wrapper: {
    marginTop: 30,
    alignItems: 'center',
  },
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: colors.price,
    width: 150,
    height: 50,
    borderRadius: 50,
  },
  ButtonText: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.textDark,
    fontSize: 16,
  },
});
