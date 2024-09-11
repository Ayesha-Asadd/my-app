import { StyleSheet, Text, View, StatusBar } from 'react-native'; // Import StatusBar from react-native
import Head from "./Components/Head"; // Import Head from your local component

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> {/* Ensure StatusBar is imported correctly */}
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

