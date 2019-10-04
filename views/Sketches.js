import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Sketches',
        headerStyle: {
            backgroundColor: '#f29111',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headertext}>Your Saved Sketch files</Text>
                </View>
                <View style={styles.container}>
                    <ScrollView style={styles.scrollcontainer}>
                        <View>
                            <Text style={styles.scrolltext}>10/1/2019:</Text>
                            <Image style={styles.images} source={require("../assets/enchanted.png")}></Image>
                        </View>
                        <View>
                            <Text style={styles.scrolltext}>10/1/2019:</Text>
                            <Image style={styles.images} source={require("../assets/ring.png")}></Image>
                        </View>
                        <View>
                            <Text style={styles.scrolltext}>10/1/2019:</Text>
                            <Image style={styles.images} source={require("../assets/mindless.png")}></Image>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    header:{
        flex: 0.1,
        marginTop: 25,
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#f2a311'
    },
    headertext:{
        justifyContent: 'flex-start',
        margin: 10,
        fontSize: 20,
    },
    scrollcontainer:{
        // If I want to add anything to change the scrollview
    },
    scrolltext:{
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 10
    },
    images: {
        flex: 1,
        width: 300,
        height: 300,
    }
});