import React from 'react';
import {Image} from 'react-native';

export class LogoTitle extends React.Component {
    render() {
        return (
            <Image source={require('../assets/images/icon.png')} style={{ width: 30, height: 30 }} />
        );
    }
}
