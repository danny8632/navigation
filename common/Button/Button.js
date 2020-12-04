import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet, ViewPropTypes } from 'react-native';

const Button = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
	appButtonText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
		textTransform: "uppercase"
	}
});