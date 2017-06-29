import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Signup extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.formHeading}>Create Account</Text>

        <Icon.Button name="facebook" style={styles.socialbtn} >
          <View style={styles.socialTxtcontainer}>
            <Text style={styles.socialbtnTxt} >
            SIGN UP WITH FACEBOOK</Text>
          </View>
        </Icon.Button>

        <View style={styles.dividerContainer}>
         <Text style={styles.dividerLine}>--------------</Text>
         <Text style={styles.formDivider}>OR CREATE MANUALLY</Text>
         <Text style={styles.dividerLine}>---------------</Text>
        </View>

        <View style={styleInput.inputContainer}>
          <Text style={styleInput.label}>First Name</Text>
          <TextInput
            style={styleInput.input}
          />
        </View>
        <View style={styleInput.inputContainer}>
          <Text style={styleInput.label}>Last Name</Text>
          <TextInput
            style={styleInput.input}
          />
        </View>
        <View style={styleInput.inputContainer}>
          <Text style={styleInput.label}>Email</Text>
          <TextInput
            style={styleInput.input}
            underlineColorAndroid='rgba(0,0,0,0)'
          />
        </View>
        <View style={styleInput.inputContainer}>
          <Text style={styleInput.label}>Password</Text>

          <TextInput
            style={styleInput.input}
            secureTextEntry= "true"
          />
          <Icon style={styleInput.iconEye} name="eye" size={30} color="#000" />
         </View>

        <Text style={styles.isAccount}>Already have an account ? <Text style={styles.signinTxt}>Sign In</Text></Text>

        <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.createBtn}>
                <Text style={styles.createBtnTxt}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff799',
    padding: 30,

  },
  formHeading: {
    fontSize: 32,
    marginTop: 20,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60,
  },
  dividerLine: {
    height: 1,
    marginTop: 38,
    backgroundColor: '#777777',
  },
  formDivider: {
    padding: 10,
    marginTop: 20,
  },
  socialbtn: {
   borderRadius: 0,
   backgroundColor: "#fff799",
   borderWidth: 2,
  },
  socialTxtcontainer: {
  borderLeftWidth: 1,
  paddingLeft:10,
  marginLeft:20,
  },
  socialbtnTxt: {
    fontFamily: 'Arial', fontSize: 15,
    padding:10,
  },
  isAccount: {
    textAlign: 'center',
    paddingTop: 30,
  },
  signinTxt: {
    fontWeight: 'bold'
  },
  createBtn: {
    marginTop:20,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#3b5998',
    alignSelf: "stretch",
  },
  createBtnTxt: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 3
  }
});

const styleInput = {
    inputContainer: {
        position: 'relative',
        height: 70,
        borderBottomWidth:1,
    },
    label: {
        fontSize: 14,
        marginTop: 20,
        color: '#777777',
        letterSpacing: 0.9,
        fontWeight: '500',
    },
    input: {
        height: 34,
        fontSize: 14,
        paddingTop: 10,
        paddingBottom: 1,
        paddingLeft: 0
    },
    iconEye: {
      position: 'absolute',
      bottom: 5,
      fontSize: 20,
      right: 5,
      color: '#777777',
    }
};
