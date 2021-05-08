import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { Layout, Text } from '@ui-kitten/components';
import { CustomTopNavigation } from '../components/topNavigation';
import { useNavigation } from '@react-navigation/native';

interface HomeProps {}

export const HomeScreen: React.FC<HomeProps> = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView>
        <CustomTopNavigation />

        <View style={[styles.textContainer]}>
          <Text style={styles.text} category="h3">
            Hello 🎉
          </Text>
        </View>
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    paddingVertical: 5,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 2,
    fontFamily: 'Montserrat',
  },
});
