const fs = require("fs");
const employees = { name: "Employee 1 Name", salary: 2000 };

// CREATE FILE
fs.writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf8",
  (err) => {
    if (err) console.log(err);
    console.log("FILE SUCCESSFULLY CREATED");
  }
);

// READ FILE
fs.readFile("employees.json", "utf-8", (err, employees) => {
  if (err) console.log(err);
  console.log(employees);
});

// UPDATE FILE
employees.name = "Employee 3 Name";
employees.salary = 4500;

fs.writeFile(
  "employees.json",
  JSON.stringify(employees, null, 2),
  function (err) {
    if (err) console.error(err);
  }
);

// DELETE FILE
fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
});
