/* eslint-disable @typescript-eslint/no-unsafe-call */
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import ComponenteTeste from "./ComponenteTeste";

it("changes the class when hovered", async () => {
  const component = renderer.create(
    <ComponenteTeste page="http://www.facebook.com">Facebook</ComponenteTeste>,
  );
  let tree = component.toJSON() as ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  await renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON() as ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  await renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON() as ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();
});
