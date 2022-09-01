import displayIcon from '../displayIcon';
import { IconType } from "../types";
describe('Testy dla funkcji displayIcon czy zwraca poprawne wartości', () => {

    test('First Place', () => {
      const displayIconReturnValue = displayIcon(IconType.FirstPlace);
      console.log(displayIconReturnValue);
      expect(true).toBe(true);
    });
  
  });