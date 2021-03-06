import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { findByTestAttr, checkProps } from "../test/test.utils";
import GuessedWords from "./GuessedWords";

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWrod component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("should not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("should render without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("should render instructions to guess word", () => {
    const instructions = findByTestAttr(wrapper, "guessed-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 }
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test("should renders without errors", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test('should renders "guessed words" section', () => {
    const GuessedWordsDiv = findByTestAttr(wrapper, "guessed-words");
    expect(GuessedWordsDiv.length).toBe(1);
  });
  test("should dispaly the correct number of guessed words", () => {
    const guessedWordsNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  });
});
