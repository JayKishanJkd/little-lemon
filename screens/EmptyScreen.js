import CreativeCard from './CreativeCard';
import { StyleSheet } from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <CreativeCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
