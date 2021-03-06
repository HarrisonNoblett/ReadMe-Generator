// function to generate markdown for README
function generateMarkdown(response) {
  return `
  # Title: ${response.Title}

  ## Discription: 
  * ${response.Discription}

  ## Table of Contents: 
  * [Title](#Title)
  * [Discription](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  * [Github](#Github)
  * [Email](#Email)

  ## Installation: 
  * ${response.Installation}

  ## Usage:
  * ${response.Usage}

  ## License: 
  * ${response.License}

  ## Contributing: 
  * ${response.Contributing}

  ## Tests: 
  * ${response.Tests}

  ## Questions: 
  * ${response.Questions}
  
  ## Github: 
  * ${response.Github}

  ## Email: 
  * ${response.Email}

  `;
}

module.exports = generateMarkdown;
