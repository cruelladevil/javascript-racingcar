import CAR from './Car';

const ERROR = Object.freeze({
  PREFIX: '[ERROR]',
  VALID_NAME_LENGTH: `자동차의 이름은 최소 ${CAR.NAME_LENGTH_MIN}자, 최대 ${CAR.NAME_LENGTH_MAX}자입니다.`,
  STEP_NOT_INTEGER: '시도할 횟수는 정수여야합니다.',
  STEP_NOT_POSITIVE: '시도할 횟수는 양의 정수를 입력해주세요.',
});

export default ERROR;
