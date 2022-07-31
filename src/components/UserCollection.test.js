import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import UserCollection from "../components/UserCollection";
import { SubToolbarTypeProvider } from "../context/subToolbarContext";
import { UserContextTypeProvider } from "../context/userContext";

describe("UserCollection component", () => {
  it("1. should appear When there are no user-created sites, 'No website created'", () => {
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

  it("2. should be displayed if there is a website created by the user", () => {
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
});
