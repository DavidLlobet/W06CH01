import actionTypes from "../actions/actionTypes";
import tasksReducer from "./tasksReducer";

describe("Given a tasksReducer reducer", () => {
  describe("When it receives a list of tasks and a loadTasksAction", () => {
    test("Then it should return a new list of tasks", () => {
      const initialTasks = [];
      const tasks = [
        {
          id: 1,
          text: "Wash the dishes",
          isEnabled: true,
        },
        {
          id: 2,
          text: "Do the shopping",
          isEnabled: true,
        },
        {
          id: 3,
          text: "Feed the dog",
          isEnabled: true,
        },
      ];
      const loadTasks = {
        type: actionTypes.loadTasks,
        tasks: tasks,
      };

      const result = tasksReducer(initialTasks, loadTasks);

      expect(result).toEqual(tasks);
    });
  });
});
