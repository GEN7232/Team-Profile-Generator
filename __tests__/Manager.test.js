const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// test constructor to set office number
test("Can get office number", () => {
  const manager = new Manager("Name", "Id", "Email", "Office Number");
  expect(manager.officeNumber()).toBe("Office Number");
});

// test get role method. it should return "Manager"
test("", () => {
    const manager = new Manager("Name", "ID", "Email");
    expect(manager.getRole()).toBe("Manager");
});

// test get office number method
test("", () => {
    const manager = new Manager("Name", "Id", "Email", "Office Number");
    expect(manager.getOfficeNumber()).toBe("Office Number");
});
