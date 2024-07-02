import React from 'react'
import {
  View, 
  Text, 
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  ScrollViewBase,
  ScrollView
} from 'react-native'
import FlatCard from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'


const styles = StyleSheet.create({
  outer:{
  }
})


function App(): JSX.Element{
  const isDark = useColorScheme() === "dark"
  return (
    <SafeAreaView style = {styles.outer}>
      <ScrollView>
      <FlatCard/>
      <ElevatedCards/>
      <ElevatedCards/>
      <ElevatedCards/>
      <ElevatedCards/>
      <FancyCards/>
      <FancyCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;
