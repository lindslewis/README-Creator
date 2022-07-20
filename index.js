// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const renderBadge = {};
const licenseLink = {};
const section = {};





// const license = (responses.license);

// const generateMarkdown = require('./utils/generateMarkdown');
// console.log(`generateMarkdown: ${generateMarkdown.renderLicenseBadge(license)}`)

// README template below:
const generateREADME = (responses) =>
`# ${responses.title}

${renderBadge.text}

## Description
${responses.description}

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Contribution Guidelines](#Contribution-Guidelines)
4. [Testing](#Testing)
5. [Licensing](#Licensing)
6. [Credits](#Credits)
7. [Questions](#Questions)

## Installation
${responses.install}
    
## Usage
${responses.usage}
    
## Contribution Guidelines
${responses.guidelines}
    
## Testing
${responses.test}
    
## Licensing
I have elected to use ${responses.license}.

${section.message}
    
## Credits
${responses.credits}

## Questions
If you have any further questions or comments, please feel free to reach out via my Github Account: [${responses.github}](https://github.com/${responses.github}).
You can also reach me via [email](${responses.email}). 
`

// inquirer for prompts for userinputs.
inquirer.prompt([
    {
        message: 'What is the title of your project?',
        type: 'input',
        name: 'title',
    },
    {
        message: "Please give a brief description of your project.",
        type: 'input',
        name: 'description',
    },
    {
        message: "Please describe the steps for installation for your intended users.",
        type: 'input',
        name: 'install',
    },
    {
        message: "Please give a concise description on the intended usage of your project.",
        type: 'input',
        name: 'usage',
    },
    {
        message: "Please describe what the guidelines are for those who may wish to contribute to your project.",
        type: 'input',
        name: 'guidelines',
    },
    {
        message: "Please describe the steps necessary in order to test your project.",
        type: 'input',
        name: 'test',
    },
    {
        message: "Please list any resources you may have used or referred to.",
        type: 'input',
        name: 'credits',
    },
    {
        message: "Which license would you like to use? Use the up and down arrows to scroll through the options, press the spacebar to select one.",
        type: 'checkbox',
        name: 'license',
        choices: ["Apache License 2.0", "MIT", "General Public License (GPL)", "Mozilla Public License 2.0 (MPL)", "none"],
    },
    {
        message: "What is your Github username?",
        type: 'input',
        name: 'github',
    },
    {
        message: "What is your email address?",
        type: 'input',
        name: 'email',
    },
    {
        message: "What year is this being published?",
        type: 'input',
        name: 'year',
    },
    {
        message: "What is your name?",
        type: 'input',
        name: 'name',
    }

    // below is my understanding for taking those responses and making a file from it??
]).then((responses)=>{
        // console.log(responses);
        inputResponse(responses);
        // let data = generateREADME(responses)
    });

    const inputResponse = (responses) => {
        console.log(responses);
        badge(responses);
        link(responses);
        licenseSection(responses);
        let data = generateREADME(responses);
        fs.writeFile(`./output/${responses.title}README.md`, data,
    (err)=>  err ? console.log(err) : console.log('Yay! You made a README!'))
    }
        // const data = generateREADME(responses);
    //     fs.writeFile(`./output/${responses.title}README.md`, data,
    // (err)=>  err ? console.log(err) : console.log('Yay! You made a README!'));

    const badge = (responses) => {
        // function badge(license) {
            if(responses.license === "Apache License 2.0") {
                renderBadge.text = '![Apache](https://img.shields.io/badge/license-Apache%202.0-blue)'
            //   return '![Apache](https://img.shields.io/badge/license-Apache%202.0-blue)';
            } if(responses.license === "MIT") {
                renderBadge.text =  '![MIT](https://img.shields.io/badge/license-MIT-blue)'
            //   return '![MIT](https://img.shields.io/badge/license-MIT-blue)';
            } if (responses.license === "General Public License (GPL)") {
                renderBadge.text = '![GPL](https://img.shields.io/badge/license-GPL-blue)'
            //   return '![GPL](https://img.shields.io/badge/license-GPL-blue)'
            } if (responses.license === "Mozilla Public License 2.0 (MPL)") {
                renderBadge.text = '![MPL](https://img.shields.io/badge/license-MPL%202.0-blue)'
            //   return '![MPL](https://img.shields.io/badge/license-MPL%202.0-blue)'
            } if (responses.license === "none") {
              renderBadge.text = '';
            } else {
             renderBadge.text = '';
            }
        }
    const link = (responses) => {
        // function link(license) {
        if(responses.license === "Apache License 2.0") {
            licenseLink.message ='![Apache License 2.0](https://opensource.org/licenses/Apache-2.0)'
            // return '![Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
        } if (responses.license === "MIT") {
            licenseLink.message = '![MIT](https://opensource.org/licenses/MIT)';
        } if (responses.license === "General Public License (GPL)") {
            licenseLink.message = '![General Public License](https://opensource.org/licenses/gpl-license)'
        } if (responses.license === "Mozilla Public License 2.0 (MPL)") {
            licenseLink.message = '![Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)'
        } if (responses.license === "none") {
            licenseLink.message = ' '
        } else {
            licenseLink.message = ' '
        }
    }
    const licenseSection = (responses) => {
        
            if (responses.license === "Apache License 2.0"){
              section.message = `Copyright ${responses.year} ${responses.name}
          
              Licensed under the Apache License, Version 2.0 (the "License");
              you may not use this file except in compliance with the License.
              You may obtain a copy of the License at
           
                http://www.apache.org/licenses/LICENSE-2.0
           
              Unless required by applicable law or agreed to in writing, software
              distributed under the License is distributed on an "AS IS" BASIS,
              WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
              See the License for the specific language governing permissions and
              limitations under the License.`;
            } if (responses.license === "MIT") {
                section.message = `Copyright (c) ${responses.year} ${responses.name}
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the "Software"), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
              
              The above copyright notice and this permission notice shall be included in all
              copies or substantial portions of the Software.
              
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              SOFTWARE.`;
            } if (responses.license === "General Public License (GPL)") {
                section.message = `
              Copyright (C) ${responses.year} ${responses.name}
              
              This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.
              
              This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
              
              You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA`
            } if (responses.license === "Mozilla Public License 2.0 (MPL)") {
                section.message = `This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.`
            } if (responses.license === "none") {
                section.message = ' '
            } else {
                section.message =' '
            }
          }

