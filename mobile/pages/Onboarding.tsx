import React from 'react'
import { Text, Image,StyleSheet , TouchableOpacity,  } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';



const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={styles.textStyle}>Skip</Text>
    </TouchableOpacity>

);
const Next = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={styles.textStyle}>Next</Text>
    </TouchableOpacity>
);

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={styles.textStyle}>Done</Text>
    </TouchableOpacity>
);


const OnboardingScreen = ({navigation}) => {
    return (
        
      <Onboarding
          onSkip={() => navigation.replace('Login')}
          onDone={() => navigation.navigate('Login')}
          SkipButtonComponent={Skip}
          NextButtonComponent={Next}
          DoneButtonComponent={Done}
          
        
        
          pages={[
              {
                  backgroundColor: '#fff',
                  image: <Image source={require('../assets/esccoter1.png')}
                      style={{ width: 200, height: 200 }}
                  />,
                  title: 'E-Scooter',
                  subtitle: 'The best app for renting electric scooters ',
              },
              {
                  backgroundColor: '#fff',
                  image: <Image source={require('../assets/esccoter2.png')}
                      style={{ width: 200, height: 200 }}
                  />,
                  title: 'Find Scooters',
                  subtitle: 'Find the nearest scooters to your',
              },
              {
                  backgroundColor: '#fff',
                  image: <Image source={require('../assets/esccoter3.png')}
                      style={{ width: 200, height: 200 }}
                  />,
                  title: 'Book Scooters',
                  subtitle: "Book your scooter in just a few clicks",
              },
          ]}
          
            />
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 16,
        color: '#4E5153',
        backgroundColor: '#92E3A9',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20,
    },
})






