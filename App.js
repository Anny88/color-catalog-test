import React from 'react';
import { Text, View, Alert, Button, StyleSheet, Dimensions, Image } from 'react-native';
import pic1 from "./assets/Download.jpeg";
import pic2 from "./assets/images.jpeg";

export default function App() {
  const onButtonPress = () => {
    Alert.alert(new Date().toLocaleTimeString() + " button pressed");
  }
  return (
    <View>
        <View style={styles.page}>
          <Text style={[styles.text, styles.selectedText]}>Red</Text>
          <Text style={styles.text}>Green</Text>
          <Text style={styles.text}>Blue</Text>
        </View>
        <Button title="Click me!" onPress={onButtonPress} style={{ marginTop: 40}}/>
        <View style={styles.imageContainer}>
            <Image source={pic1} style={styles.image} />
            <Image source={pic2} style={styles.image} />
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    page: {
        marginTop: 40,
        backgroundColor: '#f2f2f2'
    },
    imageContainer: {
        marginTop: 40
    },
    text: {
        fontSize: 16,
        color: '#dedede',
        backgroundColor: '#000',
        margin: 10,
        padding: 5
    },
     selectedText: {
        color: '#000',
        backgroundColor: '#fff',
     },
    image: {
        flex: 1,
        borderRadius: 50,
        margin: 10,
        width: Dimensions.get("window").width - 10
    }
});

