module.exports = {
  toPascalCase,
  toCamelCase,
  spaceBetween,
  toTitleCase,
  kebabCase,
};

function toCamelCase(str) {
  return str
    .replace(/-|_/g, " ")
    .replace(/\b\w/g, function (txt) {
      return txt.toUpperCase();
    })
    .replace(/\s+/g, "")
    .replace(/^\w/, function (txt) {
      return txt.toLowerCase();
    });
}

function spaceBetween(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase()
    .split("-")
    .join(" ");
}

function toPascalCase(str) {
  return str
    .replace(/-|_/g, " ")
    .replace(/\b\w/g, function (txt) {
      return txt.toUpperCase();
    })
    .replace(/\s+/g, "");
}

function toTitleCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function kebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}
