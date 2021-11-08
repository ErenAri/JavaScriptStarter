import { BaseLogger } from "../crossCutingConcerns/logging/logger.js";
import UserService from "../services/userService.js"

console.log("User component loaded")


let logger1 = new BaseLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Eren", "arı","kayseri");
let user2 = new User(2,"Engin", "demiroğ","ankara");
userService.add(user1);
userService.add(user2)

console.log(userService.getById(1))
console.log(userService.list())
