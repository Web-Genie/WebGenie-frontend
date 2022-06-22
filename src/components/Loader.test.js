import renderer from "react-test-renderer";

import Loader from "./Loader";

it("renders correctly", () => {
  const loadingAnimation = renderer.create(<Loader />);

  expect(loadingAnimation).toMatchSnapshot();
});
