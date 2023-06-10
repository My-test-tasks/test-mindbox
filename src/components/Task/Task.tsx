import { FC } from 'react';
import { Typography, Stack, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ITask, todoDelete, todoToggle } from '../../store/todos/slice';
import { useAppDispatch } from '../../store/hooks';

interface TaskProps {
  task: ITask;
}

const Task: FC<TaskProps> = ({ task }) => {
  const id = task.id;

  const dispatch = useAppDispatch();

  const styles = task.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' };

  const onChangeHandler = () => {
    dispatch(todoToggle({ id }));
  };

  const deleteHandler = () => {
    dispatch(todoDelete({ id }));
  };

  return (
    <Stack direction='row' alignItems='center' spacing={2} sx={styles} data-testid='task'>
      <Checkbox onChange={onChangeHandler} checked={task.completed} />
      <Typography sx={{ width: '100%' }}>{task.text}</Typography>
      <IconButton onClick={deleteHandler} data-testid='delete'>
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default Task;
