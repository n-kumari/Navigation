'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
export default class TabTwoScreenOne extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'#C0C0C0',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text style={{fontWeight: 'bold'}} >{ 'Tab Two Screen One' }</Text>
        <TouchableOpacity
          onPress={ () => Linking.openURL('peopleapp://people/0'
          ).catch(err => console.error('An error occurred', err))        }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow',
            marginTop:20
          }}>
        <Text style={{fontWeight: 'bold'}}>{'Magic'}</Text>
      </TouchableOpacity>
      </View>
    )
  }
}