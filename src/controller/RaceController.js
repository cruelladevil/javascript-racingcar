import Race from '../domain/Race';
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';

class RaceController {
  #race;

  constructor() {
    this.#race = new Race();
  }

  async setRaceCars() {
    const carNames = await InputView.readCarNames();

    this.#race.setRaceCars(carNames);
  }

  async setRaceStep() {
    const raceStep = await InputView.readRaceStep();

    this.#race.setRaceStep(raceStep);
  }

  startRace() {
    OutputView.printRaceTitle();

    while (!this.#race.isRaceEnd()) {
      this.#race.moveOneStep();
      OutputView.printRaceState(this.#race.getRaceStates());
    }
  }

  endRace() {
    OutputView.printWinners(this.#race.findWinnerNames());
    InputView.close();
  }
}

export default RaceController;
