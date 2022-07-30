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

it("2. should have style in modal div", () => {
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
        <div className="hello">hello</div>
      </Modal>
    </ModalPortal>
  );

  screen.debug();

  const div = screen.getByText("hello");

  expect(div).toHaveStyle(`display: flex`);
  expect(div).toHaveStyle(`margin: 10px 20px`);
  expect(div).toHaveStyle(`flex-direction: column`);
});
