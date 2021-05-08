import { Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface CardAccessoryProps {
  title: string;
  subtitle?: string;
  description: string;
}

export const CardAccessory = ({
  title,
  subtitle,
  description,
}: CardAccessoryProps) => {
  const Header = (props) => (
    <View {...props}>
      <Text category="h6">{title}</Text>
      <Text category="s1">{subtitle}</Text>
    </View>
  );

  const Footer = (props) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
      <Button style={styles.footerControl} size="small">
        READ MORE
      </Button>
    </View>
  );

  const Card = (props) => (
    <View style={styles.card} header={Header} footer={Footer}>
      <Text>{description}</Text>
    </View>
  );

  return <Card />;
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
