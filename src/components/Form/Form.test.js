import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it renders", () => {
    test("Then it should render an input", () => {
      render(<Form />);
      const elementForm = screen.getByPlaceholderText("id");

      expect(elementForm).toBeInTheDocument();
    });
  });
});
