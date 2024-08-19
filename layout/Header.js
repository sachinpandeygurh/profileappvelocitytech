import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
// import logo from "../assets/img/icon.png"
import {
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import { Entypo, Feather } from '@expo/vector-icons';

const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.leftContent}>
                        <Entypo name="menu" size={24} color="black" />
                          <Image source={require('../assets/img/logo.jpg')} style={styles.logo} /> 
                    </View>
                    <Feather name="bell" size={24} color="black" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: responsiveWidth(100),
        backgroundColor: "#fff",
        height: responsiveHeight(10),
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
      
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 30,
        backgroundColor:"#fff"
    },
    headerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: responsiveWidth(90),
    },
    leftContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    logo: {
        width: responsiveWidth(10),
        height: responsiveHeight(2),
        marginLeft: responsiveWidth(10),
    }
});
