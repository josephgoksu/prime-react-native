import { Layout, Text } from '@ui-kitten/components';
import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import NextButton from '../../assets/button/button.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface Onboarding2Props {}

export const Onboarding2Screen = (props: Onboarding2Props) => {
  const navigation = useNavigation();

  return (
    <Layout style={styles.mainContainer}>
      <Layout style={styles.mainContainer} key="1">
        {/* FIRST SECTION */}
        <Layout style={styles.headerContainer}>
          <Layout style={styles.layout} level="1">
            <View style={styles.ball} />
            <View style={styles.textContent}>
              <Text style={styles.text} category="h1">
                UI-ready
              </Text>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 24,
                }}
                category="p1">
                Dark-Light mode support
              </Text>
            </View>
          </Layout>
        </Layout>

        {/* SECOND SECTION */}
        <Layout style={styles.contentContainer}>
          <Layout style={styles.pagePosition} level="1">
            <View style={styles.blackCircle} />
            <View style={styles.redCircle} />
          </Layout>

          <Layout style={styles.layout} level="1">
            <TouchableOpacity onPress={() => navigation.navigate('GetStarted')}>
              <Image source={NextButton} width={50} height={50} />
            </TouchableOpacity>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 5,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    backgroundColor: '#F5F92C',
  },
  pagePosition: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackCircle: {
    height: 10,
    width: 10,
    borderRadius: 50,
    backgroundColor: 'black',
    marginHorizontal: 5,
  },
  redCircle: {
    height: 10,
    width: 10,
    borderRadius: 50,
    backgroundColor: '#F95A2C',
    marginHorizontal: 5,
  },
});
