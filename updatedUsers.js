(function () {
    var users = [
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
    function myProfile(userId) {
        return users.find(function (user) { return user.id === userId; });
    }
    function lessAge(ageLimit) {
        return users.find(function (user) { return user.age < ageLimit; });
    }
    function getUsers() {
        return users;
    }
    var user = myProfile(103);
    console.log(user);
    console.log("===============");
    var youngUser = lessAge(27);
    console.log(youngUser);
    console.log("===============");
    var allUsers = getUsers();
    console.log(allUsers);
})();
