import { render, screen } from "@testing-library/react";

import Login from "../components/Login";
import { UserContextTypeProvider } from "../context/userContext";

test("1. 첫 화면에 로고와 글자들이 보여야 한다.", () => {
  render(
    <UserContextTypeProvider>
      <Login />
    </UserContextTypeProvider>
  );

  expect(screen.getByAltText("WebGenie logo"));
  expect(
    screen.getByText("당신의 웹사이트를 만들어보세요!")
  ).toBeInTheDocument();
  expect(screen.getByText("Google로 시작하기")).toBeInTheDocument();

  screen.debug();
});
