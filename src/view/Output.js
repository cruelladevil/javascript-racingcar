import Console from '../util/Console';

const EMPTY_LINE = '';
const ERROR_MESSAGE_PREFIX = '[ERROR]';
const RACE_RESULT_TITLE = '실행 결과';
const WINNER_MESSAGE_SUFFIX = '가 최종 우승했습니다.';

const printWinners = (winnerNames) => {
  Console.print(`${winnerNames.join(', ')}${WINNER_MESSAGE_SUFFIX}`);
};

const printRaceTitle = () => {
  Console.print(EMPTY_LINE);
  Console.print(RACE_RESULT_TITLE);
};

const printRaceState = (raceStates) => {
  raceStates.forEach(({ name, position }) => {
    Console.print(`${name}: ${'-'.repeat(position)}`);
  });

  Console.print(EMPTY_LINE);
};

const printError = (error) => {
  Console.print(`${ERROR_MESSAGE_PREFIX} ${error.message}`);
};

export { printWinners, printRaceTitle, printRaceState, printError };
