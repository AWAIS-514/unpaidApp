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
    width: 275,
    // paddingVertical: 208,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    height:200,
    // backgroundColor:'pink'
  },
  videoPreview: {
    width: 250,
    height: 150,
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