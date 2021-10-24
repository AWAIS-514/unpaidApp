
import React ,{useState}from "react";
import {connect} from "react-redux";
import { View,StyleSheet,Text,ScrollView, TouchableOpacity,TextInput,Button,Image} from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Signup(Props) {

   
   
   return(
    
    
    
<View style={{flex:1}}>
<ScrollView  style={{flex:1}}>

<View style={{width:'100%',height:180,backgroundColor:'#222240',display:'flex',alignItems:'center',justifyContent:'center'}}>

<Image style={{resizeMode:'contain',marginTop:-30}} source={require('../screen/asset/App_Logo.png')}>

</Image>


</View>








<View style={{width:'100%',backgroundColor:'#fff',padding:10,display:'flex',flexDirection:'column',borderRadius:40,marginTop:-50,minHeight:700,alignItems:'center',justifyContent:'flex-start'}}>


<Text style={{fontSize:14,fontWeight:'800',color:'#8A2BE2',marginTop:15}}>
 Customer Sign Up

</Text>


<View style={styles.passwordContainer}>
  <Icon name="account" color='rgba(80, 78, 78, 0.61)' size={25}  />
  <TextInput
    style={styles.inputStyle}
      autoCorrect={false}
      placeholder="Username"
      // value={this.state.password}
      // onChangeText={this.onPasswordEntry}
    />

</View>




<View style={styles.passwordContainer}>
  <Icon name="lock" color='rgba(80, 78, 78, 0.61)' size={25}  />
  <TextInput
    style={styles.inputStyle}
      autoCorrect={false}
      placeholder="Password"
      // value={this.state.password}
      // onChangeText={this.onPasswordEntry}
    />
<TouchableOpacity>
<Icon name="eye" color='rgba(80, 78, 78, 0.61)' size={25} style={{marginRight:5}} />

</TouchableOpacity>
</View>













<View style={styles.passwordContainer}>
  <Icon name="email" color='rgba(80, 78, 78, 0.61)' size={25}  />
  <TextInput
    style={styles.inputStyle}
      autoCorrect={false}
      placeholder="Email ID"
      // value={this.state.password}
      // onChangeText={this.onPasswordEntry}
    />

</View>










<TouchableOpacity style={{width:'80%',height:47,backgroundColor:'#222240',marginTop:20,borderRadius:7,display:'flex',alignItems:'center',justifyContent:'center'}}>
<Text style={{color:'#fff',fontSize:14,fontWeight:'600'}}>
  Sign up
</Text>
</TouchableOpacity>

</View>

</ScrollView>


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

    export default connect(mapStateToProps,mapDispatchToProps)(Signup)