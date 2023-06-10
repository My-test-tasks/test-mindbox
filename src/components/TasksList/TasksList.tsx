import { FC } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Task from '../Task';
import { useAppSelector } from '../../store/hooks';

export enum TasksListVariant {
  all = 'all',
  completed = 'completed',
  uncompleted = 'uncompleted',
}

type TasksListProps = {
  variant: TasksListVariant;
};

const TasksList: FC<TasksListProps> = ({ variant }) => {
  let todos = useAppSelector((state) => state.todos);
  let title = 'All tasks';

  switch (variant) {
    case TasksListVariant.completed:
      todos = todos.filter((todo) => todo.completed);
      title = 'Completed';
      break;

    case TasksListVariant.uncompleted:
      todos = todos.filter((todo) => !todo.completed);
      title = 'Uncompleted';
      break;

    default:
      break;
  }

  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        {todos.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default TasksList;
