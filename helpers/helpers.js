module.exports = {
  firstLetterUpperCase,
  firstLetterLowerCase,
  spaceBetween,
  toTitleCase,
  kebabCase,
};

function firstLetterUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function firstLetterLowerCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function spaceBetween(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase()
    .split("-")
    .join(" ");
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
