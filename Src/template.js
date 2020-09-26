const generateManager = manager => {
    return `
    <div class="card mr-3" style="width: 18rem;">
        <div class="card-header">
            <p id="employeeRole">${manager.getRole()}</p>
            <p id="employeeName">${manager.getName()}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" id="employeeId"><p>ID Number</p>${manager.getId()}</li>
            <li class="list-group-item">
                <a href="mailto:${manager.getEmail()}">Email Address</a>
            </li>
        <li class="list-group-item" id="employeeAdditionalInfo"><p>Office Number</p>${manager.getOfficeNumber()}</li>
        </ul>
    </div>
    `;
};

const generateEngineers = emplArr => {
    return `
        ${emplArr.map((engineer) => {
        return `
            <div class="card m-3" style="width: 18rem;">
                <div class="card-header">
                    <p id="employeeRole">${engineer.getRole()}</p>
                    <p id="employeeName">${engineer.getName()}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="employeeId"><p>ID Number</p>${engineer.getId()}</li>
                    <li class="list-group-item">
                        <a href="mailto:${engineer.getEmail()}"">Email Address</a> 
                        </li>
                    <li class="list-group-item" id="employeeAdditionalInfo">
                        <a href="${engineer.getGithub()}" target="_blank">Github</a>
                    </li>
                </ul>
            </div>
        `;
    }
    ).join('')
        }`;
}

const generateInterns = emplArr => {
    return `
        ${emplArr.map((intern) => {
        return `
            <div class="card m-3" style="width: 18rem;">
                <div class="card-header">
                    <p id="employeeRole">${intern.getRole()}</p>
                    <p id="employeeName">${intern.getName()}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="employeeId"><p>ID Number</p>${intern.getId()}</li>
                    <li class="list-group-item">
                        <a href="mailto:${intern.getEmail()}">Email Address</a>
                    </li>
                <li class="list-group-item" id="employeeAdditionalInfo"><p>School Name</p>${intern.getSchool()}</li>
                </ul>
            </div>
        `;
    }
    ).join('')
        }`;
}

module.exports = theTeam => {
    console.log(theTeam);

    //this will create the variables based on the data in the theTeam object
    const { manager, engineers, interns } = theTeam;
    return `

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>

    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body>
    <header>
        <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">Development Team Profile</h1>
            <nav class="flex-row">
            </nav>
        </div>
    </header>
    <section class="my-3" id="about">
        <h3 class="text-dark bg-primary p-4 display-inline-block">Contact Details for the Team</h2>
    </section>  
    <div class="container">
      <div class="row">    
        ${generateManager(manager)}
        ${generateEngineers(engineers)}
        ${generateInterns(interns)}
      </div>
    <footer class="container text-center py-3">
        <h6 class="text-dark">&copy;2020 by Queen Inc.</h6>
    </footer>
</body>
</html>
`;
};