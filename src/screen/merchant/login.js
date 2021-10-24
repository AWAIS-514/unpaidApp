
import React ,{useState}from "react";
import {connect} from "react-redux";
import { View,StyleSheet,Text,ScrollView, TouchableOpacity,TextInput,Image} from 'react-native';
// import {get_data} from '../../store/acion/index';
import { SvgCssUri } from 'react-native-svg';
import CheckBox from 'react-native-check-box'


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function MerchantLogin(Props) {

   
   return(
    
    
    
<View style={{flex:1}}>
<View style={{minHeight:200,backgroundColor:'#222240',display:'flex',alignItems:'center',justifyContent:'center'}}>

<Image style={{width:270,height:130}} source={require('../../screen/asset/toplogo.png')}></Image>

    </View>
    <View style={{marginTop:-40,height:100}}>
    <SvgCssUri
    width="100%"
    height={600}
    uri="https://firebasestorage.googleapis.com/v0/b/svagime.appspot.com/o/Main%20Bg.svg?alt=media&token=8349e777-64d7-4436-a95c-0bad166c16f3"
    />
    </View>

<View style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
<SvgCssUri
    width={170}
    height={170}
    uri="https://firebasestorage.googleapis.com/v0/b/svagime.appspot.com/o/Circle%20Logo.svg?alt=media&token=57c6b9e7-1124-4855-a12a-de548ae7f58c"
    />
</View>



<ScrollView>

<View style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:30}} >


<Text style={{fontSize:14,fontWeight:'800',color:'#222240'}}>
  Hello Merchant Let's Go!

</Text>



<View style={styles.passwordContainer}>
  <Icon name="account" color='rgba(80, 78, 78, 0.61)' size={30}  />
  <TextInput
    style={styles.inputStyle}
      autoCorrect={false}
      placeholder="Username"
      // value={this.state.password}
      // onChangeText={this.onPasswordEntry}
    />

</View>




<View style={styles.passwordContainer}>
  <Icon name="lock" color='rgba(80, 78, 78, 0.61)' size={30}  />
  <TextInput
    style={styles.inputStyle}
      autoCorrect={false}
      placeholder="Username"
      secureTextEntry
      // value={this.state.password}
      // onChangeText={this.onPasswordEntry}
    />

</View>

<View style={{display:'flex',flexDirection:'row',width:'75%',alignItems:'center',justifyContent:'space-between'}}>
<View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',width:100}}>
  
<CheckBox
    style={{ padding: 5,width:40}}
    onClick={()=>{
      // this.setState({
      //     isChecked:!this.state.isChecked
      // })
    }}
    isChecked={
      true
    }

/>

<Text style={{color:'#000',fontSize:10}}>Remember Me</Text>


</View>




<View><TouchableOpacity><Text style={{color:'#000',fontSize:10}}>Forgot Password?</Text></TouchableOpacity></View>


</View>

<TouchableOpacity style={{width:'75%',height:47,backgroundColor:'#222240',marginTop:5,borderRadius:7,display:'flex',alignItems:'center',justifyContent:'center'}}>
<Text style={{color:'#fff'}}>
  LOG IN
</Text>
</TouchableOpacity>
<TouchableOpacity><Text style={{color:'#000',fontSize:10,marginTop:5}}>Don't have an Account Yet?</Text></TouchableOpacity>



<TouchableOpacity><Text style={{color:'blue',fontSize:13,marginTop:5,fontWeight:'600'}}>Create an account</Text></TouchableOpacity>





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

    export default connect(mapStateToProps,mapDispatchToProps)(MerchantLogin)