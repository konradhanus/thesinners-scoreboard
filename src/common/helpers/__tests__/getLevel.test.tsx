import getLevel from '../getLevel';
import each from 'jest-each';
import { LEVELS }from '../../ListData/ListDataWinners/Data';

LEVELS.pop();

describe('Testy dla funkcji getLevel czy zwraca poprawne wartości', () => {
each(LEVELS).test('Dla punktów %s uzyskalismy %s level', ({id, value}) => {
      const getLevelReturnValue = getLevel(value);
      console.log("Level", getLevelReturnValue);
      expect(getLevelReturnValue).toBe(id);
    });
  
  });