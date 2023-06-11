import { randomNumberBetween } from '../util/Random';
import { isInteger, isPositive } from '../util/number';
import Car from './Car';

const RACE = Object.freeze({
  MIN_RANDOM_NUMBER: 0,
  MAX_RANDOM_NUMBER: 9,
  MOVE_CONDITION: 4,
});

const ERROR = Object.freeze({
  STEP_NOT_INTEGER: '시도할 횟수는 정수여야합니다.',
  STEP_NOT_POSITIVE: '시도할 횟수는 양의 정수를 입력해주세요.',
});

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
    if (!isInteger(raceStep)) throw new Error(ERROR.STEP_NOT_INTEGER);

    if (!isPositive(raceStep)) throw new Error(ERROR.STEP_NOT_POSITIVE);
  }

  isRaceEnd() {
    return this.#raceStep === 0;
  }

  moveOneStep() {
    this.#cars.forEach((car) => {
      const randomNumber = randomNumberBetween(RACE.MIN_RANDOM_NUMBER, RACE.MAX_RANDOM_NUMBER);

      if (randomNumber >= RACE.MOVE_CONDITION) car.move();
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
