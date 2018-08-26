/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import CoinsExplosion from './examples/CoinsExplosion';
import Confetti from './examples/Confetti';
import Rain from './examples/Rain';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <CoinsExplosion ref={emitter => (this.coinsExplosion = emitter)} />
        <Confetti
          colors={['red', 'blue', 'green', 'yellow', 'orange']}
          ref={emitter => (this.confetti = emitter)}
        />
        <Rain ref={emitter => (this.rain = emitter)} />

        <Button
          title={'Coins explosion'}
          onPress={() => this.coinsExplosion.start()}
        />
        <Button title={'Confetti'} onPress={() => this.confetti.start()} />
        <Button title={'Make it rain'} onPress={() => this.rain.start()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
