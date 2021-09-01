const Intern = require("../lib/Intern");

test("confirms that school name is accepted", () => {
  const school = "University";
  const intern = new Intern("Test", 3, "blank@gmail.com", school);
  expect(intern.school).toBe(school);
});
