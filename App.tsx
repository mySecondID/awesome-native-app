import React from 'react'
import {
  View, 
  Text, 
  SafeAreaView,
  StyleSheet,
  useColorScheme
} from 'react-native'


const styles = StyleSheet.create({
  container:{
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  whiteText: {
    color: '#ffffff'
  },
  darkText: {
    color: 'red'
  }
})


function App(): JSX.Element{
  const isDark = useColorScheme() === "dark"
  return (
      <View style = {styles.container}>
        <Text
          style = {
            isDark ? 
            styles.darkText:
            styles.whiteText
          }
        >
          Hello ji
        </Text>  
      </View>
  )
}

export default App;
