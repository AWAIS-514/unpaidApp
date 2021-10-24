
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
function Home(Props) {

let images1=[

  {
    image:'https://firebasestorage.googleapis.com/v0/b/svagime.appspot.com/o/image-removebg-preview%20(3).png?alt=media&token=e0254735-dbcd-49fc-ac45-57a689c033ef'
  },
  {
    image:'https://firebasestorage.googleapis.com/v0/b/svagime.appspot.com/o/image-removebg-preview%20(5).png?alt=media&token=460fedad-3a58-4832-80dd-ceddd1d0b0de'
  }
  ,
  {
    image:'https://firebasestorage.googleapis.com/v0/b/svagime.appspot.com/o/image-removebg-preview%20(3).png?alt=media&token=e0254735-dbcd-49fc-ac45-57a689c033ef'
  },
  {
    image:'https://firebasestorage.googleapis.com/v0/b/svagime.appspot.com/o/image-removebg-preview%20(5).png?alt=media&token=460fedad-3a58-4832-80dd-ceddd1d0b0de'
  },
  {
    image:'https://firebasestorage.googleapis.com/v0/b/svagime.appspot.com/o/image-removebg-preview%20(3).png?alt=media&token=e0254735-dbcd-49fc-ac45-57a689c033ef'
  },
  {
    image:'https://firebasestorage.googleapis.com/v0/b/svagime.appspot.com/o/image-removebg-preview%20(5).png?alt=media&token=460fedad-3a58-4832-80dd-ceddd1d0b0de'
  }
  ,
  {
    image:'https://firebasestorage.googleapis.com/v0/b/svagime.appspot.com/o/image-removebg-preview%20(3).png?alt=media&token=e0254735-dbcd-49fc-ac45-57a689c033ef'
  },
  {
    image:'https://firebasestorage.googleapis.com/v0/b/svagime.appspot.com/o/image-removebg-preview%20(5).png?alt=media&token=460fedad-3a58-4832-80dd-ceddd1d0b0de'
  }
]



  const image = [
    {
     image:'https://firebasestorage.googleapis.com/v0/b/svagime.appspot.com/o/2nd1.png?alt=media&token=bc769b92-85f2-431c-8443-43ea1b708d56',
    },
    {
      image:'https://firebasestorage.googleapis.com/v0/b/svagime.appspot.com/o/2nd2.png?alt=media&token=32a997f6-b7e6-442f-9208-790e470fc25f',
     },
   ]




   let    images= [
    //  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
       require('./asset/1st.png'),          // Local image
        require('./asset/1st.png'),          // Local image
        require('./asset/1st.png'),          // Local image
        require('./asset/1st.png'),          // Local image
        require('./asset/1st.png'),          // Local image
        require('./asset/1st.png'),          // Local image
        require('./asset/1st.png'),          // Local image
              // Local image
       

  ]
   
   
   return(
    
    
    
<View style={{flex:1}}>
<ScrollView  style={{flex:1}}>

   <View style={{width:'100%',height:200,backgroundColor:'#222240',display:'flex',flexDirection:'column'}}>
 <View style={{width:'100%',display:'flex',flexDirection:'row',marginTop:10,padding:5,alignItems:'center',justifyContent:'space-between'}}>
 <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
 <Icon name="sort-reverse-variant" color='#fff' size={35} />

<Text style={{fontWeight:'800',fontSize:17,color:'#fff',marginLeft:4}}>Hello,Rizwan</Text>

 </View>

 <SvgCssUri
    width={120}
    height="100%"
    uri="https://firebasestorage.googleapis.com/v0/b/svagime.appspot.com/o/logo.svg?alt=media&token=5a1a9dd6-1aa7-4b1d-bb25-ca17983379f3"
  /> 
 </View>


<View style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row',marginTop:20}}>
<View style={{ flexDirection:'row' , alignItems:'center',width:'90%',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#fff',borderRadius:13}}>

<TextInput
style={{backgroundColor:'#fff',width:'80%',fontSize:14,height:45}}
  placeholder="Search store for your Bachat !"
/>
<TouchableOpacity>
<Image
style={{width:25,height:25}}
  source={require('./asset/search.png')}
/>
</TouchableOpacity>
</View>
</View>


  </View>

<View style={{width:'100%',backgroundColor:'#fff',marginTop:-65,borderTopLeftRadius:30,borderTopRightRadius:30,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',paddingTop:30,height:200}}>

<SliderBox 
images={images}
  sliderBoxHeight={150}
    parentWidth={windowWidth-20}
  ImageComponentStyle={{borderRadius:25,
  }}
  activeOpacity={0.9}
  dotColor="#000"
  inactiveDotColor="#EEEEEE"
  dotStyle={{
    width: 7,
    height: 7,
    borderRadius: 15,
    padding: 0,
    margin: 0
  }}


  resizeMethod={'resize'}
  resizeMode={'stretch'}
/>

</View>





<View style={{width:'100%',minHeight:5,display:'flex',alignItems:'center',justifyContent:'center',height:10,backgroundColor:'#fff'}}>

<View style={{width:'84%',minHeight:1,display:'flex',alignItems:'center',justifyContent:'center',borderBottomWidth:0.2,borderBottomColor:'#A9A9A9',backgroundColor:'#fff'}}>





</View>

</View>

<View style={{width:'100%',backgroundColor:'#fff',padding:10,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>

<View style={{width:'93%'}}>
<Text style={{color:'#808080',fontSize:12}}>
  Hi,Guest
</Text>

<Text style={{color:'#000',marginLeft:3,fontSize:15,fontWeight:'700'}}>
Search by Department
</Text>
</View>


<View style={{width:'100%',height:100,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',padding:10}}>


<View style={{width:'20%',display:'flex',alignItems:'center',justifyContent:'center'}}>
<TouchableOpacity style={{width:'75%'}}>
  
<View style={{backgroundColor:'#5b67ef',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',flexDirection:'column',borderRadius:9,width:'100%',height:50}}>
<Icon name="silverware-fork-knife" color='#fff' size={35} />
</View>
<Text style={{fontSize:10,fontWeight:'600',marginTop:5}}>Resturant</Text>

</TouchableOpacity>
</View>


<View style={{width:'20%',display:'flex',alignItems:'center',justifyContent:'center'}}>
<TouchableOpacity style={{width:'75%'}}>

<View style={{backgroundColor:'#ff713e',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',flexDirection:'column',borderRadius:9,width:'100%',height:50}}>
<Icon2 name="hospital" color='#fff' size={35} />
</View>
<Text style={{fontSize:10,fontWeight:'600',marginTop:5}}>Hospital</Text>

</TouchableOpacity>
</View>



<View style={{width:'20%',display:'flex',alignItems:'center',justifyContent:'center'}}>
<TouchableOpacity style={{width:'75%'}}>

<View style={{backgroundColor:'#ffaa2e',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',flexDirection:'column',borderRadius:9,width:'100%',height:50}}>
<Icon2 name="shoe-prints" color='#fff' size={35} />
</View>
<Text style={{fontSize:10,fontWeight:'600',marginTop:5}}>Footwear</Text>

</TouchableOpacity>
</View>




<View style={{width:'20%',display:'flex',alignItems:'center',justifyContent:'center'}}>
<TouchableOpacity style={{width:'75%'}}>

<View style={{backgroundColor:'#5ded7e',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',flexDirection:'column',borderRadius:9,width:'100%',height:50}}>
<Icon name="airplane-takeoff" color='#fff' size={35} />
</View>
<Text style={{fontSize:10,fontWeight:'600',marginTop:5}}>Tourism</Text>

</TouchableOpacity>
</View>



<View style={{width:'20%',display:'flex',alignItems:'center',justifyContent:'center'}}>
<TouchableOpacity style={{width:'75%'}}>

<View style={{backgroundColor:'#9b36ea',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',flexDirection:'column',borderRadius:9,width:'100%',height:50}}>
<Icon name="tshirt-crew" color='#fff' size={35} />
</View>
<Text style={{fontSize:10,fontWeight:'600',marginTop:5}}>Apparel</Text>

</TouchableOpacity>
</View>








</View>









<View style={{width:'100%',height:100,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',padding:10}}>



<View style={{width:'20%',display:'flex',alignItems:'center',justifyContent:'center'}}>
<TouchableOpacity style={{width:'75%'}}>

<View style={{backgroundColor:'#ed4343',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',flexDirection:'column',borderRadius:9,width:'100%',height:50}}>
<Icon name="silverware-fork-knife" color='#fff' size={35} />
</View>
<Text style={{fontSize:10,fontWeight:'600',marginTop:5}}>Telecom</Text>

</TouchableOpacity>
</View>



<View style={{width:'20%',display:'flex',alignItems:'center',justifyContent:'center'}}>
<TouchableOpacity style={{width:'75%'}}>

<View style={{backgroundColor:'#006837',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',flexDirection:'column',borderRadius:9,width:'100%',height:50}}>
<Icon2 name="hospital" color='#fff' size={35} />
</View>
<Text style={{fontSize:10,fontWeight:'600',marginTop:5}}>Texation</Text>

</TouchableOpacity>
</View>


<View style={{width:'20%',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#pink'}}>
<TouchableOpacity style={{width:'80%'}}>

<View style={{backgroundColor:'#a57341',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',flexDirection:'column',borderRadius:9,width:'100%',height:50}}>
<Icon2 name="shoe-prints" color='#fff' size={35} />
</View>

</TouchableOpacity>
<Text style={{fontSize:10,fontWeight:'600',marginTop:5}}>Social Media</Text>
</View>






<View style={{width:'20%',display:'flex',alignItems:'center',justifyContent:'center'}}>
<TouchableOpacity style={{width:'75%'}}>

  <View style={{backgroundColor:'#00a7fb',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',flexDirection:'column',borderRadius:9,width:'100%',height:50}}>
  <Icon name="dots-vertical" color='#fff' size={35} />
  </View>
  
</TouchableOpacity>
  <Text style={{fontSize:10,fontWeight:'600',marginTop:5}}>More</Text>
  </View>





<View style={{width:'15%',display:'flex',alignItems:'center',justifyContent:'center'}}>

</View>

</View>










</View>
<View style={{backgroundColor:'#fff'}}>
  
<FlatListSlider
    data={image}
    component={<Preview />}
    width={375}
    timer={5000}
    indicatorActiveWidth={0}
    // separatorWidth={0}
    contentContainerStyle={{paddingHorizontal: 0,height:150}}
    animation
    indicatorActiveColor={'#fff'}
    indicatorInActiveColor={'#fff'}
  />

</View>





<View style={{width:'100%',backgroundColor:'#fff',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
<View style={{width:'93%'}}>
<Text style={{color:'#808080',fontSize:12}}>
  Browse All
</Text>

<Text style={{color:'#000',marginLeft:3,fontSize:15,fontWeight:'700'}}>
offer from top Merchant</Text>
</View>
<FlatListSlider
    data={images1}
    component={<Preview2 />}
    width={5}
    timer={5000}
    indicatorActiveWidth={0}
    separatorWidth={0}
    contentContainerStyle={{paddingHorizontal: 0,height:125}}
    animation
    indicatorActiveColor={'black'}
    indicatorInActiveColor={'#EEEEEE'}
  />

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

    export default connect(mapStateToProps,mapDispatchToProps)(Home)