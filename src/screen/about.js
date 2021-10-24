
import React ,{useState}from "react";
import {connect} from "react-redux";
import { View,StyleSheet,Text,ScrollView, TouchableOpacity,TextInput,Button,Image} from 'react-native';
import {get_data} from '../store/acion/index';
import { SvgCssUri } from 'react-native-svg';
import { SliderBox } from "react-native-image-slider-box";
import { Dimensions } from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {FlatListSlider} from 'react-native-flatlist-slider';
const windowWidth = Dimensions.get('window').width;
import Preview from './preview'
import Preview2 from './preview2'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function About(Props) {

   
   
   return(
    
    
    
<View style={{flex:1}}>
{/* <ScrollView  style={{flex:1}}> */}

<View style={{width:'100%',height:180,backgroundColor:'#222240',display:'flex',alignItems:'center',justifyContent:'center'}}>

<Image style={{resizeMode:'contain',marginTop:-30}} source={require('../screen/asset/App_Logo.png')}>

</Image>


</View>








<View style={{width:'100%',backgroundColor:'#fff',padding:10,display:'flex',flexDirection:'column',borderRadius:40,marginTop:-50,minHeight:700}}>
<View style={{width:'93%',marginTop:10,marginLeft:5}}>
<Text style={{color:'#808080',fontSize:10}}>
Home &gt; About us</Text>



<Text style={{color:'#000',fontSize:14,fontWeight:'700',marginTop:35,marginLeft:4}}>
About | Maazi Bachat</Text>
</View>




<View>

<Text style={{fontSize:13,fontWeight:'500',marginTop:35,marginLeft:11}}>
    Connecting Merchant With People
</Text>




<Text style={{fontSize:10,marginTop:5,marginLeft:11,textAlign:'left'}}>
In publishing and graphic design, LIn publishing and graphic design, LIn publishing and graphic design, LIn publishing.</Text>

</View>





<View>

<Text style={{fontSize:13,fontWeight:'500',marginTop:35,marginLeft:11}}>
    No Hidden Fees
</Text>




<Text style={{fontSize:10,marginTop:5,marginLeft:11,textAlign:'left'}}>
In publishing and graphic design, LIn publishing and graphic design, LIn publishing and graphic design, LIn publishing.</Text>

</View>



<View>

<Text style={{fontSize:13,fontWeight:'500',marginTop:35,marginLeft:11}}>
    Instant Discounts
</Text>




<Text style={{fontSize:10,marginTop:5,marginLeft:11,textAlign:'left'}}>
In publishing and graphic design, LIn publishing and graphic design, LIn publishing and graphic design, LIn publishing.</Text>

</View>

<View>

<Text style={{fontSize:13,fontWeight:'500',marginTop:35,marginLeft:11}}>
    24/7 Support
</Text>




<Text style={{fontSize:10,marginTop:5,marginLeft:11,textAlign:'left'}}>
In publishing and graphic design, LIn publishing and graphic design, LIn publishing and graphic design, LIn publishing.</Text>

</View>


</View>

{/* </ScrollView> */}


</View> 


    )
}




  

  const mapStateToProps = (state) => {
    return {
    name1:state.name
    }
  }
  
  
  const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      get_data: () => dispatch(get_data)  
    
    }}

    export default connect(mapStateToProps,mapDispatchToProps)(About)