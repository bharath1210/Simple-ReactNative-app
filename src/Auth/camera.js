import React, { Component } from 'react';
import * as Permissions from 'expo-permissions'
// import { Constants, Camera, FileSystem, Permissions, BarCodeScanner,FaceDetector } from 'expo';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { RNCamera } from 'react-native-camera';

class Cameracam extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    async componentWillMount() {
        try {
            console.log(Permissions)
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            this.setState({ permissionsGranted: status === 'granted' });
        } catch (error) {
            console.log('denied')
        }
      
      }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          type={RNCamera.Constants.Type.back}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style={styles.capture}
          >
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center'
},
capture: {
  flex: 0,
  backgroundColor: '#fff',
  borderRadius: 5,
  padding: 15,
  paddingHorizontal: 20,
  alignSelf: 'center',
  margin: 20
}
});

export default Cameracam ;