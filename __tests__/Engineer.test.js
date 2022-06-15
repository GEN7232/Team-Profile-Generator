const Engineer = require("../lib/Engineer");

test("Can set GitHub", () => {
    const engineer = new Engineer("Name", "ID", "Email", "GitHub");
    expect(engineer.gitHub()).toBe("GitHub");
  });

test("Can get GitHub", () => {
    const engineer = new Engineer("Name", "ID", "Email", "GitHub");
    expect(engineer.getGitHub()).toBe("GitHub");
  });

test("Can get role", () => {
    const engineer = new Engineer("Name", "ID", "Email");
    expect(engineer.getRole()).toBe("Engineer");
  });