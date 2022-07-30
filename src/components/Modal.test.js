import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";

import ModalPortal from "../Portal";
import Modal from "./Modal";

it("1. show modal when modal component execution and text modal content", () => {
  let portalRoot = document.getElementById("modal-root");

  if (!portalRoot) {
    portalRoot = document.createElement("div");
    portalRoot.setAttribute("id", "modal-root");
    portalRoot.setAttribute("test-id", "modal-root");
    document.body.appendChild(portalRoot);
  }

  render(
    <ModalPortal>
      <Modal>
        <div>hello</div>
      </Modal>
    </ModalPortal>
  );

  screen.debug();

  const modal = screen.findByTestId("modal-root");

  expect(modal).toBeTruthy();
  expect(screen.getByText("hello")).toContainHTML("div");
});
