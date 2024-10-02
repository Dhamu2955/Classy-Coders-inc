const { Employee } = require("./Employee");
class SoftwareEngineer extends Employee {
    #programmingLanguages
    constructor(name, position, salary, programmingLanguages = []){
        super(name, position, salary,)
        this.#programmingLanguages = programmingLanguages
    }
    getProgrammingLanguages(){
        return this.#programmingLanguages
    }
    setProgrammingLanguages(language){
        this.#programmingLanguages.push(language)
    }
}

module.exports = {
    SoftwareEngineer,
}