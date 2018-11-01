/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NumberTicker from "./NumberTicker";


type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>React Native Number Ticker</Text>
                <NumberTicker
                    number={'2,342'}
                    textSize={45}
                    duration={4000}
                    textStyle={{fontWeight: 'bold', color: '#c68400'}}
                />
                <NumberTicker
                    textSize={40}
                    number={34.98}
                    duration={1500}
                    textStyle={{fontWeight: 'bold', color: 'white'}}
                />
                <NumberTicker
                    textSize={60}
                    number={2018}
                    duration={3000}
                    textStyle={{fontWeight: 'bold', color: '#ffe54c'}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffb300',
    },
    header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 45,
        marginBottom: 100,
    },
});
