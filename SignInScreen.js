import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Platform,
  TextInput,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };
  const handleInputChange = (val) => {
      setData({
        ...data,
        password: val,
      });
  };
  const updateSecureTextEntry =(val)=>{
    setData({
      ...data,
      secureTextEntry:!data.secureTextEntry
    })
  }
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor='#009387' barStyle='light-content'/>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View style={styles.footer}
                        animation='fadeInUpBig'>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
    <Animatable.View
             animation='bounceIn'
             >
              <Feather name="check-circle" color="green" size={20} />
    </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry?true:false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handleInputChange(val)}
          />
        <TouchableOpacity onPress={updateSecureTextEntry}>
        {data.secureTextEntry 
                          ?
                           <Feather name="eye-off" color="grey" size={20} />:
          <Feather name="eye" color="black" size={20} />
        }
        </TouchableOpacity>
        </View>
        <TouchableOpacity>
                <Text style={{color: '#05375a', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
        <View style={styles.button}>
      <LinearGradient
                    colors={['#9D9DBD', '#666699']}
                     style={styles.signIn}
                     >          
                     <Text 
                          style={[styles.textSign,{
                       color:'#fff'
                     }]}
                     >Sign In</Text>
      </LinearGradient>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')}
                          style={[styles.signIn,{
                            borderColor:'#8787AF',
                            borderWidth:1,
                            marginTop:15
                          }]}>
      <Text style={[styles.textSign,{
            color:'#8787AF'
      }]}>Sign Up
      </Text>
        </TouchableOpacity>
      </View>
      </Animatable.View>
    </View>
  );
};
export default SignInScreen;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8787AF',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
