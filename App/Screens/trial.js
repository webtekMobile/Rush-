import React from 'react';
import { StyleSheet } from 'react-native';
import { Content, Item, Input } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

const extract = (str, pattern) => (str.match(pattern) || []).pop() || '';

class OtpInputs extends React.Component {
    state = {
        otp: [],
        value: '',
        password:''
    };

    removeWhiteSpace = (str) => {
        return extract(str, '/^\S*$/;');
    }

    passwordHandle(value) {
        this.setState({
            password: this.removeWhiteSpace(value)
        })
        console.log(this.removeWhiteSpace(value))
    }




    render() {
        return (
            <View style={{ paddingBottom: 25 }}>
                <TextField
                    label='Password'
                    type='password'
                    value={this.state.password}
                    // error={errors.password}
                    // icon
                    onChange={this.passwordHandle} />
                <Image
                    source={require('../../../assets/img/lock.png')}
                    style={styles.icon} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gridPad: { padding: 30 },
    txtMargin: { margin: 3 },
    inputRadius: { textAlign: 'center' }
});

export default OtpInputs;