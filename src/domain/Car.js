const CAR = Object.freeze({
  MIN_NAME_LENGTH: 1,
  MAX_NAME_LENGTH: 5,
});

const ERROR = Object.freeze({
  VALID_NAME_LENGTH: `자동차의 이름은 최소 ${CAR.MIN_NAME_LENGTH}자, 최대 ${CAR.MAX_NAME_LENGTH}자입니다.`,
});

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
      throw new Error(ERROR.VALID_NAME_LENGTH);
    }
  }

  static #isValidNameLength(name) {
    return [...name].length >= CAR.MIN_NAME_LENGTH && [...name].length <= CAR.MAX_NAME_LENGTH;
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
