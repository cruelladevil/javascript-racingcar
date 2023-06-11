import RaceController from './controller/RaceController';
import { printError } from './view/Output';

class App {
  #raceController;

  constructor() {
    this.#raceController = new RaceController();
  }

  play() {
    this.setRaceCars();
  }

  async setRaceCars() {
    try {
      await this.#raceController.setRaceCars();
      await this.setRaceStep();
    } catch (error) {
      printError(error);
      this.setRaceCars();
    }
  }

  async setRaceStep() {
    try {
      await this.#raceController.setRaceStep();
      this.startRace();
    } catch (error) {
      printError(error);
      this.setRaceStep();
    }
  }

  startRace() {
    this.#raceController.startRace();
    this.#raceController.endRace();
  }
}

export default App;
