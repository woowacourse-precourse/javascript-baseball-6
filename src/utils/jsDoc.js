/**
 * @typedef {object} CompareResult
 * @property {number} strike - 스트라이크의 개수
 * @property {number} ball - 볼의 개수
 */

/**
 * @typedef {object} CalculateCompareResultParams
 * @property {CompareResult} prevCompareResult - 이전 비교 결과
 * @property {number} playerBaseballNumber - 플레이어의 야구공
 * @property {number} digit - 검사할 숫자의 위치
 */

/**
 * @typedef {object} BaseballValidationType
 * @property {string} errorMessage - 유효성 검사 실패 시의 에러 메시지
 * @property {(baseball : number[]) => boolean} isValid - 유효성 검사 함수
 */

/**
 * @typedef {object} BaseballValidationTypes
 * @property {BaseballValidationType} availableNumber - 숫자만을 검사하기 위한 유효성 객체
 * @property {BaseballValidationType} availableNumberRange - 숫자 범위를 검사하기 위한 유효성 객체
 * @property {BaseballValidationType} availableDigit - 숫자의 자릿수를 검사하기 위한 유효성 객체
 * @property {BaseballValidationType} existDuplicateNumber - 숫자의 중복 여부를 검사하기 위한 유효성 객체
 */

/**
 * @typedef {object} CommonValidationType
 * @property {string} errorMessage - 유효성 검사 실패 시의 에러 메시지
 * @property {(inputValue : string) => boolean} isValid - 유효성 검사 함수
 */

/**
 * @typedef {object} CommonValidationTypes
 * @property {CommonValidationType} emptyValues - 입력값이 비어있는지를 검사하기 위한 유효성 객체
 * @property {CommonValidationType} existSpaces - 입력값에 공백이 포함되어 있는지를 검사하기 위한 유효성 객체
 */

/**
 * @typedef {object} ExitGameValidationType
 * @property {string} errorMessage - 유효성 검사 실패 시의 에러 메시지
 * @property {(exitGameCommand : number) => boolean} isValid - 유효성 검사 함수
 */

/**
 * @typedef {object} ExitGameValidationTypes
 * @property {ExitGameValidationType} availableGameCommand - 게임 종료 명령어의 유효성을 검사하는 객체
 */

export {};
