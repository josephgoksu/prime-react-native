export enum GameStatus {
  NONE = 'NONE',
  STARTED = 'STARTED',
  RESETED = 'RESETED',
  WON = 'WON',
}

export interface iGameReducer {
  status: GameStatus;
  level: number;
  numOfAnswers: number;
  question?: iQuestion;
}

export enum iAnimal {
  ant = 'ant',
  bird = 'bird',
  cat = 'cat',
  chicken = 'chicken',
  cow = 'cow',
  dog = 'dog',
  elephant = 'elephant',
  fish = 'fish',
  fox = 'fox',
  horse = 'horse',
  kangaroo = 'kangaroo',
  lion = 'lion',
  monkey = 'monkey',
  penguin = 'penguin',
  pig = 'pig',
  rabbit = 'rabbit',
  sheep = 'sheep',
  tiger = 'tiger',
  whale = 'whale',
  wolf = 'wolf',
}

interface iQuestion {
  animalName: iAnimal;
}
