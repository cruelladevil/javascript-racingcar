import Race from '../domain/Race';
import { close, readCarNames, readRaceStep } from '../view/Input';
import { printRaceState, printRaceTitle, printWinners } from '../view/Output';

class RaceController {
  #race;

  constructor() {
    this.#race = new Race();
  }

  async setRaceCars() {
    const carNames = await readCarNames();

    this.#race.setRaceCars(carNames);
  }

  async setRaceStep() {
    const raceStep = await readRaceStep();

    this.#race.setRaceStep(raceStep);
  }

  startRace() {
    printRaceTitle();

    while (!this.#race.isRaceEnd()) {
      this.#race.moveOneStep();
      printRaceState(this.#race.getRaceStates());
    }
  }

  endRace() {
    printWinners(this.#race.findWinnerNames());
    close();
  }
}

export default RaceController;
