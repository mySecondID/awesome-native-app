import { Linking, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";


export default function ActionCard(){
    async function openWebSite(siteLink: string){
        await Linking.openURL(siteLink);
    }
    return(
        <View>
            <Text style = {styles.headingText}>
                Heading
            </Text>
            <ScrollView horizontal = {true} style = {[styles.card, styles.elevatedCard]}>
                <View style = {styles.xx}>

                    <Text style = {styles.headerText}>
                        whats up with you man
                    </Text>
                    <Image
                        source={{uri: "https://miro.medium.com/v2/resize:fit:600/1*i2skbfmDsHayHhqPfwt6pA.png"}}
                        style = {styles.cardImage}
                    />
                <View style = {styles.bodyContainer}>
                    <Text numberOfLines={3} style = {styles.headerText}>
                        GoLang is an amazing language by Google.
                    </Text>
                    <Text numberOfLines={3} style = {styles.headerText}>
                        GoLang is an amazing language by Google.
                    </Text>
                    <Text numberOfLines={3} style = {styles.headerText}>
                        GoLang is an amazing language by Google.
                    </Text>        
                </View>

                <View style = {styles.footerContainer}>
                        <TouchableOpacity
                            onPress={() => openWebSite('https://www.google.com')}
                            >
                            <Text style = {styles.footerText}>Read More</Text>
                        </TouchableOpacity>
                </View>
                </View>
                <View style = {styles.xx}>
                    <Text style = {styles.headerText}>
                        whats up with you man
                    </Text>
                    <Image
                        source={{uri: "https://miro.medium.com/v2/resize:fit:600/1*i2skbfmDsHayHhqPfwt6pA.png"}}
                        style = {styles.cardImage}
                    />
                <View style = {styles.bodyContainer}>
                    <Text numberOfLines={3} style = {styles.headerText}>
                        GoLang is an amazing language by Google.
                    </Text>
                    <Text numberOfLines={3} style = {styles.headerText}>
                        GoLang is an amazing language by Google.
                    </Text>
                    <Text numberOfLines={3} style = {styles.headerText}>
                        GoLang is an amazing language by Google.
                    </Text>        
                </View>
                <View>
                <View >
                        <TouchableOpacity
                        style = {styles.footerContainer}
                        onPress={() => openWebSite('https://www.google.com')}
                            >
                            <Text style = {styles.footerText}>Read More</Text>
                        </TouchableOpacity>
                </View>
                </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    xx: {
        borderColor: 'white',
        margin: 10,
        borderRadius: 10,
        backgroundColor: "gray",
    },
    infoCard: {

    },
    headingText:{
        fontSize: 20,
        fontWeight: "500",
        margin: 5
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        borderRadius: 20,
        width: 400
    },
    elevatedCard:{
        elevation: 100,
        margin: 10
    },
    headingContainer: {
        flexDirection: "row"
    },
    headerText: {
        fontSize: 15,
        fontWeight: "200",
        margin: 5
    },
    cardImage: {
        height: 200,
        width: 200
    },
    footerContainer: {
        flex:1,
        margin: 10,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    bodyContainer: {
        margin: 10
    },
    footerText: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10
    }
})