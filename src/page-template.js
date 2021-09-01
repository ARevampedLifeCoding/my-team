module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="./assets/css/style.css">
        
    </head>
    <body>
        <section class="hero is-danger">
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
            <div class="card-header">
                <h2 class="card-header-title">${manager.getName()}</h2>
                <h4 class="card-header-title">Title: ${manager.getPosition()}</h4>
            </div>
            <div class="card-content">
                <ul class="">
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
            <div class="card-header">
                <h2 class="">${engineer.getName()}</h2>
                <h4 class="card-header-title">Title: ${engineer.getPosition()}</h4>
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
            <div class="card-header">
                <h2 class="card-header-title">${intern.getName()}</h2>
                <h4 class="card-header-title">Title: ${intern.getPosition()}</h4>
            </div>
            <div class="">
                <ul class="">
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
