import React from 'react';
import { Text, View, Alert, Button, StyleSheet } from 'react-native';

export default function App() {
  const onButtonPress = () => {
    Alert.alert(new Date().toLocaleTimeString() + " button pressed");
  }
  return (
    <View style={styles.page}>
      <Text style={[styles.text, styles.selectedText]}>Red</Text>
      <Text style={styles.text}>Green</Text>
      <Text style={styles.text}>Blue</Text>
        <Button title="Click me!" onPress={onButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems:  "center",
        marginTop: 40,
        backgroundColor: '#f2f2f2'
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
     }
});

