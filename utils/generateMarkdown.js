const moment = require('moment');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'None'){
    return '';
  }

  else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  }

  else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }

  else if (license === 'IBM') {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None'){
    return '';
  }
  else if (license === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`
  }
  else if (license === 'Apache') {
    return `(https://opensource.org/licenses/Apache-2.0)`
  }

  else if (license === 'IBM') {
    return `(https://opensource.org/licenses/IPL-1.0)`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
    return '';
  } else if (license === 'IBM') {
    return `The IPL is the open-source license IBM uses for some of its software. 
    Supposed to facilitate commercial use of said software; is very clear on the specifics of liability. 
    Also grants explicit patent rights.`
  } else if (license === 'Apache') {
    return `Copyright ${moment().year()} 
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  } else if (license === 'MIT') {
    return `Copyright ${moment().year()} 
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Description
  ${data.projectDescription}

  ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [Creator](#creator)
    * [Questions](#questions)
  
## Installation
  ${data.installationInstructions}
  
## Usage
  ${data.howTo}
  
## Creator
  ${data.who}
  
## Questions
Got a question? Please don't hesitate to contact me! 
Github:
  <a href='https://github.com/${data.github}'>${data.github}</a><br>
E-mail:
  <a href='mailto:${data.email}'>${data.email}</a>`;
};

module.exports = generateMarkdown;
