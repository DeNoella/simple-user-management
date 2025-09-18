(() => {
    type User = {
        id: number;
        fullname: string;
        email: string;
        phoneNumber: string;
        age: number;
        physicalAddress: string;
    }

    const users: User[] = [
        {
            id: 101,
            fullname: "Noella",
            email: "noella@gmail.com",
            phoneNumber: "+250780456623",
            age: 30,
            physicalAddress: "Kigali"
        },
        {
            id: 102,
            fullname: "Ange",
            email: "mutesideno@gmail.com",
            phoneNumber: "+250789456723",
            age: 29,
            physicalAddress: "Los Angeles"
        },
        {
            id: 103,
            fullname: "Mutesi",
            email: "mutesi@gmail.com",
            phoneNumber: "+250788032765",
            age: 27,
            physicalAddress: "Zanzibar"
        },
        {
            id: 104,
            fullname: "Agape",
            email: "agape@gmail.com",
            phoneNumber: "+250781254890",
            age: 25,
            physicalAddress: "Nairobi"
        },
        {
            id: 105,
            fullname: "Grace",
            email: "Grace@gmail.com",
            phoneNumber: "+250782784503",
            age: 20,
            physicalAddress: "Dubai"
        }
    ];

    function myProfile(userId: number): User | undefined {
        return users.find(user => user.id === userId);
    }

    function lessAge(ageLimit: number): User | undefined {
        return users.find(user => user.age < ageLimit);
    }

    function getUsers(): User[] {
        return users;
    }

    const user = myProfile(103);
    console.log(user);
    console.log("===============");
    const youngUser = lessAge(27);
    console.log(youngUser);
    console.log("===============");
    const allUsers = getUsers();
    console.log(allUsers);
})();