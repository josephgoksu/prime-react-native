import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Layout, Text } from '@ui-kitten/components';

import { CustomTopNavigation } from '../components/topNavigation';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { game } from '../store/actions/game';
import { shuffle } from '../helpers/shuffleArray';
import {
  animalImagesList,
  animals,
  animalsNamesList,
} from '../helpers/animalImage';
import { GameStatus, iGameReducer } from '../store/reducers/interfaces';

interface HomeProps {
  navigation: any;
}

const renderPickAnimal = (
  level: number,
  animalName: string,
  numOfAnswers: number,
  dispatch: any,
) => {
  let numOfAns = 0;

  if (level === 1) {
    numOfAns = 2;
  } else if (level === 2) {
    numOfAns = 3;
  } else if (level === 3) {
    numOfAns = 4;
  } else if (level === 4) {
    numOfAns = 6;
  } else if (level === 5) {
    numOfAns = 8;
  }

  let render = [];

  let animalsPictureList = animals;
  let pickedAnimalIndex = animalsNamesList.indexOf(animalName);

  if (pickedAnimalIndex !== -1) {
    animalsPictureList.splice(pickedAnimalIndex, 1);
  }

  animalsPictureList = shuffle(animalsPictureList);

  for (let index = 0; index < numOfAns - 1; index++) {
    render.push(
      <TouchableOpacity
        style={styles.animalCard}
        onPress={() => {
          dispatch(game.question.wrong());
        }}
        key={index}>
        <ImageBackground
          source={animalsPictureList[index]}
          style={styles.animalCover}
        />
      </TouchableOpacity>,
    );
  }

  render.push(
    <TouchableOpacity
      style={styles.animalCard}
      onPress={() => {
        dispatch(game.question.correct());
        dispatch(game.newQuestion());
      }}
      key={pickedAnimalIndex}>
      <ImageBackground
        source={animalImagesList[animalName]}
        style={styles.animalCover}
      />
    </TouchableOpacity>,
  );

  render = shuffle(render);

  return render;
};

export const HomeScreen: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();

  const { status, animalName, level, numOfAnswers } = useSelector(
    (state: { game: iGameReducer }) => ({
      status: state.game.status,
      level: state.game.level,
      numOfAnswers: state.game.numOfAnswers,
      animalName: state.game.question?.animalName,
    }),
    shallowEqual,
  );

  useEffect(() => {
    if (level > 5 && status !== GameStatus.WON) {
      dispatch(game.win());
    } else if (level < 5 && status === GameStatus.WON) {
      dispatch(game.reseted());
    }
  });

  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView>
        <CustomTopNavigation />

        {status === GameStatus.WON && (
          <View
            style={[
              styles.textContainer,
              {
                height: hp('50%'),
              },
            ]}>
            <Text style={styles.text} category="h3">
              🥳 Congratulations 🎉
            </Text>

            <Text style={styles.text} category="h5">
              Reset the game to play again
            </Text>
          </View>
        )}

        {status === GameStatus.STARTED ? (
          animalName && (
            <>
              <View style={styles.textContainer}>
                <Text style={styles.text} category="h3">
                  Find the {animalName}
                </Text>
              </View>

              <View style={styles.animalsContainer}>
                {renderPickAnimal(level, animalName, numOfAnswers, dispatch)}
              </View>
            </>
          )
        ) : (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.text} category="h3">
                Rules
              </Text>

              <Text style={styles.text} category="s1">
                To win the game reach level 5.
              </Text>
              <Text style={styles.text} category="s1">
                3 consecutive correct answer increase the level.
              </Text>
            </View>

            <View style={styles.contentContainer}>
              <TouchableOpacity
                style={styles.activeCard}
                onPress={() => {
                  dispatch(game.started());
                }}>
                <Text category="s1">Let's Start</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </SafeAreaView>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 5,
        }}>
        {/* <TeamSpirit height={hp('13%')} /> */}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 5,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  animalsContainer: {
    paddingVertical: 5,
    marginHorizontal: 10,

    height: 500,

    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  animalCover: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  animalCard: {
    backgroundColor: '#fff',

    width: 110,
    height: 110,

    marginHorizontal: 5,
    // borderRadius: 150,

    borderColor: '#000000',
    borderWidth: 3,

    // padding: 5,
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
  },
  activeCard: {
    backgroundColor: '#7BED9F',

    width: wp('50%'),
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
