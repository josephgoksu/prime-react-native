import {
  GAME,
  LEVEL_UP,
  CORRECT_ANSWER,
  WRONG_ANSWER,
  NEW_QUESTION,
} from '../constants';

interface LevelUp {
  level: number;
  numOfAnswers: number;
}

interface CorrectAnswer {
  numOfAnswers: number;
}

export const game = {
  started: () => ({
    type: GAME.STARTED,
  }),
  newQuestion: () => ({
    type: NEW_QUESTION,
  }),
  reseted: () => ({
    type: GAME.RESETED,
  }),
  levelUp: (payload: LevelUp) => ({
    type: LEVEL_UP,
    payload: payload,
  }),
  question: {
    correct: (payload?: CorrectAnswer) => ({
      type: CORRECT_ANSWER,
      payload: payload,
    }),
    wrong: () => ({
      type: WRONG_ANSWER,
    }),
  },
  win: () => ({
    type: GAME.WON,
  }),
};
