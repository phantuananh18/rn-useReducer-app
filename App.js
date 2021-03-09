import React, { useState, useReducer } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from './src/components/CustomButton'

const reducer = (state, action) => {
  switch (action.type) {
    case 'red':
      return { ...state, red: state.red + action.payload }
    case 'green':
      return { ...state, green: state.green + action.payload }
    case 'blue':
      return { ...state, blue: state.blue + action.payload }
    default:
      return state

  }
}
const initialState = {
  red: 0,
  blue: 0,
  green: 0
}


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { red, green, blue } = state



  return (
    <View>
      <CustomButton
        title="RED"
        onIncrease={() => {
          dispatch({
            type: 'red',
            payload: 100
          })
        }}
        onDecrease={() => {
          dispatch({
            type: 'red',
            payload: -100
          })
        }}
      />

      <CustomButton
        title="GREEN"
        onIncrease={() => {
          dispatch({
            type: 'green',
            payload: 100
          })
        }}
        onDecrease={() => {
          dispatch({
            type: 'green',
            payload: -100
          })
        }}
      />

      <CustomButton
        title="BLUE"
        onIncrease={() => {
          dispatch({
            type: 'blue',
            payload: 100
          })
        }}
        onDecrease={() => {
          dispatch({
            type: 'blue',
            payload: -100
          })
        }}
      />

      <View
        style={{
          width: 200, height: 200, alignSelf: 'center',
          backgroundColor: `rgb(${red},${green},${blue})`, margin: 50
        }}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
