import React from 'react'
import { Text, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import { Bg, BigCarrot } from '../../utils/imagePath'
import CustomButton from '../../components/Button/CustomButton'
import { GilroyMedium, GilroyRegular } from '../../utils/font'


function Onboarding({navigation}) {

    const handleMoveToScreen = () => {
        navigation.replace('explore')
    }

    return (
        <ImageBackground
            source={Bg}
            style={styles.container}
        >
            <BigCarrot />
            <Text style={styles.brandText}>
                Welcome 
            </Text>
            <Text style={styles.brandText2}>
                to our store
            </Text>
            <Text style={styles.subText}>Ger your groceries in as fast as one hour</Text>
            <CustomButton
                text="Get started"
                style={{marginBottom: 90, marginTop: 40}}
                onPress={() => handleMoveToScreen()}
            ></CustomButton>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: '100%', 
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    brandText: {
        fontSize: 48,
        color: '#fff',
        fontFamily: GilroyMedium,
        textAlign: 'center',
        width: 253, 
        marginTop: 20
    },
    brandText2: {
        fontSize: 48,
        color: '#fff',
        fontFamily: GilroyMedium,
        textAlign: 'center',
        width: 253, 
    },
    subText: {
        fontFamily: GilroyRegular,
        fontSize: 16,
        lineHeight: 15,
        color: 'rgba(252, 252, 252, 0.7)',
        marginTop: 10
    }
})

export default Onboarding
