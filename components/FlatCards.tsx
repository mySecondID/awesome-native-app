import {
  View, 
  Text, 
  StyleSheet,
} from 'react-native'


const styles = StyleSheet.create({
    container:{
      flex: 1,
      flexDirection: "row",
      position: 'relative' 
    },headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      padding: 8,
    },flatCard: {
        height: 100,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 10
    },cardOne: {
      backgroundColor: 'red'
    },cardTwo: {
      backgroundColor: 'yellow'
    },cardThree: {
      backgroundColor: 'green'
    },cardFour: {
      backgroundColor: 'white'
    },
  })
  
export default function FlatCard({}): JSX.Element{
    return (
      <View>

      <Text style = {styles.headingText}>
          Flat Cards
      </Text>
      <View style = {styles.container}>
        <View style = {[styles.flatCard, styles.cardOne]}><Text>Red</Text></View>
        <View style = {[styles.flatCard, styles.cardTwo]}><Text>Red</Text></View>
        <View style = {[styles.flatCard, styles.cardThree]}><Text>Red</Text></View>
        <View style = {[styles.flatCard, styles.cardFour]}><Text>Red</Text></View>
      </View>
      </View>
    )
}