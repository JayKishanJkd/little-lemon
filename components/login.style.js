import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    containerKeyB:{
        flex:1,
      backgroundColor: 'blue'
    },
    containerScrollView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.senary
   },
  containerLogo: {
    flex:0.3, 
    justifyContent:'center'
  },
 
  containerData:{
    flex:0.7, 
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%', 
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    //marginBottom: 20,
    //backgroundColor:"white"
  },
  inputContainer: {
    //flex:1,
    width: '80%',
    backgroundColor: COLORS.senary,
    marginBottom: SIZES.large,
  },
  selectedBtn: {
    backgroundColor: COLORS.primary,
  },
  selectedTxt: {
    color: COLORS.senary ,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondary,
    fontSize: SIZES.medium,
    //fontWeight:'bold',
    padding: SIZES.small,
    marginBottom: SIZES.xSmall,
    
  },
  toggleBtn:{
    flex:0.50,
    alignContent:'center',
    justifyContent:'center',
    borderRadius: SIZES.xSmall,
    
  },
  toggletxt:{
    color: COLORS.primary,
    fontSize: SIZES.large,
    textAlign: 'center',
    fontWeight: 'bold'
  },    
  toggleView:{
    height:50,
    width:'80%',
    borderRadius:SIZES.xSmall,
    backgroundColor:COLORS.senary,
    flexDirection:'row',
    //alignContent:'center',
    //justifyContent:'center',
    marginBottom: SIZES.xSmall,
    borderColor: COLORS.primary,
    borderWidth: 1,
    alignSelf:'center'
    //justifyContent:'center'
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginButtonText: {
    color: COLORS.senary,
    fontSize: SIZES.large,
    fontWeight: 'bold'
  },
  registerText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});

export default styles;
