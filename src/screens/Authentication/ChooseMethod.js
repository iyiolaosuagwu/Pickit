import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { ScrollView } from 'react-native-gesture-handler'
import { GilroyMedium } from '../../utils/font'
import { TopIconRight } from '../../utils/imagePath'

function ChooseMethod({navigation}) {
    return (
        <ScrollView style={styles.container}>
            <View style={{flex: 1}}>
                <FastImage 
                    source={TopIconRight}
                    style={{height: 380}}
                    resizeMode={FastImage.resizeMode.cover}
                />
            </View>
            <View style={{flex: 1, width: '90%', alignSelf: 'center', paddingTop: 30}}>
                <Text style={styles.header}>Get your groceries with Pickit</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        fontSize: 26,
        fontFamily: GilroyMedium,
        width: '70%',
        lineHeight: 35
    }
})

export default ChooseMethod
