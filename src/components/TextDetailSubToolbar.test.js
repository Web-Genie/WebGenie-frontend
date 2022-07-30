import { renderHook } from "@testing-library/react";
import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";

import { initialState, reducer } from "../reducer/reducer";

it("1. should be value sarif if user sets the font-family to serif", async () => {
  const { result } = renderHook(() => useReducer(reducer, initialState));
  const [, dispatch] = result.current;

  act(() => {
    dispatch({
      type: "SET_FONT_STYLE",
      payload: { target: "family", value: "serif" },
    });
  });

  expect(result.current[0].fontStyle.family).toEqual("serif");
});

it("2. should be value 10 if user sets the font-size to 10", async () => {
  const { result } = renderHook(() => useReducer(reducer, initialState));
  const [, dispatch] = result.current;

  act(() => {
    dispatch({
      type: "SET_FONT_STYLE",
      payload: { target: "size", value: 10 },
    });
  });

  expect(result.current[0].fontStyle.size).toEqual(10);
});
