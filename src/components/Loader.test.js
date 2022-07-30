import renderer from "react-test-renderer";

import Loader from "./Loader";

it("1. renders correctly", () => {
  const loadingAnimation = renderer.create(<Loader />);

  expect(loadingAnimation).toMatchSnapshot();
});
