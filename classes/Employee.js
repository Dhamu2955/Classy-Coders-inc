class Employee {
    static #allEmployees = []
    #salary
    #isHired
    constructor(name, position, salary, isHired = true){
        this.name = name
        this.position = position
        this.#salary = salary
        this.#isHired = isHired
        Employee.#allEmployees.push(this);
    }
    getSalary() {
        return this.#salary
    }
    setSalary(amount) {
        this.#salary = amount
    }
    getStatus(){
        return this.#isHired
    }
    setStatus(command){
        if(command === "hire") {
            this.#isHired = true
        }
        else if(command === "fire"){
            this.#isHired = false
        }
    }
    static getEmployees(){
        return Employee.#allEmployees
    }
    static getTotalPayroll(){
        let x = 0
        for (let i = 0; i < Employee.#allEmployees.length; i++){
            x += Employee.#allEmployees[i].getSalary();
        } return x
    }

}

// const preston = new Employee("Preston", "Engineer", 100000);
// console.log(preston.getSalary()); // 100000
// console.log(preston.setSalary(105000));
// console.log(preston.getSalary()); // 105000
// console.log(preston.getStatus()); // true;
// console.log(preston.setStatus("fire"));
// console.log(preston.getStatus()); // false;

module.exports = {
    Employee,
}
