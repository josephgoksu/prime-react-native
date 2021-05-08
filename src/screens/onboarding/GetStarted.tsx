import { Layout, Text } from '@ui-kitten/components';
import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import pJson from '../../../package.json';

import { useDispatch } from 'react-redux';
import { changeOnboard } from '../../store/actions';

interface GetStartedProps {}

export const GetStartedScreen = (props: GetStartedProps) => {
  const dispatch = useDispatch();

  return (
    <Layout style={styles.mainContainer} key="1">
      {/* FIRST SECTION */}
      <Layout style={styles.headerContainer} level="1">
        <Layout style={styles.layout} level="1">
          <View style={styles.ball} />
          <View style={styles.textContent}>
            <Text style={styles.text} category="s1">
              Easy to develop
            </Text>

            <Text style={styles.text} category="h1">
              Template Version: {pJson.version}
            </Text>
            <Text
              style={{
                ...styles.text,
                fontSize: 24,
              }}
              category="p1">
              RN Version: {pJson.dependencies['react-native']}
            </Text>
          </View>
        </Layout>
      </Layout>

      {/* SECOND SECTION */}
      <Layout style={styles.layout} level="1">
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => {
            dispatch(
              changeOnboard({
                hasOnboarded: true,
              }),
            );
          }}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 4,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  text: {
    margin: 2,
    fontFamily: 'Montserrat',
  },
  textContent: {
    alignItems: 'flex-start',
    marginTop: 35,
  },
  ball: {
    height: 300,
    width: 300,
    borderRadius: 200,
    backgroundColor: '#FFF4CC',
  },
  getStartedButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#18191F',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedText: {
    margin: 2,
    fontFamily: 'Montserrat',
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
