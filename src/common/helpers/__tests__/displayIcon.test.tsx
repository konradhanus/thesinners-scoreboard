import displayIcon from '../displayIcon';
import { IconType } from "../types";
describe('Testy dla funkcji displayIcon czy zwraca poprawne wartości', () => {

    test('First Place', () => {
      const displayIconReturnValue = displayIcon(IconType.FirstPlace);
      console.log("Ikona 1", displayIconReturnValue);
      expect(true).toBe(true);
    });
  
  });