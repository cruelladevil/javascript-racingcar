import Console from '../util/Console';
import ERROR from '../constants/Error';
import { MESSAGE } from '../constants/Message';

const { WINNER_MESSAGE_SUFFIX, EMPTY_LINE, RACE_RESULT_TITLE } = MESSAGE;
const { PREFIX } = ERROR;

export const printWinners = (winnerNames) => {
  Console.print(`${winnerNames.join(', ')}${WINNER_MESSAGE_SUFFIX}`);
};

export const printRaceTitle = () => {
  Console.print(EMPTY_LINE);
  Console.print(RACE_RESULT_TITLE);
};

export const printRaceState = (raceStates) => {
  raceStates.forEach(({ name, position }) => {
    Console.print(`${name}: ${'-'.repeat(position)}`);
  });

  Console.print(EMPTY_LINE);
};

export const printError = (error) => {
  Console.print(`${PREFIX} ${error.message}`);
};
