import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants';


const styles = StyleSheet.create({

    
  cardContainer: {
    backgroundColor: COLORS.primary,
    padding: SIZES.xSmall,
    margin: SIZES.xSmall,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 20,
    borderRadius: 15,
  },
  itemContainer: {
    alignContent: 'center',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    marginBottom: SIZES.xSmall,
  },
  itemText: {
    fontSize: SIZES.xxLarge,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: COLORS.senary,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 20,
  },
  nameContainer: {
    alignContent: 'center',
    alignItems: 'center',
    height: 50,
    marginBottom: SIZES.xSmall,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: SIZES.xxLarge,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: COLORS.senary,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 20,
  },
  priceContainer: {
    alignContent: 'center',
    alignItems: 'center',
    height: 90,
    width: 110,
    justifyContent: 'center',
    borderRadius: 70,
  },
  priceText: {
    fontSize: SIZES.xxLarge,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: COLORS.senary,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  priceTextConst: {
    fontSize: SIZES.large,
    alignSelf: 'center',
    color: COLORS.senary,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 20,
  },
  descriptionContainer: {
    height: 90,
    flex: 1,
    justifyContent: 'center',
    marginLeft: SIZES.xSmall,
    padding: SIZES.xSmall,
  },
  descriptionText: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    alignSelf: 'baseline',
    color: COLORS.senary,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 20,
  },
 



});

export default styles;