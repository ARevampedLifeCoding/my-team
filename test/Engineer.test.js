const Engineer = require("../lib/Engineer");

test("confirms that the github username is accepted", () => {
  const github = "githubname";
  const engineer = new Engineer("Test", 2, "blank@gmail.com", github);
  expect(engineer.github).toBe(github);
});
