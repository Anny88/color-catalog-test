import React from 'react';
import { Text, View, Alert, Button, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import pic2 from './assets/images.jpeg';

export default function App() {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button pressed`);
  };

  const pic1 = require('./assets/Download.jpeg');
  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={[styles.text, styles.selectedText]}>Red</Text>
        <Text style={styles.text}>Green</Text>
        <Text style={styles.text}>Blue</Text>
      </View>
      <Button title="Click me!" onPress={onButtonPress} style={{ margin: 20 }} />
      <View style={styles.imageContainer}>
        <Image source={pic1} style={styles.image} />
        <Image source={pic2} style={styles.image} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    marginTop: 40,
    backgroundColor: '#f2f2f2',
  },
  imageContainer: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    color: '#dedede',
    backgroundColor: '#000',
    margin: 10,
    padding: 5,
  },
  selectedText: {
    color: '#000',
    backgroundColor: '#fff',
  },
  image: {
    borderRadius: 50,
    margin: 10,
    width: Dimensions.get('window').width / 2 - 20,
    height: 150,
    resizeMode: 'cover',
  },
  pic: {
    flex: 1,
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
