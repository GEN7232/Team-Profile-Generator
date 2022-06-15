const Employee = require("../lib/Employee");

test("Can make an object", () => {
  const employee = new Employee("Name", "ID", "Email");
  expect(typeof(employee)).toBe("object");
});

test("Can set name", () => {
  const employee = new Employee("Name", "ID", "Email");
  expect(employee.name).toBe("Name");
});

test("Can set ID", () => {
  const employee = new Employee("Name", "ID", "Email");
  expect(employee.id).toBe("ID");
});

test("Can add Email", () => {
  const employee = new Employee("Name", "ID", "Email");
  expect(employee.email).toBe("Email");
});

test("Can get name", () => {
  const employee = new Employee("Name", "ID", "Email");
  expect(employee.getName()).toBe("Name");
});

test("Can get ID", () => {
  const employee = new Employee("Name", "ID", "Email");
  expect(employee.getId()).toBe("ID");
});

test("Can get Email", () => {
  const employee = new Employee("Name", "ID", "Email");
  expect(employee.getEmail()).toBe("Email");
});

test("Can get role", () => {
  const employee = new Employee("Name", "ID", "Email");
  expect(employee.getRole()).toBe("Employee");
});
