import { Todo } from './todo';

export const TODOS: Todo[] = [
  {
    id: 1,
    name: 'mock-todo 1',
    description: 'this is a description of the todo 1',
    status: true,
    dueDate: new Date(2017, 4, 4, 17, 23, 42, 11)
  },
  {
    id: 2,
    name: 'mock-todo 2',
    description: 'this is a description of the todo 2',
    status: false,
    dueDate: new Date(2018, 4, 4, 17, 23, 42, 11)
  },
  {
    id: 3,
    name: 'mock-todo 3',
    description: 'this is a description of the todo 2',
    status: true,
    dueDate: new Date(2019, 4, 4, 17, 23, 42, 11)
  }
];
