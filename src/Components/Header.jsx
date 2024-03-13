import { View, Text } from 'react-native'
import React from 'react'

export default function Header(prop) {
  return (
    <View style={{marginLeft:15}}>
      <Text style={{fontWeight:'bold', fontSize:28}}>
        {prop.name}
      </Text>
    </View>
  )
}