// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//MIT license allows people to do almost anything with your project,Babel, .Net core, Rails will be good options to give
function renderLicenseBadge(license) {
  if (license === 'None'){
    return '';
  }

  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None'){
    return '';
  }

  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
    return '';
  }

  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  

`;
}

module.exports = generateMarkdown;
