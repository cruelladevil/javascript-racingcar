import RaceController from './controller/RaceController';

class App {
  #raceController;

  play() {
    this.#raceController = new RaceController();
    this.setRace();
  }

  setRace() {
    this.setRaceCars();
  }

  setRaceCars() {
    this.#raceController
      .setRaceCars()
      .then(() => this.setRaceStep())
      .catch((error) => {
        RaceController.handleError(error);
        this.setRaceCars();
      });
  }

  setRaceStep() {
    this.#raceController
      .setRaceStep()
      .then(() => this.startRace())
      .catch((error) => {
        RaceController.handleError(error);
        this.setRaceStep();
      });
  }

  startRace() {
    this.#raceController.startRace();
    this.endRace();
  }

  endRace() {
    this.#raceController.showWinners();
  }
}

export default App;
