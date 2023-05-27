const {
  firstLetterUpperCase,
  firstLetterLowerCase,
  spaceBetween,
  toTitleCase,
  kebabCase,
} = require("./helpers/helpers.js");

module.exports = function (plop) {
  const helpers = {
    firstLetterUpperCase,
    firstLetterLowerCase,
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
        message: "store name please",
        validate: (value) =>
          /[a-z]/gi.test(value) ? true : "name is required",
      },
    ],
    actions: [
      {
        type: "add",
        path: "store/index.ts",
        templateFile: "templates/index.hbs",
      },
      {
        type: "add",
        path: "store/{{kebabCase name}}.actions.ts",
        templateFile: "templates/actions.hbs",
      },
      {
        type: "add",
        path: "store/{{kebabCase name}}.constant.ts",
        templateFile: "templates/constant.hbs",
      },
      {
        type: "add",
        path: "store/{{kebabCase name}}.selector.ts",
        templateFile: "templates/selector.hbs",
      },
      {
        type: "add",
        path: "store/{{kebabCase name}}.state.ts",
        templateFile: "templates/state.hbs",
      },
      {
        type: "add",
        path: "store/{{kebabCase name}}.state.spec.ts",
        templateFile: "templates/state.spec.hbs",
      },
      {
        type: "add",
        path: "store/{{kebabCase name}}.types.ts",
        templateFile: "templates/types.hbs",
      },
    ],
  });
};
