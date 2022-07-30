import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import UserCollection from "../components/UserCollection";
import { SubToolbarTypeProvider } from "../context/subToolbarContext";
import { UserContextTypeProvider } from "../context/userContext";

it("1. 사용자가 생성한 사이트가 아무것도 없을 때 '생성된 웹 사이트가 없습니다'라고 나타나야한다.", () => {
  render(
    <MemoryRouter>
      <SubToolbarTypeProvider>
        <UserContextTypeProvider>
          <UserCollection />
        </UserContextTypeProvider>
      </SubToolbarTypeProvider>
    </MemoryRouter>
  );

  expect(screen.getByText("생성된 웹사이트가 없습니다.")).toBeInTheDocument();
});

it("2. 사용자가 생성한 사이트가 있다면, 해당 사이트를 모두 보여주어야 한다.", () => {
  const searchKeyword = "test";
  const sampleCollections = [
    {
      _id: "1",
      author: "test1",
      title: "test1",
    },
    {
      _id: "2",
      author: "test2",
      title: "test2",
    },
  ];

  const { getByText } = render(
    <MemoryRouter>
      <SubToolbarTypeProvider>
        <UserContextTypeProvider>
          <UserCollection
            collections={sampleCollections}
            searchKeyword={searchKeyword}
          />
        </UserContextTypeProvider>
      </SubToolbarTypeProvider>
    </MemoryRouter>
  );

  expect(getByText(sampleCollections[0].title)).toHaveTextContent("test1");
  expect(getByText(sampleCollections[1].title)).toHaveTextContent("test2");
});
