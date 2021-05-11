import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GilroyBlack, GilroyBold, GilroyRegular } from '../utils/font'
import { CancelIcon, ReferIcon, ReferCopyIcon, ReferBg } from '../utils/imagePath'
import VirtualizedView from '../utils/VirtualizedView'

function Refer({navigation}) {
    return (
        <SafeAreaView
            style={styles.container}
        >
            <ScrollView>
                <TouchableOpacity
                    style={styles.header}
                    activeOpacity={0.7}
                    onPress={() => navigation.goBack()}
                >
                    <CancelIcon />
                </TouchableOpacity>

                <View style={styles.flex2}>
                    <ReferIcon />
                    <Text style={styles.headerText}>
                        Earn $10 by sharing your link!
                    </Text>
                    <Text style={styles.subHeaderText}>
                        Help your friends  discover KoboTree, You and your friend will earn $50 cash reward each when they sign up with your code
                    </Text>

                    <View style={{height: 60, borderWidth: 1, width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, borderColor: '#B6B7B9', borderRadius: 3, marginTop: 50}}>
                        <Text style={{color: '#828387'}}>WQwgh36ejy82yk3rt.........</Text>
                        <TouchableOpacity>
                            <ReferCopyIcon />
                        </TouchableOpacity>
                    </View>

                    <ImageBackground 
                        style={styles.referCard}
                        source={ReferBg}
                    >
                        <Text 
                            style={styles.referEarnText}
                        >Refferal Earnings</Text>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                            <View>
                                <Text style={styles.referAmount}>$ 650</Text>
                                <Text style={styles.referLength}>13 people referred</Text>
                            </View>
                            <TouchableOpacity 
                                style={styles.openLog}
                            >
                                <Text style={styles.openLogText}>Open referal log</Text>
                            </TouchableOpacity>
                        </View>

                    </ImageBackground>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1
    },
    header: {
        justifyContent: 'center',
        height: 30,
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        marginTop: 10
    },
    flex2: {
        alignItems: 'center',
        marginTop: 40
    },
    headerText: {
        fontSize: 24, 
        fontFamily: GilroyBold,
        width: '60%', 
        textAlign: 'center',
        marginTop: 50,
        lineHeight: 29
    },
    subHeaderText: {
        fontSize: 14, 
        fontFamily: GilroyRegular,
        width: '90%', 
        textAlign: 'center',
        marginTop: 20,
        lineHeight: 20,
        color: '#65676F',
    },
    referCard: {
        height: 119,
        backgroundColor: '#53B175',
        width: '90%',
        marginTop: 50,
        borderRadius: 3,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    referEarnText: {
        fontFamily: GilroyRegular,
        fontSize: 14,
        color: '#fff'
    },
    openLog: {
        height: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        width: 97,
        alignItems: 'center',
        borderRadius: 2
    },
    openLogText: {
        fontSize: 10, 
        fontFamily: GilroyRegular,
        color: '#53B175'
    },
    referAmount: {
        fontFamily: GilroyBold,
        color: '#fff',
        fontSize: 28
    },
    referLength: {
        fontSize: 10, 
        fontFamily: GilroyRegular,
        color: '#fff',
        marginTop: 4
    }
})

export default Refer
