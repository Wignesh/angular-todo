export default interface ToDo {
  todo: string;
  author: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number | null;
}
