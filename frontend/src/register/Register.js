import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// uikit components
import ArrowIcon from '../uikit/arrow_icon';
import { StyleSheet } from 'react-native';
import FacebookIcon from '../uikit/facebook';
import TwitterIcon from '../uikit/twitter';
import GooglePlusIcon from '../uikit/googleplus';

// Register is very similar to login. The only difference is that it has an extra input field for the user to enter their email address.
// Refer to login for comments on the code.
// However when fully implemented, the register screen will also have buttons to register with Facebook, Twitter or Google APIs.
// The submit button also would have a different function that requires implmenting a new API call.
const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style = {styles.container}>

        <View style={styles.flavor}>
          <Text style={styles.flavor_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</Text>
        </View>

        <View style ={styles.login_or_register}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.sensitive_validation}>
            <Text style={styles.sensitive_validation_text}>SIGN UP</Text>
          </TouchableOpacity>
          <View style={{width: 20}}/>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.insensitive_validation}>
            <Text style={styles.insensitive_validation_text}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form_container}>
          <View style={styles.input_container}>
            <Text style={styles.input_type}>USERNAME</Text>
            <TextInput
              style = {styles.input}
              value={username} 
              onChangeText={setUsername} 
              placeholder = "Username..."
              autoCapitalize='none'
              maxLength = {40}
            />
          </View>

          <View style={styles.input_container}>
            <Text style={styles.input_type}>EMAIL           </Text>
            <TextInput
              style = {styles.input}
              value={email} 
              onChangeText={setEmail} 
              placeholder = "Email..."
              autoCapitalize='none'
              maxLength = {40}
            />
          </View>

          <View style={styles.input_container}>
            <Text style={styles.input_type}>PASSWORD</Text>
            <TextInput 
              style = {styles.input}
              value={password} 
              onChangeText={setPassword} 
              secureTextEntry
              placeholder = "Password..."
              autoCapitalize='none'
              maxLength = {40}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row', position: 'absolute', bottom: 145}}>
          <TouchableOpacity style={styles.circle}><FacebookIcon/></TouchableOpacity>
          <TouchableOpacity style={styles.circle}><TwitterIcon/></TouchableOpacity>
          <TouchableOpacity style={styles.circle}><GooglePlusIcon/></TouchableOpacity>
        </View>

        <TouchableOpacity style={username != '' && email != '' && password != '' ? styles.validate : styles.incomplete}>
          <ArrowIcon/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  circle:{
    width: 55,
    height: 55,
    borderWidth: 1,
    borderRadius: 55/2,
    borderColor: '#BCE0FD',
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  form_container: {
    bottom: 50
  },

  flavor: {
    width: 276,
    height: 72,
    bottom: 30
  },
  flavor_text: {
    fontSize: 20,
    color: '#2699FB'
  },

  login_or_register: {
    flexDirection: 'row',
    margin: 20,
    marginTop: 80,
    bottom: 95,
    padding: 5
  },

  insensitive_validation: {
    width:96,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2699FB',
    borderRadius: 8,
  },
  insensitive_validation_text: {
    color: "#FDFDFD",
    fontWeight: 700,
    fontSize: 10
  },
  sensitive_validation: {
    width:96,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor:'#BCE0FD'
  },
  sensitive_validation_text: {
    color: "#2699FB",
    fontWeight: 700,
    fontSize: 10
  },

  validate: {
    width:328,
    height:48,
    top: 90,
    backgroundColor: '#2699FB',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  incomplete: {
    width:328,
    height:48,
    top: 90,
    backgroundColor: '#BEBEBE',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input_container: {
    borderBottomWidth: 1,
    borderBottomColor: "#BCE0FD",
    marginBottom: 12,
    flexDirection: 'row',
    bottom: 30
  },

  input_type: {
    height: 20,
    top: 20,
    marginRight: 30,
    color: "#2699FB",
    fontWeight: 700
  },

  input: {
    height: 20,
    width: 180,
    top:8,
    margin: 12,
    color: "#2699FB"
  }
});