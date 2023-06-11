import Console from '../util/Console';
import ERROR from '../constants/Error';
import { MESSAGE } from '../constants/Message';

const { WINNER_MESSAGE_SUFFIX, EMPTY_LINE, RACE_RESULT_TITLE } = MESSAGE;
const { PREFIX } = ERROR;

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
  Console.print(`${PREFIX} ${error.message}`);
};

export { printWinners, printRaceTitle, printRaceState, printError };
