// // // // // // // const student = {
// // // // // // //     name: "Ali",
// // // // // // //     age: 20,
// // // // // // //     university: "TUIT"
// // // // // // // };

// // // // // // // const key = "university";

// // // // // // // console.log(student[key]);

// // // // // // const user = {
// // // // // //     firstName: "Foziljon",
// // // // // //     lastName: "Azimov",
// // // // // //     age: 22,
// // // // // //     city: "Tashkent"
// // // // // // };

// // // // // // const keys = ["firstName", "city", "phone", "age"];

// // // // // // let result = "";

// // // // // // for (let key of keys) {
// // // // // //     if (user[key] !== undefined) {
// // // // // //         result += user[key] + " ";
// // // // // //     }
// // // // // // }

// // // // // // console.log(result.trim());

// // // // // const person = {
// // // // //     name: "Ali",
// // // // //     age: 20
// // // // // };

// // // // // const person2 = person;

// // // // // person2.age = 25;

// // // // // console.log(person);
// // // // // console.log(person2);

// // // // const employee = {
// // // //     name: "John",
// // // //     age: 30
// // // // };

// // // // const employee2 = employee;

// // // // employee2.country = "Uzbekistan";
// // // // employee2.age = 35;

// // // // delete employee2.name;

// // // // console.log(employee);
// // // // console.log(employee2);


// // // // const user = {
// // // //     name: "Ali",
// // // //     age: 21
// // // // };

// // // // const copy = Object.assign({}, user);

// // // // copy.age = 25;
// // // // copy.city = "Tashkent";

// // // // console.log(user);
// // // // console.log(copy);


// // // const user = {
// // //     name: "Ali",
// // //     age: 20
// // // };

// // // const update = {
// // //     age: 22,
// // //     city: "Tashkent"
// // // };

// // // const result = Object.assign({}, user, update);

// // // console.log(result);


// // const user = {
// //     name: "Ali",
// //     address: {
// //         city: "Tashkent",
// //         zip: 100000
// //     }
// // };

// // const copy = structuredClone(user);

// // copy.address.city = "Samarqand";
// // copy.address.zip = 140100;

// // console.log(user);
// // console.log(copy);


// const developer = {
//     name: "Ali",
//     company: {
//         title: "Google",
//         salary: 2000
//     },
//     skills: ["HTML", "CSS", "JavaScript"]
// };

// const copy = structuredClone(developer);

// copy.company.title = "Microsoft";
// copy.company.salary *= 2;
// copy.company.experience = "5 years";

// copy.skills.push("Node.js");

// console.log(developer);
// console.log(copy);


