import { User } from "./Types/types";
import { users } from "./Models/models";

function myProfile(): User | undefined {
    const id = 103;
    return users.find(user => user.id === id);
}

function lessAge(): User | undefined {
    const ageLimit = 27;
    return users.find(user => user.age < ageLimit);
}

function getUsers(): User[] {
    return users;
}

const user = myProfile();
console.log(user);
console.log("===============");
const youngUser = lessAge();
console.log(youngUser);
console.log("===============");
const allUsers = getUsers();
console.log(allUsers);