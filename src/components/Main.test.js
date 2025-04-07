import { initializeTimes, updateTimes } from './Main';

describe('initializeTimes', () => {
  test('should return the expected array of times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    expect(initializeTimes()).toEqual(expectedTimes);
  });
});

describe('updateTimes', () => {
  test('should return the same array regardless of the action', () => {
    const initialState = ['17:00', '18:00'];
    const action = { type: 'UPDATE_TIMES', payload: '2025-04-10' };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initializeTimes());
  });
});