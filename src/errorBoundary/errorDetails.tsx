import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface ErrorDetailsProps {
  onReset: () => void;
  error: Error;
  errorInfo: {componentStack?: string} | null;
}

const ErrorDetails: React.FC<ErrorDetailsProps> = ({
  onReset,
  error,
  errorInfo,
}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.errorHeading}>{error.message}</Text>
      <View style={styles.scrollViewWrap}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{color: 'white'}}>
            {errorInfo?.componentStack
              ? errorInfo.componentStack
              : 'No component stack available'}
          </Text>
        </ScrollView>
      </View>
      <TouchableOpacity onPress={onReset} style={styles.button}>
        <Text style={{color: 'white'}}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorDetails;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingHorizontal: wp('6%'),
    paddingVertical: hp('2%'),
  },
  errorHeading: {
    color: 'white',
    fontSize: hp('2.88%'),
    fontWeight: 'bold',
  },
  scrollViewWrap: {
    alignSelf: 'center',
    marginVertical: hp('2%'),
    flex: 1,
  },
  button: {
    width: wp('40%'),
    height: hp('6%'),
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
