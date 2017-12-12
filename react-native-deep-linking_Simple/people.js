import React from 'react';

import { Text, Image, View, StyleSheet } from 'react-native';

const people = {
  name: 'Bender',
  image: 'https://vignette2.wikia.nocookie.net/en.futurama/images/4/43/Bender.png/revision/latest?cb=20150206072725',
}

class People extends React.Component {
  static navigationOptions = {
    title: 'People',
  };
  render() {
    return (
      <View>
        <Text style={styles.text}>{people.name}</Text>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{ uri: people.image }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 19,
    fontSize: 22,
  },
  image: {
    width: 400,
    height: 400,
  },
})

export default People;
