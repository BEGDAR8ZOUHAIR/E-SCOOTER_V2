import MapView, {POROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Dimensions  } from 'react-native';


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;  
const LATITUDE_DELTA = 0.015;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const INITIAL_POSITION = {
  latitude: 32.300815,
  longitude: -9.227203,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};



const App = () => {

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={POROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
       
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default App;

