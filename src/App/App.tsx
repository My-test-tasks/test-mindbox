import { Container, Typography, Stack, Box } from '@mui/material';

import CreateTasks from '../components/CreateTasks';
import TasksList, { TasksListVariant } from '../components/TasksList';

const App = () => {
  return (
    <Container>
      <Stack spacing={2}>
        <Typography variant='h2'>TODO App</Typography>

        <CreateTasks />

        <Box>
          <TasksList variant={TasksListVariant.all} />
          <TasksList variant={TasksListVariant.uncompleted} />
          <TasksList variant={TasksListVariant.completed} />
        </Box>
      </Stack>
    </Container>
  );
};

export default App;
