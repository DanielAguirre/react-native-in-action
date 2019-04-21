import React from 'react';
import { View, Text, StyleSheet,} from 'react-native';

const Heading = () => (
    <View style={style.header}>
        <Text style={style.headerText}>
            Todos
        </Text>
    </View>
)

const style  = StyleSheet.create({
    header: {
        marginTop: 60
    },
    headerText: {
        textAlign: 'center',
        fontSize: 72,
        color: 'rgba(175, 47,47, 0.25)',
        fontWeight: '100'
    }
});

export default Heading;