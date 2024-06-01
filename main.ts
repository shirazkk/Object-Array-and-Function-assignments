// Assignment 1: Building Your Friend List
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data
// structure.
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your
// friend list.

//..................................................................................................................

type Friends = {
  firstName: string;
  lastName: string;
  id: number;
};
type People = {
  myFriends: Friends[];
};
let People: People = {
  myFriends: [],
};

let Friend1: Friends = {
  firstName: "Umair",
  lastName: "Hassan",
  id: 5,
};
let Friend2: Friends = {
  firstName: "Taimoor",
  lastName: "Alam",
  id: 3,
};
let Friend3: Friends = {
  firstName: "Hamza",
  lastName: "Subhan",
  id: 120,
};

People.myFriends.push(Friend1, Friend2, Friend3);
console.log(People);

// -----------------------------------------------------------------------------------------------------------------

// Assignment 2:Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC"
//..................................................................................................................

const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];

scrambledArray.pop(); //last element will be removed
scrambledArray.unshift("I"); //"I" will be added as as first element
scrambledArray.splice(5, 2); // "am" and "a" will be removed
scrambledArray.splice(1, 0, "am", "a"); // now they will be added as 1 and 2 element
scrambledArray.splice(5, 2); //true and 123 will be removed

const result = scrambledArray.join(" "); //in final we use join method to convert full array in single string.
console.log(result); //output is: I am a student of GIAIC

//------------------------------------------------------------------------------------------------------------------

// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.
// .................................................................................................................

type Products = {
  name: string;
  model: number;
  cost: number;
  quantity: number;
};

type inventory = {
  carInventory: Products[];
};
//1.Define an array named inventory to store product information.
let Inventory: inventory = {
  carInventory: [], //array to store product data
};

//2.Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
let product1: Products = {
  name: "Civic",
  model: 2023,
  cost: 10000000,
  quantity: 20,
};
let product2: Products = {
  name: "MarkX",
  model: 2017,
  cost: 6000000,
  quantity: 10,
};
let product3: Products = {
  name: "Revo",
  model: 2024,
  cost: 12000000,
  quantity: 6,
};
//3.Add these product objects to the inventory array using an appropriate array method.
Inventory.carInventory.push(product1, product2, product3); //push product 1,2,3 in carinventory array.

//4.Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
let thirdProduct = Inventory.carInventory[2].quantity; //access product3 quantitity
console.log(thirdProduct);

//5.Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.
let product4: Products = {
  name: "Mehran",
  model: 2018,
  cost: 1200000,
  quantity: 12,
};
Inventory.carInventory.push(product4);


//..................................................................................................................

//Assignment 4: Student List Organizer
// Learning Objective: Get comfortable with data structures (objects and arrays) and basic 
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes 
// student information like name, senior status (true/false), and whether they've completed 
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the 
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors 
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have 
// a function that removes students who haven't completed their assignments 
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)
// 
//------------------------------------------------------------------------------------------------------------------

interface student{
  name:string,
  isSenior:boolean,
  completeTheirAssignments:boolean
}

const students:student[]=[
  {
    name:"Shiraz Ali",
    isSenior:true,
    completeTheirAssignments:true
  },
  {
    name:"Sahil Murad",
    isSenior:true,
    completeTheirAssignments:false
  },
  {
    name:"Danish Usman",
    isSenior:false,
    completeTheirAssignments:true
  },
  {
    name:"Arslan",
    isSenior:true,
    completeTheirAssignments:true
  },
  {
    name:"Hamid",
    isSenior:true,
    completeTheirAssignments:false
  },
  {
    name:"Salman Khan",
    isSenior:true,
    completeTheirAssignments:true
  },
  {
    name:"Owais Sattar",
    isSenior:false,
    completeTheirAssignments:false
  },
  {
    name:"Sarmad Murad",
    isSenior:false,
    completeTheirAssignments:true
  },
  {
    name:"Mehran",
    isSenior:true,
    completeTheirAssignments:false
  }
];

function findSeniorStudentsWithAssignment(Students:student[]){
  return Students.filter(student=>
    student.isSenior&&student.completeTheirAssignments
  )
};
//print those students which are seniors=true and which complete their assignments.
//in simple words it print those students where both condition are true mean issenior=true and hascompletedassignments=true
const senior_Students_with_completed_their_assignments=(findSeniorStudentsWithAssignment(students))
console.log(senior_Students_with_completed_their_assignments);

function updateClassList(Students:student[]){
  return Students.filter(student=>
    !student.isSenior||student.completeTheirAssignments 
  )
};
//this will remove those students which are seniors=true and not complete assignments =false 
//print those students which are not senior but complete their assignments and those also which are seniors but also complete assignment 
const remove_seniors_who_not_complete_assignments=(updateClassList(students))
console.log(remove_seniors_who_not_complete_assignments);
