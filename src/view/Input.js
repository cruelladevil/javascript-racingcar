import { QUESTION } from '../constants/Message';
import Console from '../util/Console';

const { CAR_NAMES, RACE_STEP } = QUESTION;

const readCarNames = async () => {
  const carNames = await Console.readline(CAR_NAMES);

  return carNames.replaceAll(/\s/g, '').split(',');
};

const readRaceStep = async () => {
  const raceStep = await Console.readline(RACE_STEP);

  return Number(raceStep);
};

const close = () => {
  Console.close();
};

export { readCarNames, readRaceStep, close };
