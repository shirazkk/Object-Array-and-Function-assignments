// // Assignment 1: Building Your Friend List
// // Learning Objective: Practice working with objects and arrays in TypeScript to create a data
// // structure.
// // Task: Create a program that manages a simple friend list.
// // 1. Define an object named people containing an empty array called friends.
// // 2. Create three separate objects, each representing a friend, with properties like firstName,
// // lastName, and optionally id.
// // 3. Add these friend objects to the friends array within the people object.
// // 4. Output the entire people object to the console, displaying your information and your
// // friend list.
var students = [
    {
        name: "Shiraz Ali",
        isSenior: true,
        completeTheirAssignments: true
    },
    {
        name: "Sahil Murad",
        isSenior: true,
        completeTheirAssignments: false
    },
    {
        name: "Danish Usman",
        isSenior: false,
        completeTheirAssignments: true
    },
    {
        name: "Arslan",
        isSenior: true,
        completeTheirAssignments: true
    },
    {
        name: "Hamid",
        isSenior: true,
        completeTheirAssignments: false
    },
    {
        name: "Salman Khan",
        isSenior: true,
        completeTheirAssignments: true
    },
    {
        name: "Owais Sattar",
        isSenior: false,
        completeTheirAssignments: false
    },
    {
        name: "Sarmad Murad",
        isSenior: false,
        completeTheirAssignments: true
    },
    {
        name: "Mehran",
        isSenior: true,
        completeTheirAssignments: false
    }
];
function findSeniorStudentsWithAssignment(Students) {
    return Students.filter(function (student) {
        return student.isSenior && student.completeTheirAssignments;
    });
}
;
var senior_Students_with_completed_their_assignments = (findSeniorStudentsWithAssignment(students));
// console.log(senior_Students_with_completed_their_assignments);
function updateClassList(Students) {
    return Students.filter(function (student) {
        return !student.isSenior || student.completeTheirAssignments;
    });
}
;
var remove_seniors_who_not_complete_assignments = (updateClassList(students));
console.log(remove_seniors_who_not_complete_assignments);
