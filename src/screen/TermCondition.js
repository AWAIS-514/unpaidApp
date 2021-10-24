
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
function TermCondi(Props) {

   
   
   return(
    
    
    
<View style={{flex:1}}>
<ScrollView  style={{flex:1}}>

   <View style={{width:'100%',height:180,backgroundColor:'#222240',display:'flex',alignItems:'center',justifyContent:'center'}}>

  <Image style={{resizeMode:'contain',marginTop:-30}} source={require('../screen/asset/App_Logo.png')}>

  </Image>


  </View>








<View style={{width:'100%',backgroundColor:'#fff',padding:10,display:'flex',flexDirection:'column',borderRadius:40,marginTop:-50,minHeight:700}}>
<View style={{width:'93%',marginTop:10,marginLeft:5}}>
<Text style={{color:'#808080',fontSize:10}}>
Home &gt; Term & Condition</Text>



<Text style={{color:'#000',fontSize:14,fontWeight:'700',marginTop:35,marginLeft:4}}>
Term & Condition | Maazi Bachat</Text>
</View>




<View>

<Text style={{fontSize:13,fontWeight:'500',marginTop:35,marginLeft:11}}>
    Title Dummy Text
</Text>




<Text style={{fontSize:10,marginTop:5,marginLeft:11,textAlign:'left'}}>
In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form ofIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Text>

</View>





<View>

<Text style={{fontSize:13,fontWeight:'500',marginTop:35,marginLeft:11}}>
    Title Dummy Text
</Text>




<Text style={{fontSize:10,marginTop:5,marginLeft:11,textAlign:'left'}}>
In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form ofIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Text>

</View>



<View>

<Text style={{fontSize:13,fontWeight:'500',marginTop:35,marginLeft:11}}>
    Title Dummy Text
</Text>




<Text style={{fontSize:10,marginTop:5,marginLeft:11,textAlign:'left'}}>
In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form ofIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Text>

</View>



</View>

</ScrollView>


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

    export default connect(mapStateToProps,mapDispatchToProps)(TermCondi)