const { Employee } = require("./Employee");
class SalesPerson extends Employee{
    #totalSales
    constructor(name, position, salary, clients = [], totalSales = 0){
        super(name, position, salary,)
        this.clients = clients
        this.#totalSales = totalSales
    }
    getSalesNumber(){
        return this.#totalSales
    }
    makeSale(amount){
        this.#totalSales += amount
    }
}

module.exports = {
    SalesPerson,
}