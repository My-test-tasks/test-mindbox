import reducer, { todoAdd, ITask, todoToggle, todoDelete } from './slice';

describe('Тесты добавления таска', () => {
  test('Вернуть пустой стейт', () => {
    expect(reducer(undefined, { type: undefined })).toEqual([]);
  });

  test('Добавить таск в пустой стор', () => {
    const previousState: ITask[] = [];

    expect(reducer(previousState, todoAdd({ id: 0, text: '111' }))).toEqual([{ text: '111', completed: false, id: 0 }]);
  });

  test('Добавить таск в непустой стор', () => {
    const previousState: ITask[] = [{ text: '111', completed: false, id: 0 }];

    expect(reducer(previousState, todoAdd({ id: 1, text: '222' }))).toEqual([
      { text: '111', completed: false, id: 0 },
      { text: '222', completed: false, id: 1 },
    ]);
  });
});

describe('Тесты изменения `completed` состояния таска', () => {
  const previousState: ITask[] = [
    { text: '111', completed: false, id: 0 },
    { text: '222', completed: false, id: 1 },
  ];

  test('Изменить состояние существующего таска', () => {
    expect(reducer(previousState, todoToggle({ id: 1 }))).toEqual([
      { text: '111', completed: false, id: 0 },
      { text: '222', completed: true, id: 1 },
    ]);
  });

  test('Изменить состояние несуществующего таска', () => {
    expect(reducer(previousState, todoToggle({ id: 3 }))).toEqual([
      { text: '111', completed: false, id: 0 },
      { text: '222', completed: false, id: 1 },
    ]);
  });
});

describe('Тесты удаления таска', () => {
  const previousState: ITask[] = [
    { text: '111', completed: false, id: 0 },
    { text: '222', completed: false, id: 1 },
  ];

  test('Удаление существующего таска', () => {
    expect(reducer(previousState, todoDelete({ id: 1 }))).toEqual([{ text: '111', completed: false, id: 0 }]);
  });

  test('Удаление несуществующего таска', () => {
    expect(reducer(previousState, todoDelete({ id: 1 }))).toEqual([{ text: '111', completed: false, id: 0 }]);
  });
});
