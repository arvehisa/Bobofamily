import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { string, bool, shape } from 'prop-types';

function Greeting(props) {
    const { children, bang, style } = props;
    return (
        <View>
            <Text style={[styles.text, style]}>
                {`Goodnight, ${children}${bang ? '!': ''}`}
            </Text>
        </View>
    );
}

Greeting.propTypes = {
    children: string.isRequired,
    bang: bool,
    style: shape(),
};

Greeting.defaultProps = {
    bang: false,
    style: null,
};

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 20,

    }
})


export default Greeting;
