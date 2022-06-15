const Intern = require("../lib/Intern");

test("Can set school", () => {
    const intern = new Intern("Name", "ID", "Email", "School")
    expect(intern.school()).toBe("School");
});

test("Can get role", () => {
    const intern = new Intern("Name", "ID", "Email");
    expect(intern.getRole()).toBe("Intern");
})

test("Can get school", () => {
    const intern = new Intern("Name", "ID", "Email", "School");
    expect(intern.getSchool()).toBe("School");
});