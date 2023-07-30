import { describe, expect } from "vitest";
import { getSearchParams } from "../../../src/utils";

describe.each([
  {
    input: {
      q: "some text",
      sort: false,
      order: null,
      someQuery: undefined,
      per_page: 9,
    },
    output: new URLSearchParams({ q: "some text", per_page: "9" }),
  },
])("positive test", ({ input, output }) => {
  it(`test ${input} equal to ${output}`, () => {
    expect(getSearchParams(input)).toEqual(output);
  });
});
