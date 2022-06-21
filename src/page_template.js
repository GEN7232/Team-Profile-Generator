function createManagerCard (manager) {
  return `
  <div class="card border border-primary border-3 ">
    <div class="card-body">
      <h2 class="card-title bg-info">
        Manager: ${manager.getName()}
      </h2>
      <p class="card-text">ID: ${manager.getId()}</p>
      <a href="mailto:${manager.getEmail()}">
        <p class="card-text">Email: ${manager.getEmail()}</p>
      </a>
      <p class="card-text">Office Number: ${manager.getOfficeNumber()}
    </div>
  </div>
  `
};

function createEngineerCard (engineer) {
  return `
  <div class="card border border-primary border-3">
    <div class="card-body">
      <h2 class="card-title bg-info">
        Engineer: ${engineer.getName()}
      </h2>
      <p class="card-text">ID: ${engineer.getId()}</p>
      <a href="mailto:${engineer.getEmail()}">
        <p class="card-text">Email: ${engineer.getEmail()}</p>
      </a>
      <p class="card-text">GitHub Username: ${engineer.getGitHub()}
    </div>
  </div>
  `
};

function createInternCard (intern) {
  return `
  <div class="card border border-primary border-3">
    <div class="card-body">
      <h2 class="card-title bg-info">
        Intern: ${intern.getName()}
      </h2>
      <p class="card-text">ID: ${intern.getId()}</p>
      <a href="mailto:${intern.getEmail()}">
        <p class="card-text">Email: ${intern.getEmail()}</p>
      </a>
      <p class="card-text">School ${intern.getSchool()}
    </div>
  </div>
  `
};

function insertTeam (team) {const HTML = [];
  HTML.push(team.filter(employee => employee.getRole() === "Manager").map(manager => createManagerCard(manager)).join(""));
  HTML.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => createEngineerCard(engineer)).join(""));
  HTML.push(team.filter(employee => employee.getRole() === "Intern").map(intern => createInternCard(intern)).join(""));
  return HTML.join("");
};

module.exports = function buildPage(team){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>
<body>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Team Members</h1>
    <main class="container d-flex justify-content-around">
    ${insertTeam(team)}
    </main>
  </div>
</div> 
</body>
</html>
    `
}