import { render } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it renders", () => {
    test("Then it should render", () => {
      render(<Form />);
    });
  });
});
