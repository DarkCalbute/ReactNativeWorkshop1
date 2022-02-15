import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const GettingStarted2: React.VFC<any> = ({ navigation }) => {
    return <SafeAreaView style={styles.GettingStarted2View}>
        <Text style={styles.txtTitle}>Create new habit easily</Text>
        <Image source={require('../../assets/asset2.png')} style={styles.img}/>
        <Text style={styles.txtTitle}>
            <Text>We can </Text>
            <Text style={{color: 'orange'}}>help you</Text>
            <Text> to be a better{'\n'}</Text>
            <Text>version of </Text>
            <Text style={{color: 'orange'}}>yourself</Text> 
        </Text>
        <View style={styles.nav}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.txt}>Skip</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/asset2-1.png')}/>
            <TouchableOpacity onPress={() => navigation.navigate('GettingStarted3')}>
                <Text style={styles.txt}>Next</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    GettingStarted2View: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: hp('10%'),
        marginBottom: hp('10%')
    },
    img: {
        height: hp('50%')
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('50%')
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

export default GettingStarted2;