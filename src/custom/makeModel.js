const fs = require('fs')

let models = []

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

process.argv.forEach(function (val, index, array) {
    if(index > 1){
        models.push(val)
    }
});

if(models.length > 0){
    fs.readFile('./src/custom/templateModel.txt', 'utf8', (err, template) => {
        for(let model of models){
            let temp = template.replace(/{namespace}/g, model.capitalize()).replace(/{database}/g, model);
            fs.writeFile('src/app/resources/models/' + model + '.ts', temp, (err) => {
                console.log('src/app/resources/models/' + model + '.ts Model saved')
            })
        }
    })
}