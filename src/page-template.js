module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/css/style.css">
        
    </head>
    <body>
        <section class="bg-danger">
        <div class="hero-body">
        <h1 class="title is-center">
            My Team
        </h1>
        </div>
        </section>
        
        <section class="section">
        <div class="container">
                <div>
                    ${createProfile(team)}
                </div>
        </div>
    
        </section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};

const createProfile = (team) => {
  const createManager = (manager) => {
    return `
        <section class="section">
        <div class="container">
        <div class="card">
            <div class="card-title">
                <h2 class="card-subtitle">${manager.getName()}</h2>
                <h4 class="card-subtitle">Title: ${manager.getPosition()}</h4>
            </div>
            <div class="card-content">
                <ul>
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: <a href="tel:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
                </ul>
            </div>
        </div>
        </div>
        </section>
        `;
  };

  const createEngineer = (engineer) => {
    return `
        <section class="section">
        <div class="container">
        <div class="card">
            <div class="card-title">
                <h2 class="">${engineer.getName()}</h2>
                <h4 class="card-subtitle">Title: ${engineer.getPosition()}</h4>
            </div>
            <div class="card-content">
                <ul class="list-group text-dark">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        </div>
        </section>
        `;
  };

  const createIntern = (intern) => {
    return `
        <section class="section">
        <div class="container">
        <div class="card">
            <div class="card-title">
                <h2 class="card-subtitle">${intern.getName()}</h2>
                <h4 class="card-subtitle">Title: ${intern.getPosition()}</h4>
            </div>
            <div>
                <ul>
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        </div>
        </section>
        `;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getPosition() === "Manager")
      .map((manager) => createManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getPosition() === "Engineer")
      .map((engineer) => createEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getPosition() === "Intern")
      .map((intern) => createIntern(intern))
      .join("")
  );

  return html.join("");
};
