const printModule = require('./printConsole-module.js');
//Module should get stats from links parsed

module.exports = (objectLinks, option) => {

    const arrayObjectLinks = objectLinks;
    // Stringify object 
    const arrayObjectLinkString = new Set(arrayObjectLinks.map( obj =>JSON.stringify(obj)));
    // Array Without Duplicate
    const arrayWithoutDuplicate = Array.from(arrayObjectLinkString).map(obj =>JSON.parse(obj));
    
    const arrayReturn = {
        total: arrayObjectLinks,
        unique:arrayWithoutDuplicate
    };
    printModule(arrayReturn, option);
  
};