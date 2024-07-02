import {
    View, 
    Text, 
    StyleSheet,
    ScrollView,
    Image,
  } from 'react-native'
  
  
  const styles = StyleSheet.create({
    container: {

    },
    container1:{
        backgroundColor: "gray",
        padding: 6,
        margin: 10,
        borderColor: "black",
        flexDirection: 'row',
        borderRadius: 10,
        elevation: 100,
        shadowOffset:{
            width: 100,
            height: 100
        },
        shadowColor:"red"
      },headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 8,
      },cardImage:{
        height: 150,
        width:100,
        borderRadius: 10,
        margin: 5
      },
      viewStyle: {
        justifyContent: "center"
      },cardTitle: {
        fontSize: 17,
        fontWeight: "900"
      }
    })
    
  export default function FancyCards(): JSX.Element{
      return (
        <View>
            <Text style = {styles.headingText}>
                Fancy Cards
            </Text>
        
        <ScrollView horizontal = {true} style = {styles.container}>
            <View style = {styles.container1}>
                <Image
                    source = {{uri: 'https://static.wikia.nocookie.net/amazons-the-boys/images/5/5b/Homelander-S4.png/revision/latest?cb=20240614091600'}}
                    style = {styles.cardImage}
                    alt={"homelander"}
                ></Image>
                <View style = {[styles.cardImage, styles.viewStyle]}>
                <Text style= {styles.cardTitle}>
                    Homelander
                </Text>
                <Text>
                    Power: 100
                </Text>
                <Text>
                    Smart: 20
                </Text>
                <Text>
                    Baby: 100
                </Text>
                </View>
            </View>
            <View style = {styles.container1}>
            <Image
                source = {{uri: 'https://media.gq.com/photos/58b9fda8803bdb766dd69ef7/16:9/w_1280,c_limit/wolverine.jpg'}}
                style = {styles.cardImage}
                alt={"wolverine"}
            ></Image>
            <View style = {[styles.cardImage, styles.viewStyle]}>
                <Text style= {styles.cardTitle}>
                    Wolverine
                </Text>
                <Text>
                    Power: 100
                </Text>
                <Text>
                    Smart: 20
                </Text>
                <Text>
                    Baby: 100
                </Text>
            </View>
            </View>
          </ScrollView>
        </View>
      )
  }