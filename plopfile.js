module.exports = function (plop) {
  plop.setHelper("FirstLetterUpperCase", (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  plop.setHelper("FirstLetterLowerCase", (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
  });

  plop.setHelper("SpaceBetween", (str) => {
    return str
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase()
      .split("-")
      .join(" ");
  });

  plop.setHelper("KebabCase", (str) =>
    str
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase()
  );

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
        path: "store/{{name}}.actions.ts",
        templateFile: "templates/actions.hbs",
      },
      {
        type: "add",
        path: "store/{{name}}.constant.ts",
        templateFile: "templates/constant.hbs",
      },
      {
        type: "add",
        path: "store/{{name}}.selector.ts",
        templateFile: "templates/selector.hbs",
      },
      {
        type: "add",
        path: "store/{{name}}.state.ts",
        templateFile: "templates/state.hbs",
      },
      {
        type: "add",
        path: "store/{{name}}.state.spec.ts",
        templateFile: "templates/state.spec.hbs",
      },
      {
        type: "add",
        path: "store/{{name}}.types.ts",
        templateFile: "templates/types.hbs",
      },
    ],
  });
};
