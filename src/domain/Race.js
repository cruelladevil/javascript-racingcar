import generateRandomNumberBetween from '../util/Random';
import Car from './Car';
import ERROR from '../constants/Error';
import RACE from '../constants/Race';

const { STEP_NOT_INTEGER, STEP_NOT_POSITIVE } = ERROR;
const { RANDOM_NUMBER_MIN, RANDOM_NUMBER_MAX, MOVE_CONDITION } = RACE;

class Race {
  #cars;
  #raceStep;

  setRaceCars(carNames) {
    this.#cars = carNames.map((name) => new Car(name));
  }

  setRaceStep(raceStep) {
    Race.#validateRaceStep(raceStep);

    this.#raceStep = raceStep;
  }

  static #validateRaceStep(raceStep) {
    if (!Number.isInteger(raceStep)) {
      throw new Error(STEP_NOT_INTEGER);
    }

    if (raceStep <= 0) {
      throw new Error(STEP_NOT_POSITIVE);
    }
  }

  isRaceEnd() {
    return this.#raceStep === 0;
  }

  moveOneStep() {
    this.#cars.forEach((car) => {
      const randomNumber = generateRandomNumberBetween(RANDOM_NUMBER_MIN, RANDOM_NUMBER_MAX);

      if (randomNumber >= MOVE_CONDITION) car.move();
    });

    this.#raceStep -= 1;
  }

  getRaceStates() {
    return this.#cars.map((car) => car.getRaceState());
  }

  #findWinners() {
    const winnerCar = this.#cars.reduce((maxPositionCar, currentCar) => {
      return maxPositionCar.isFarPosition(currentCar) ? maxPositionCar : currentCar;
    });

    return this.#cars.filter((car) => car.isSamePosition(winnerCar));
  }

  findWinnerNames() {
    const winnerCars = this.#findWinners();

    return winnerCars.map((winnerCar) => winnerCar.getName());
  }
}

export default Race;
