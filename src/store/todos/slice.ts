import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITask {
  id: number;
  text: string;
  completed: boolean;
}

type AddPayload = Pick<ITask, 'id' | 'text'>;

type TogglePayload = Pick<ITask, 'id'>;

type DeletePayload = Pick<ITask, 'id'>;

const initialState: ITask[] = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdd: (state, action: PayloadAction<AddPayload>) => {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    },
    todoToggle: (state, action: PayloadAction<TogglePayload>) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    todoDelete: (state, action: PayloadAction<DeletePayload>) => {
      const todoIndex = state.findIndex((todo) => todo.id === action.payload.id);
      state.splice(todoIndex, 1);
    },
  },
});

export const { todoAdd, todoToggle, todoDelete } = todosSlice.actions;
export default todosSlice.reducer;
