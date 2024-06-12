import { StyleSheet, Text, View } from 'react-native';

import * as ExpoStapeSdkModule from 'expo-stape-sdk-module';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoStapeSdkModule.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
