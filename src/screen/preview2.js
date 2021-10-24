import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

export default (Preview = ({
  style,
  item,
  imageKey,
  onPress,
  index,
  active,
  local,
}) => {
  return (
    <TouchableOpacity
      style={[styles.videoContainer]}
     >
      <View style={[styles.imageContainer]}>
        <Image
          style={styles.videoPreview}
          source={{uri: item[imageKey]}}
        />
      </View>
      <Text style={styles.desc}>{item.desc}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  videoContainer: {
    width: 200,
    // paddingVertical: 208,
    display:'flex',
    paddingTop:30,
    justifyContent: 'center',
    alignItems: 'center',
    height:140,
    // backgroundColor:'pink',
  },
  videoPreview: {
    width: 185,
    height: 120,
    borderRadius: 10,
    resizeMode: 'stretch',
    
    
  },
  desc: {
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 24,
    marginTop: 18,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});