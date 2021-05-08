import { Layout, Text } from '@ui-kitten/components';
import * as React from 'react';
import { StyleSheet } from 'react-native';

interface AboutProps {}

export const AboutScreen: React.FC<AboutProps> = () => {
  return (
    <Layout style={styles.container} key="1">
      <Text>About</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
