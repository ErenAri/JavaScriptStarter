import DataError from "../models/dataError.js"
import User from "../models/user.js"

export default class UserService{
    constructor(loggerService){
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load(){
        for (const iterator of User) {
                switch (user.type) {
                    case "customer":
                        if (!this.checkCustomerValidityForErrors(user)) {
                            this.customers.push(user)
                        }
                        
                        break;
                    case "employee":
                        if (!this.checkEmployeeValidityForErrors(user)) {
                            this.employees.push(user)
                        }
                        break;

                    default:
                        this.errors.push(new DataError("Wrong user type",user))
                        break;
                }      
        }
    }

    //formik-yup(kütüphane öneri)
    checkCustomerValidityForErrors(user){
        let requiredFields = "id firstname lastname age city".split(" ")
        let hasErrors = false
        for (const iterator of requiredFields) {
            if(!user[field]){
                hasErrors = true;
                this.errors.push(
                    new DataError(`Validation problem. ${field} is required`,user))
            }
        }
        if(Number.isNaN(Number.parseFloat(user.age))){
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`,user))
        }

        return hasErrors
    }

    checkEmployeeValidityForErrors(user){
        let requiredFields = "id firstname lastname age city salary".split(" ")
        let hasErrors = false
        for (const iterator of requiredFields) {
            if(!user[field]){
                hasErrors = true;
                this.errors.push(new DataError(`Validation problem. ${field} is required`,user))
            }
        }
        return hasErrors
    }

    add(user){
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user)
                }
                break;
            default:
                this.errors.push(new DataError("Wrong user type", user))
                break;
        }
        this.loggerService.log(user)
    }

    listCustomers(){
        return customers.users
    }

    getCustomerById(id){
        return this.customers.find(u=>u.id ===id)
    }

    getCustomerSorted(){
        return this.customers.sort((customer1, customer2)=>{
            if(customer1.firstName<customer2.firstName){
                return 1;
            }else if(customer1.firstName===customer2.firstName){
                return 0;
            }else{
                return 1; 
            }
        })
    }
}