/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet } from 'react-native';


export function H1({children, style, ...others}) {
    return <Text {...others} children={children} style={{...styles.h1, ...style}} />;
}

export function H2({children, style, ...others}) {
    return (
        <Text {...others} children={children} style={{...styles.h2, ...style}} />
    );
}

export function H3({children, style, ...others}) {
    return (
        <Text {...others} children={children} style={{...styles.h3, ...style}} />
    );
}

export function H4({children, style}) {
    return <Text children={children} style={{...styles.h4, ...style}} />;
}

export function H5({children, style, ...others}) {
    return (
        <Text {...others} children={children} style={{...styles.h5, ...style}} />
    );
}

export function H6({children, style, ...others}) {
    return (
        <Text {...others} children={children} style={{...styles.h6, ...style}} />
    );
}

export function P({children, style, ...others}) {
    return (
        <Text {...others} children={children} style={{...styles.p, ...style}} />
    );
}

export function SPAN({children, style, ...others}) {
    return (
        <Text {...others} children={children} style={{...styles.span, ...style}} />
    );
}

export function LABEL({children, style, ...others}) {
    return (
        <Text {...others} children={children} style={{...styles.label, ...style}} />
    );
}

const styles = StyleSheet.create({
    h1:{
        fontFamily: 'Gilroy-Black',
        fontSize: 48
    }
});
