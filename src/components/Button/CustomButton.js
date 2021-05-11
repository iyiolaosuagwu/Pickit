import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { GilroyBold, GilroyMedium } from '../../utils/font'

function CustomButton({text, onPress, style, checkout, amount}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, {...style}]}
            activeOpacity={0.7}
        >
            <Text style={styles.text}>{text}</Text>
            {checkout && (
                <View style={styles.amountView}>
                    <Text style={styles.amount}>${amount || 0}</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 55,
        backgroundColor: '#53B175',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        position: 'relative'
    },
    text: {
        color: '#fff',
        fontFamily: GilroyMedium,
        fontSize: 18
    },
    amountView: {
        backgroundColor: '#489E67',
        padding: 5,
        borderRadius: 5,
        position: 'absolute',
        right: 20
    },
    amount: {
        color: '#fff',
        fontSize: 14,
        fontFamily: GilroyBold
    }
})

export default CustomButton
