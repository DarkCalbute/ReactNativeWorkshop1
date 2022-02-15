import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const GettingStarted4: React.VFC<any> = ({ navigation }) => {
    return <SafeAreaView style={styles.GettingStarted4View}>
        <Text style={styles.txtTitle}>Keep track of your progress</Text>
        <Image source={require('../../assets/asset4.png')} style={styles.img}/>
        <Text style={styles.txtTitle}>
            <Text>We can </Text>
            <Text style={{color: 'orange'}}>help you</Text>
            <Text> to be a better{'\n'}</Text>
            <Text>version of </Text>
            <Text style={{color: 'orange'}}>yourself</Text> 
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btn}>
            <Text style={styles.txt}>Get Started</Text>
        </TouchableOpacity>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    GettingStarted4View: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: hp('10%'),
        marginBottom: hp('10%')
    },
    img: {
        height: hp('40%'),
        width: wp('100%')
    },
    btn: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'orange'
    },
    txtTitle: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    txt: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold'
    }
});

export default GettingStarted4;