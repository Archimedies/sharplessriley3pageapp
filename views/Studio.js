import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class AboutScreen extends Component {
    static navigationOptions = {
        title: 'Studio',
        headerStyle: {
            backgroundColor: '#f29111',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headertext}>Sketch Studio</Text>
                </View>
                <View style={styles.container}>
                    <View>
                        {/* Basically the work-around to styling a button. */}
                        <TouchableOpacity style={styles.containerTO}>
                            <Text style={styles.containertext}>Create new Sketch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerTO}>
                            <Text style={styles.containertext} onPress={() => 
                                navigate('Sketches')
                                }>Open existing Sketch</Text>
                        </TouchableOpacity>
                    </View>
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
    containerTO:{
        margin: 10,
        alignItems: 'center',
        backgroundColor: '#1185f2',
    },
    containertext:{
        color: '#fff',
        fontWeight: 'bold',
        padding: 10,
    }
});