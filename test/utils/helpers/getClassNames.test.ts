import { describe, expect } from "vitest";
import { getClassNames } from "../../../src/utils";

const className = "someClassName";

describe.each([
  {
    input: {
      container: false,
      wrapper: true,
      button: false,
      select: true,
      option: true,
    },
    output: "wrapper select option",
  },
  {
    input: className,
    output: "someClassName",
  },
])("positive test", ({ input, output }) => {
  it(`test ${input} equal to ${output}`, () => {
    expect(getClassNames(input)).toEqual(output);
  });
});
