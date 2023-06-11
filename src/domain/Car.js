import CAR from '../constants/Car';
import ERROR from '../constants/Error';

const { NAME_LENGTH_MIN, NAME_LENGTH_MAX } = CAR;
const { VALID_NAME_LENGTH } = ERROR;

class Car {
  #name;
  #position;

  constructor(name) {
    Car.#validateCarName(name);

    this.#name = name;
    this.#position = 0;
  }

  static #validateCarName(name) {
    if (!Car.#isValidNameLength(name)) {
      throw new Error(VALID_NAME_LENGTH);
    }
  }

  static #isValidNameLength(name) {
    return [...name].length >= NAME_LENGTH_MIN && [...name].length <= NAME_LENGTH_MAX;
  }

  move() {
    this.#position += 1;
  }

  getRaceState() {
    const name = this.#name;
    const position = this.#position;

    return { name, position };
  }

  isFarPosition(other) {
    return this.#position > other.#position;
  }

  isSamePosition(other) {
    return this.#position === other.#position;
  }

  getName() {
    return this.#name;
  }
}

export default Car;
