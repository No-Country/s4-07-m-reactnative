//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Datails from '../components/details';

// create a component
const DatailsScreen = ({...props}) => {
    return (
        <View style={styles.container}>
            <Details props={...props}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default DatailsScreen;
