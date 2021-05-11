import React, {useState, useEffect, useRef, forwardRef} from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { GilroyBold, GilroyMedium } from '../../utils/font'
import { SearchCloseIcon, SearchIcon, FilterIcon} from '../../utils/imagePath'

const SearchComponent = forwardRef((props, ref) => {
    const  {filter, style, onChangeText, value, setValue, category, loader, setLoader} = props
    return (
        <View style={[{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}, {...style}]}>
            <View style={{flex: 1, backgroundColor: '#F2F3F2', position: 'relative', flexDirection: 'row', height: 51, borderRadius: 15,}}>
                <View style={{ width: 40, justifyContent: 'center', alignItems: 'center'}}>
                    <SearchIcon />
                </View>
                <TextInput 
                    style={styles.input}
                    defaultValue={value}
                    placeholder="Search Store"
                    onChangeText={onChangeText}
                    autoCapitalize="none"
                    autoCorrect={false}
                    ref={ref}
                    placeholderTextColor="#7C7C7C"
                    onEndEditing={() => setLoader(false)}
                />
                <Text>
                    {value && value.length > 0 && (
                        <View>
                            <TouchableOpacity 
                                style={{ width: 40, height: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 15}}
                                // onPress={async () => {
                                //     await setValue('')
                                //     setTimeout(() => {
                                //         setValue(category)
                                //     }, 1000);
                                // }}
                            >
                                <SearchCloseIcon />
                            </TouchableOpacity>
                        </View>
                    )}
                </Text>
            </View>
            {filter && (
                <View style={{marginLeft: 25}}>
                    <FilterIcon />
                </View>
            )}
        </View>
    )
})

const styles = StyleSheet.create({
    input: {    
        height: 51, 
        width: '100%',
        flex: 1,
        fontFamily: GilroyBold
    }
})

export default SearchComponent
