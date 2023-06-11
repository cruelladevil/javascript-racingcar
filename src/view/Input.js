import Console from '../util/Console';

const QUESTION = Object.freeze({
  CAR_NAMES: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
  RACE_STEP: '시도할 회수는 몇회인가요?',
});

const readCarNames = async () => {
  const carNames = await Console.readline(QUESTION.CAR_NAMES);

  return carNames.replaceAll(/\s/g, '').split(',');
};

const readRaceStep = async () => {
  const raceStep = await Console.readline(QUESTION.RACE_STEP);

  return Number(raceStep);
};

const close = () => {
  Console.close();
};

export { readCarNames, readRaceStep, close };
