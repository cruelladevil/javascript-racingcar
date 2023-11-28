import { QUESTION } from '../constants/Message';
import Console from '../util/Console';

const { CAR_NAMES, RACE_STEP } = QUESTION;

export const readCarNames = async () => {
  const carNames = await Console.readline(CAR_NAMES);

  return carNames.replaceAll(/\s/g, '').split(',');
};

export const readRaceStep = async () => {
  const raceStep = await Console.readline(RACE_STEP);

  return Number(raceStep);
};

export const close = () => {
  Console.close();
};
