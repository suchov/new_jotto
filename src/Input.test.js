import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { findByTestAttr, storeFactory } from "../test/test.utils";
import Input from "./Input";

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
};

describe("render", () => {
  describe("word has not been guessed", () => {
    test("should render component without errors", () => {});
    test("should render input box", () => {});
    test("should render the submit button", () => {});
  });
  describe("word had been guessed", () => {});
});

describe("update state", () => {
  test("should not render component without errors", () => {});
  test("should not render input box", () => {});
  test("should not render the submit button", () => {});
});
