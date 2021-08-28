const fs = require("fs");

let forms = JSON.parse(fs.readFileSync("resources/repo.json"));

const add = (data) => {
  forms = forms.concat(data);
  fs.writeFile("resources/repo.json", JSON.stringify(forms), (err) => {
    if (err) {
      console.log("error in updating repository.");
      throw err;
    }
  });
};

const getAll = () => {
  return forms;
};

module.exports = {
  getAll: getAll,
  add: add,
};
