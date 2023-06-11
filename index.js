const {
  toPascalCase,
  toCamelCase,
  spaceBetween,
  toTitleCase,
  kebabCase,
} = require("./helpers/helpers.js");
const path = require("path");

module.exports = function (plop) {
  const helpers = {
    toPascalCase,
    toCamelCase,
    spaceBetween,
    toTitleCase,
    kebabCase,
  };

  Object.entries(helpers).forEach(([name, fn]) => {
    plop.setHelper(name, fn);
  });

  // store generator
  plop.setGenerator("store", {
    description: "Generator for NGXS store",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "store name (examples: HelloWorld, hello-world):",
        validate: (value) =>
          /[a-z]/gi.test(value) ? true : "name is required",
      },
      {
        type: "input",
        name: "directory",
        message: 'directory (default "store"):',
        default: "store",
      },
    ],
    actions: function (data) {
      let dirname = "store";

      if (data.directory) {
        dirname = data.directory;
      }

      return [
        {
          type: "add",
          path: path.join(dirname, "index.ts"),
          templateFile: "templates/index.hbs",
        },
        {
          type: "add",
          path: path.join(dirname, "{{kebabCase name}}.actions.ts"),
          templateFile: "templates/actions.hbs",
        },
        {
          type: "add",
          path: path.join(dirname, "{{kebabCase name}}.constant.ts"),
          templateFile: "templates/constant.hbs",
        },
        {
          type: "add",
          path: path.join(dirname, "{{kebabCase name}}.selector.ts"),
          templateFile: "templates/selector.hbs",
        },
        {
          type: "add",
          path: path.join(dirname, "{{kebabCase name}}.state.ts"),
          templateFile: "templates/state.hbs",
        },
        {
          type: "add",
          path: path.join(dirname, "{{kebabCase name}}.state.spec.ts"),
          templateFile: "templates/state.spec.hbs",
        },
        {
          type: "add",
          path: path.join(dirname, "{{kebabCase name}}.types.ts"),
          templateFile: "templates/types.hbs",
        },
      ];
    },
  });
};
