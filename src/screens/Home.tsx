import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Home: React.VFC = () => {
    return <SafeAreaView style={styles.HomeView}>
        <Text>Home</Text>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    HomeView: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

export default Home;