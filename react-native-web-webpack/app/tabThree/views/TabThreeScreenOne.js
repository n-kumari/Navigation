'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class TabThreeScreenOne extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'#C0C0C0',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text style={{fontWeight: 'bold'}}>{ 'Tab Three Screen One' }</Text>
        <TouchableOpacity
        onPress={
          () => this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:0} })
        }
        style={{
          padding:20,
          borderRadius:20,
          backgroundColor:'deeppink',
          marginTop:20
        }}>
        <Text style={{fontWeight: 'bold'}}>{'jump to tab one'}</Text>
      </TouchableOpacity>
      </View>
    )
  }
}