/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';

import { Emitter } from 'react-native-particles';

const { width, height } = Dimensions.get('window');

type Props = {
  ref: Rain => void
};

// TODO: HOW TO ADD Background Image? Let's say a cloud..

export default class RainEmitter extends Component<Props> {
  render() {
    const { ref } = this.props;
    return (
      <Emitter
        autoStart={true}
        numberOfParticles={80}
        interval={150}
        emissionRate={3}
        particleLife={10000}
        direction={90}
        spread={1}
        speed={10}
        segments={60}
        width={width}
        height={height}
        fromPosition={() => ({ x: Math.round(Math.random() * width), y: 0 })}
        style={styles.emitter}
        gravity={0.4}
        ref={emitter => (this.emitter = emitter)}
      >
        <Image
          style={styles.rain}
          source={require('../assets/raindrop.png')}
          resizeMode="stretch"
        />
      </Emitter>
    );
  }

  start() {
    this.emitter.start();
  }

  stopEmitting() {
    this.emitter.stopEmitting();
  }
}

const styles = StyleSheet.create({
  emitter: {
    position: 'absolute',
    left: 0,
    top: -10,
    bottom: 0,
    right: 0
  },
  rain: {
    width: 24,
    height: 24
  },
  cloud: {
    width: 100,
    height: 50
  }
});
