import { Button, Stack, TextField } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { nextId } from '../../utils/id';
import { todoAdd } from '../../store/todos/slice';

const CreateTasks = () => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = nextId();

    dispatch(todoAdd({ id, text }));

    setText('');
  };

  return (
    <form onSubmit={submitHandler}>
      <Stack direction='row' spacing={2}>
        <TextField
          label='Create task...'
          variant='outlined'
          size='small'
          sx={{ width: '100%' }}
          value={text}
          onChange={inputHandler}
          autoFocus
        />
        <Button variant='contained' type='submit' size='small' sx={{ width: 150 }}>
          Create
        </Button>
      </Stack>
    </form>
  );
};

export default CreateTasks;
