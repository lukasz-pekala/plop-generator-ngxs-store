import {
  toPascalCase,
  toCamelCase,
  kebabCase,
  spaceBetween,
  toTitleCase,
} from "./helpers";

describe("Helper functions", () => {
  describe("toPascalCase", () => {
    [
      { input: "hello", expected: "Hello" },
      { input: "Hello", expected: "Hello" },
      { input: "world", expected: "World" },
      { input: "hello world", expected: "HelloWorld" },
    ].forEach(({ input, expected }) => {
      test(`converts ${input}`, () => {
        expect(toPascalCase(input)).toBe(expected);
      });
    });
  });

  describe("toCamelCase", () => {
    [
      { input: "hello", expected: "hello" },
      { input: "Hello", expected: "hello" },
      { input: "world", expected: "world" },
      { input: "hello world", expected: "helloWorld" },
    ].forEach(({ input, expected }) => {
      test(`converts ${input}`, () => {
        expect(toCamelCase(input)).toBe(expected);
      });
    });
  });

  describe("spaceBetween", () => {
    test("replaces underscores with spaces", () => {
      expect(spaceBetween("hello_world")).toBe("hello world");
    });

    test("replaces dashes with spaces", () => {
      expect(spaceBetween("hello_world")).toBe("hello world");
    });

    test("keeps spaces intact", () => {
      expect(spaceBetween("hello world")).toBe("hello world");
    });
  });

  describe("toTitleCase", () => {
    test("replaces underscores with spaces and capitalizes first letters", () => {
      expect(toTitleCase("hello_world")).toBe("Hello World");
    });

    test("keeps spaces intact and capitalizes first letters", () => {
      expect(toTitleCase("hello world")).toBe("Hello World");
    });

    test("converts camelCase to Title Case", () => {
      expect(toTitleCase("helloWorld")).toBe("Hello World");
    });

    test("converts PascalCase to Title Case", () => {
      expect(toTitleCase("HelloWorld")).toBe("Hello World");
    });

    test("converts snake_case to Title Case", () => {
      expect(toTitleCase("hello_world")).toBe("Hello World");
    });

    test("converts kebab-case to Title Case", () => {
      expect(toTitleCase("hello-world")).toBe("Hello World");
    });
  });

  describe("kebabCase", () => {
    test("converts a string with spaces", () => {
      expect(kebabCase("hello world")).toBe("hello-world");
    });

    test("converts camelCase to kebab-case", () => {
      expect(kebabCase("helloWorld")).toBe("hello-world");
    });

    test("converts PascalCase to kebab-case", () => {
      expect(kebabCase("HelloWorld")).toBe("hello-world");
    });

    test("converts snake_case to kebab-case", () => {
      expect(kebabCase("hello_world")).toBe("hello-world");
    });
  });
});
