function renderLicense(Lisence) {
    if (Lisence !== 'None') {
        return `* [License](#license)`;
    }
    return ''; 
}


function generateMarkdown(data) {
    return `# ${data.Title}
    https://github.com/${data.Username}/${data.Title}
    
    ## Description
    ${data.Description}



    ## Table of Contents
    * [User Story](#User)
    * [Installation](#Installation)
    * [Test](#Testing)
    * [Contributors](#contributors)
    * [License](#license)


    ## User Story
    ${data.User}
    ## Installation
    \`\`\`
    ${data.Installation}
    \`\`\`
    ## Tests
    \`\`\`
    ${data.Testing}
    \`\`\`
    ## Licensing
    ${renderLicense(data.License)}
    
    ## Contributors
    ${data.Contributors}

    `;
  }
  
  module.exports = generateMarkdown;