import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../store';
import App from './App';

const renderWithRedux = (component: JSX.Element) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('Тест приложения', () => {
  test('Начальная загрузки', async () => {
    renderWithRedux(<App />);

    expect(screen.getByRole('heading')).toHaveTextContent('TODO App');
    expect(screen.getByText('Create')).toBeInTheDocument();
  });

  test('Добавление таска', async () => {
    renderWithRedux(<App />);

    const input = screen.getByLabelText('Create task...');

    await userEvent.type(input, '111');
    await userEvent.type(input, '{enter}');

    expect(screen.getAllByText('111').length).toBe(2);
  });

  test('Изменение состояния таска', async () => {
    renderWithRedux(<App />);

    let tasks;

    const [checkbox] = await screen.findAllByRole('checkbox');

    await userEvent.click(checkbox);

    tasks = screen.getAllByTestId('task');

    expect(tasks[0]).toHaveStyle('text-decoration: line-through');
    expect(tasks[1]).toHaveStyle('text-decoration: line-through');

    await userEvent.click(checkbox);

    tasks = screen.getAllByTestId('task');

    expect(tasks[0]).toHaveStyle('text-decoration: none');
    expect(tasks[1]).toHaveStyle('text-decoration: none');
  });

  test('Удаление таска', async () => {
    renderWithRedux(<App />);

    const [button] = await screen.findAllByTestId('delete');

    await userEvent.click(button);

    expect(screen.queryAllByText('111').length).toBe(0);
  });
});
