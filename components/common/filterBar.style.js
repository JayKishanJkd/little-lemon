import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants';


const styles = StyleSheet.create({

    filterInput: {
        borderWidth: 1,
        width:'33%',
        borderColor: 'gray',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginVertical: 8,
        marginRight: 9,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 20,
      },
      filterButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        width: '28%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
      },
      filterButtonText: {
        color: COLORS.senary,
        fontSize: FONT.body3,
        fontWeight:'bold'
      },



});

export default styles;