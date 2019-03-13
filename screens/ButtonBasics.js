import React from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';

export default class ButtonBasics extends React.Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Go to Details... again" onPress={() => this.props.navigation.push('Buttons')} />
                <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} />
                <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
                <View style={styles.buttonContainer}>
                    <Button onPress={this._onPressButton} title="Press Me" />
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={this._onPressButton} title="Press Me" color="#841584" />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button onPress={this._onPressButton} title="This looks great!" />
                    <Button onPress={this._onPressButton} title="OK!" color="#841584" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
