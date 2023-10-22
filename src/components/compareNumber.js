import setNumber from './setNumber.js';
import { get } from '../Utils.js';

const isDuplicate = (number) => {
  return new Set(number.split('')).size === 3; 
}

const compareNumber = () => {

}

const isCorrect = () => {

}
 
export {compareNumber, isDuplicate, isCorrect}