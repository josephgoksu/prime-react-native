import Tts from 'react-native-tts';
import { randomEnum } from '../../helpers/randomEnum';
import {
  GAME,
  LEVEL_UP,
  CORRECT_ANSWER,
  WRONG_ANSWER,
  NEW_QUESTION,
} from '../constants';
import { GameStatus, iAnimal, iGameReducer } from './interfaces';

const initialState: iGameReducer = {
  level: 1,
  numOfAnswers: 0,
  status: GameStatus.NONE,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME.STARTED:
      return {
        ...state,
        status: GameStatus.STARTED,
        level: 1,
        numOfAnswers: 0,
      };

    case GAME.RESETED:
      return {
        ...state,
        status: GameStatus.RESETED,
      };

    case GAME.WON:
      return {
        ...state,
        status: GameStatus.WON,
      };

    case NEW_QUESTION:
      const pickAnimal = randomEnum(iAnimal);

      Tts.speak(`${pickAnimal}`);

      return {
        ...state,
        question: {
          animalName: pickAnimal,
        },
      };

    case LEVEL_UP:
      return {
        ...state,
        level: state.level + 1,
        numOfAnswers: 0,
      };

    case WRONG_ANSWER:
      return {
        ...state,
        level: 1,
        numOfAnswers: 0,
      };

    case CORRECT_ANSWER:
      // LEVEL_UP
      //   if (state.numOfAnswers >= 2 && state.numOfAnswers < 5) {
      //     return {
      //       ...state,
      //       level: state.level + 1,
      //       numOfAnswers: 0,
      //     };
      //   }

      return {
        ...state,
        numOfAnswers: state.numOfAnswers + 1,
      };

    default:
      return state;
  }
};

// export const gameReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GAME.STARTED:
//       const pickAnimal = randomEnum(iAnimal);

//       Tts.speak(`${pickAnimal}`);

//       return {
//         ...state,
//         hasStarted: true,
//         level: 1,
//         numOfAnswers: 0,
//         question: {
//           animalName: pickAnimal,
//         },
//       };

//     default:
//       return state;
//   }
// };
