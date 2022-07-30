import { renderHook } from "@testing-library/react";
import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";

import { initialState, reducer } from "../reducer/reducer";

describe("ImageBrightnessSubToolbar component", () => {
  it("1. should be value 20 if user sets the brightness to 20", async () => {
    const { result } = renderHook(() => useReducer(reducer, initialState));
    const [, dispatch] = result.current;

    act(() => {
      dispatch({
        type: "SET_IMAGE_STYLE",
        payload: { target: "blur", value: 20 },
      });
    });

    expect(result.current[0].imageStyle.blur).toEqual(20);
  });
});
