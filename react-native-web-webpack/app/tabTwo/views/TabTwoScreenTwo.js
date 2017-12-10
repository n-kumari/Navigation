'use strict'
import React from 'react'
import { View, Text } from 'react-native'
export default class TabTwoScreenTwo extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'#C0C0C0',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Tab Two Screen Two' }</Text>
      </View>
    )
  }
}