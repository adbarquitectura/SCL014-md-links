const fetch = require('node-fetch');
const printModule = require('./printConsole-module.js');
const statsModule = require('./validateStats-module.js');

//Module should validate links from md file read
module.exports = (arrayMdContent, option) => {
    const arrayObjectLinksContent = []

    const arrayLinks = arrayMdContent;
    const validateObj = arrayLinks.map(obj => {
        return fetch(obj.href)
            .then(resp => {
                return {
                    href: resp.url,
                    status: resp.status,
                    statusText: resp.statusText,
                    text: obj.text,
                    file: obj.file
                };
            });
    })
    Promise.all(validateObj).then(resp => {
        statsModule(resp, option);        
        //return resp;

    }).catch(reason => {
        console.log(reason)
    });

};