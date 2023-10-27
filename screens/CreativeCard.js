import React from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';

const CreativeCard = () => {
  const imageURL = 'https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1.jpg';

  return (
    <View style={styles.container}>
    <View style={styles.cardContainer}>
      <Image source={{ uri: imageURL }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Chopped Salad</Text>
        <Text style={styles.description}>A refreshing and healthy salad that's perfect for a summer lunch or dinner.</Text>
      </View>
    </View>
     </View>
  );
};

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black'
    },
  cardContainer: {
    width: 300,
    height: 400,
    borderRadius: 10,
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#888',
  },
});

export default CreativeCard;
