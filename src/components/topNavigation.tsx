import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Icon,
  MenuItem,
  OverflowMenu,
  Text,
  TopNavigationAction,
} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;

const AlertIcon = (props: any) => (
  <Icon {...props} name="alert-circle-outline" />
);

const LogoutIcon = (props: any) => <Icon {...props} name="log-out" />;

interface CustomTopNavigationProps {
  leftComponent?: ReactNode;
  backButton?: boolean;
}

export const CustomTopNavigation = ({
  backButton,
}: CustomTopNavigationProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={AlertIcon} onPress={toggleMenu} />
  );

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        {backButton && renderBackAction()}
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Title</Text>
      </View>

      <View style={{ ...styles.avatar, ...styles.avatarContainer }}>
        <OverflowMenu
          anchor={renderMenuAction}
          visible={menuVisible}
          onBackdropPress={toggleMenu}>
          <MenuItem
            accessoryLeft={LogoutIcon}
            title="Quit"
            onPress={() => {}}
          />
        </OverflowMenu>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    height: 75,
  },
  titleContainer: {
    width: 200,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  avatarContainer: {
    width: 100,
    alignItems: 'center',
  },
  avatar: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  backContainer: {
    width: 100,
    alignItems: 'center',
  },
});
