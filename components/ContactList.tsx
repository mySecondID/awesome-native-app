import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default function ContactList(){
    const contactList  = [
       {
        id: 1,
        name: "Shashwat",
        phone: "95024"
       },{
        id: 2,
        name: "Shashwat",
        phone: "95024"
       },{
        id: 4,
        name: "Shashwat",
        phone: "95024"
       },{
        id: 3,
        name: "Shashwat",
        phone: "95024"
       },
    ]
    return (
        <View>
            <Text style = {styles.headerText}>Contact List</Text>
            <ScrollView
                style = {styles.container}
                scrollEnabled = {false}    
            >
                {
                    contactList.map(({id, name, phone}, ind) => (
                        <View key = {ind * 20} style = {styles.contact}>
                            <Text>name: {name}</Text>
                            <Text>phone: {phone}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {

    },
    container: {

    }, 
    contact: {

    }
})