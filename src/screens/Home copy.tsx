import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import TeamSpirit from '../assets/team-spirit.svg';

import Happy from '../assets/expressions/happy.svg';
import Neutral from '../assets/expressions/neutral.svg';
import Cry from '../assets/expressions/cry.svg';

type HomeProps = {
  navigation: any;
};

export const HomeScreen: React.FunctionComponent = ({ navigation }) => {
  const [timeline, setTimeline] = useState(1);

  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView>
        {/* <CustomTopNavigation /> */}

        <View style={{ height: 80 }}>
          <ScrollView
            style={styles.contentContainer}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={timeline === 1 ? styles.activeCard : styles.passiveCard}
              onPress={() => setTimeline(1)}>
              <Text category="s2">Today</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={timeline === 2 ? styles.activeCard : styles.passiveCard}
              onPress={() => setTimeline(2)}>
              <Text category="s2">Yesterday</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={timeline === 3 ? styles.activeCard : styles.passiveCard}
              onPress={() => setTimeline(3)}>
              <Text category="s2">Last Week</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={timeline === 4 ? styles.activeCard : styles.passiveCard}
              onPress={() => setTimeline(4)}>
              <Text category="s2">Last Month</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={timeline === 5 ? styles.activeCard : styles.passiveCard}
              onPress={() => setTimeline(5)}>
              <Text category="s2">All Time</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 5,
        }}>
        <TeamSpirit height={hp('13%')} />
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 5,
        }}>
        <Text category="c2">11/12/2020</Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 5,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',

            backgroundColor: '#7BED9F',
            width: 300,
            height: 300,
            borderRadius: 300,

            borderWidth: 5,
          }}>
          <Text
            category="h1"
            style={{
              fontSize: 120,
              color: 'white',
              textShadowColor: 'black',
              textShadowOffset: {
                height: 6,
                width: 5,
              },
              textShadowRadius: 0,
            }}>
            91
          </Text>
          <Text
            category="h5"
            style={{
              color: 'black',
            }}>
            Super Happy
          </Text>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 10,

          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.simpleCard}>
          <Text category="s2">Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.simpleCard}>
          <Text category="s2">Today</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 10,

          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={[styles.voteCard, { backgroundColor: '#FF4E4E' }]}>
          <Cry height={hp('5%')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.voteCard, { backgroundColor: '#E2FCFF' }]}>
          <Neutral height={hp('5%')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.voteCard, { backgroundColor: '#00FF85' }]}>
          <Happy height={hp('5%')} />
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  activeCard: {
    backgroundColor: '#7BED9F',

    width: wp('20%'),
    height: hp('5%'),

    marginHorizontal: 5,
    borderRadius: 6,

    borderColor: '#000000',
    borderWidth: 3,

    padding: 5,
    marginVertical: 10,

    // SHADOW
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 0,

    elevation: 9,

    // Inside Position
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  passiveCard: {
    backgroundColor: 'white',

    width: wp('20%'),
    height: hp('5%'),

    marginHorizontal: 5,
    borderRadius: 6,

    borderColor: '#000000',
    borderWidth: 3,

    padding: 5,
    marginVertical: 10,

    // SHADOW
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 0,

    elevation: 9,

    // Inside Position
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  simpleCard: {
    backgroundColor: 'white',
    width: wp('45%'),
    height: hp('10%'),
    borderRadius: 16,

    borderColor: '#000000',
    borderWidth: 3,

    padding: 5,
    marginVertical: 10,

    // SHADOW
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 0,

    elevation: 9,

    // Inside Position
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  voteCard: {
    backgroundColor: 'white',
    width: wp('29%'),
    height: hp('10%'),
    borderRadius: 16,

    borderColor: '#000000',
    borderWidth: 3,

    padding: 5,

    // SHADOW
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 0,

    elevation: 9,

    // Inside Position
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
