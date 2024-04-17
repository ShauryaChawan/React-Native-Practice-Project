import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'light';
  // const isDarkMode = false;
  // const isDarkMode = true;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={isDarkMode ? styles.whiteTax : styles.blackTax}>
          {/* <Text style={isDarkMode ? styles.whiteTax : styles.blackTax}> */}
          Hello World !
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteTax: {
    color: 'white',
    backgroundColor: 'black',
  },
  blackTax: {
    color: 'black',
    backgroundColor: 'white',
  },
});

export default AppPro;
