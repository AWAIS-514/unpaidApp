
import React ,{useState}from "react";
import {connect} from "react-redux";
import { View,StyleSheet,Text,ScrollView, TouchableOpacity,TextInput,Button,Image} from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OTPInputView from '@twotalltotems/react-native-otp-input'

function OTP(Props) {

   
   
   return(
    
    
    
<View style={{flex:1}}>

<View style={{width:'100%',height:180,backgroundColor:'#222240',display:'flex',alignItems:'center',justifyContent:'center'}}>

<Image style={{resizeMode:'contain',marginTop:-30}} source={require('../screen/asset/App_Logo.png')}>

</Image>


</View>








<View style={{width:'100%',backgroundColor:'#fff',padding:10,display:'flex',flexDirection:'column',borderRadius:40,marginTop:-50,alignItems:'center',justifyContent:'flex-start'}}>


<Text style={{fontSize:14,fontWeight:'800',color:'#8A2BE2',marginTop:15}}>
 Lets Make A Account For you

</Text>


<View style={styles.passwordContainer}>
  <TextInput
    style={styles.inputStyle}
      autoCorrect={false}
      placeholder="Mobile Number"
      // value={this.state.password}
      // onChangeText={this.onPasswordEntry}
    />
  <Icon name="phone" color='rgba(80, 78, 78, 0.61)' size={25}  />

</View>

<TouchableOpacity style={{width:'80%',height:47,backgroundColor:'#222240',marginTop:20,borderRadius:7,display:'flex',alignItems:'center',justifyContent:'center'}}>
<Text style={{color:'#fff',fontSize:14,fontWeight:'600'}}>
  Send Otp
</Text>
</TouchableOpacity>

</View>
















<View style={{width:'100%',backgroundColor:'#fff',padding:10,display:'flex',flexDirection:'column',borderRadius:40,marginTop:50,alignItems:'center',justifyContent:'flex-start'}}>


<Text style={{fontSize:14,fontWeight:'800',color:'#8A2BE2',marginTop:15}}>
 Lets Verify You Otp!

</Text>


<View>



<OTPInputView
    style={{width: '80%', height: 200}}
    pinCount={6}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code) => {
        console.log(`Code is ${code}, you are good to go!`)
    }}
/>


</View>

<TouchableOpacity style={{width:'80%',height:47,backgroundColor:'#222240',marginTop:20,borderRadius:7,display:'flex',alignItems:'center',justifyContent:'center'}}>
<Text style={{color:'#fff',fontSize:14,fontWeight:'600'}}>
  Verify Otp
</Text>
</TouchableOpacity>

</View>


</View> 


    )
}

const styles = StyleSheet.create({

    passwordContainer: {
      width:300,
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'rgba(80, 78, 78, 0.61)',
      display:'flex'
      ,alignItems:'center'
      ,justifyContent:'center',
      borderRadius:5,
      paddingLeft:10,
      marginTop:23
    },
    inputStyle: {
      flex: 300,
      height:40
    },
    borderStyleBase: {
        width: 30,
        height: 45
      },
    
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
    
      underlineStyleBase: {
        width: 40,
        height: 45,
        borderWidth: 1,
        // borderBottomWidth: 1,
      },
    
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },
    })


  

  const mapStateToProps = (state) => {
    return {
    name1:state.name
    }
  }
  
  
  const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
    //   get_data: () => dispatch(get_data)  
    
    }}

    export default connect(mapStateToProps,mapDispatchToProps)(OTP)