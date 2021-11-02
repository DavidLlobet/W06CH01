import { loadTasksAction } from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given an actionCreators", () => {
  describe("When it calls a loadTasksAction", () => {
    test("Then it should return a list of tasks", () => {
      const initialTasks = [
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
      const expected = {
        type: actionTypes.loadTasks,
        tasks: initialTasks,
      };

      const result = loadTasksAction(initialTasks);

      expect(result).toEqual(expected);
    });
  });
});
