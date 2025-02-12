import CAR from '../src/constants/Car';
import ERROR from '../src/constants/Error';
import Car from '../src/domain/Car';

describe('Car 객체 생성의 validation 테스트입니다.', () => {
  test.each(['1', 'conan', 'pobi🌱'])('정상 케이스의 경우 Car 객체가 생성된다.', (carName) => {
    // given
    const normalCarName = carName;

    // when
    const createCar = () => new Car(normalCarName);

    // then
    expect(createCar).not.toThrow();
  });

  test(`자동차의 이름이 ${CAR.NAME_LENGTH_MIN}자 이하일 경우 예외를 던진다.`, () => {
    // given
    const emptyCarName = '';

    // when
    const createEmptyNameCar = () => new Car(emptyCarName);

    // then
    expect(createEmptyNameCar).toThrow(ERROR.VALID_NAME_LENGTH);
  });

  test(`자동차의 이름은 ${CAR.NAME_LENGTH_MAX}자 이상일 경우 예외를 던진다.`, () => {
    // given
    const longName = 'conana';

    // when
    const createLongNameCar = () => new Car(longName);

    // then
    expect(createLongNameCar).toThrow(ERROR.VALID_NAME_LENGTH);
  });
});

describe('Car 객체의 메서드 테스트입니다.', () => {
  test('move - 자동차는 움직일 수 있다.', () => {
    // given
    const car = new Car('conan');
    const moveCount = 3;

    // when
    Array.from({ length: moveCount }).forEach(() => {
      car.move();
    });

    // then
    const { position } = car.getRaceState();

    expect(position).toBe(3);
  });

  test('getRaceState - 자동차의 경주 상황을 객체로 반환한다.', () => {
    // given
    const car = new Car('conan');
    const moveCount = 3;

    // when
    Array.from({ length: moveCount }).forEach(() => {
      car.move();
    });

    // then
    expect(car.getRaceState()).toEqual({ name: 'conan', position: 3 });
  });

  test('isFarPosition - 다른 Car 객체와 위치를 비교해 멀리 갔다면 true를 반환한다.', () => {
    // given
    const pobi = new Car('pobi');
    const conan = new Car('conan');

    // when
    pobi.move();

    // then
    expect(pobi.isFarPosition(conan)).toBe(true);
  });

  test('isFarPosition - 다른 Car 객체와 위치를 비교해 멀리 가지 않았다면 false를 반환한다.', () => {
    // given
    const pobi = new Car('pobi');
    const conan = new Car('conan');

    // when
    pobi.move();

    // then
    expect(conan.isFarPosition(pobi)).toBe(false);
  });

  test('isSamePosition - 다른 Car 객체와 위치가 같으면 true를 반환한다.', () => {
    // given
    const pobi = new Car('pobi');
    const conan = new Car('conan');

    // when
    pobi.move();
    conan.move();

    // then
    expect(pobi.isSamePosition(conan)).toBe(true);
  });

  test('isSamePosition - 다른 Car 객체와 위치가 다르면 false를 반환한다.', () => {
    // given
    const pobi = new Car('pobi');
    const conan = new Car('conan');

    // when
    pobi.move();

    // then
    expect(pobi.isSamePosition(conan)).toBe(false);
  });

  test('getName - Car 객체의 name을 반환한다.', () => {
    // given
    const conan = new Car('conan');

    // when

    // then
    expect(conan.getName()).toBe('conan');
  });
});
