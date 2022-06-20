import { render, screen } from "@testing-library/react";

import Login from "../components/Login";
import { UserContextTypeProvider } from "../context/userContext";

test("첫 화면 렌더링 시 webgenie 로고가 떠야한다", () => {
  render(
    <UserContextTypeProvider>
      <Login />
    </UserContextTypeProvider>
  );

  expect(screen.getByAltText("WebGenie logo"));
  expect(screen.findAllByText("Google로 시작하기"));
  expect(screen.findAllByRole("button"));
});
