import { nextId } from './id';

describe('Тест генератора `id`', () => {
  test('Вернуть 0', () => {
    expect(nextId()).toBe(0);
  });

  test('Вернуть 1', () => {
    expect(nextId()).toBe(1);
  });

  test('Вернуть 2', () => {
    expect(nextId()).toBe(2);
  });
});
