import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GilroyBold, GilroyMedium, GilroyRegular } from '../utils/font'
import { Avater, ForwardIconSmall, RewardIcon } from '../utils/imagePath'

function Profile({navigation}) {

    list = [
        { name: 'Order History', icon: <ForwardIconSmall />},
        { name: 'Offer and Reward', icon: <ForwardIconSmall />},
    ]

    const Accordian = ({item}) => {
        return (
            <TouchableOpacity
                style={styles.accordianView}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('refer')}
            >
                <RewardIcon />
                <View style={styles.innnerFlex}>
                    <Text style={styles.accordianText}>{item.name}</Text>
                    {item.icon}
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <View style={{alignItems: 'center', marginTop: 50}}>
                        <View style={styles.avaterRadius}>
                            <FastImage 
                                source={Avater}
                                resizeMode={FastImage.resizeMode.contain}
                                style={{width: '100%', height: '100%'}}
                            />
                        </View>
                        <Text style={styles.userName}>Fabusuyi Oluwatobi</Text>
                        <Text style={styles.email}>Iyiolaosuagwu1@gmail.com</Text>
                        <TouchableOpacity
                            style={styles.editBtn}
                            activeOpacity={0.6}
                        >
                            <Text style={styles.editBtnText}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop: 40}}>
                        {list?.map((item, index) => <Accordian item={item} key={index}  />)}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    userName: {
        letterSpacing: 0.24,
        fontFamily: GilroyBold,
        fontSize: 18,
        marginTop: 10,
        color: '#53B175'
    },
    email: {
        letterSpacing: 0.24,
        fontFamily: GilroyMedium,
        fontSize: 11,
        marginTop: 5,
        color: '#65676F'
    },
    editBtn: {
        backgroundColor: '#53B175',
        height: 35,
        borderRadius: 2.1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 118,
        marginTop: 10
    },
    editBtnText: {
        fontSize: 14,
        color: "#fff",
        fontFamily: GilroyMedium
    },
    accordianView: {
        flexDirection: 'row',
        height: 50,
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingHorizontal: 15,
        borderRadius: 3,
        borderColor: '#B6B7B9',
        borderWidth: 1,
        marginBottom: 20
    },
    innnerFlex: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginLeft: 15, 
        alignItems: 'center', 
        flex: 1
    },
    accordianText: {
        fontFamily: GilroyMedium,
        fontSize: 16,
        color: '#333131'
    },
    avaterRadius: {
        width: 75, 
        height: 75, 
        borderRadius: 50, 
        borderWidth: 2, 
        padding: 5, 
        borderColor: '#53B175'
    }
})

export default Profile
