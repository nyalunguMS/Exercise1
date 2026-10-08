let students = [{
    name:"Mancoba",
    age:26,
    mark:90,
    course:"JS"
},{
    name:"coba",
    age:22,
    mark:70,
    course:"JS"
},{
    name:"Man",
    age:21,
    mark:97,
    course:"JS"
},{
    name:"anco",
    age:26,
    mark:87,
    course:"JS"
},{
    name:"Maba",
    age:20,
    mark:67,
    course:"JS"
}];

function displayStudents(list) {
    // Display every student's name and mark
    for (student of list){
        console.log(student.name +" got "+student.mark+"%");
    }
}

displayStudents(students);


function calculateAverage(list) {
    // Calculate and return the average mark
    total = 0;
    for (student of list){
        total+=student.mark;
    }
    return average = total/list.length;
}
console.log("Average mark is "+calculateAverage(students)+"%");

function findTopStudent(list) {
    // Find and return the student with the highest mark

    highest = 0;
    for (let i = 0; i < list.length; i++){
        if(list[i].mark > highest){
            highest = list[i].mark;
            name = list[i].name;
        }
    }
    return name+" has the highest mark with "+highest+"%";
}
console.log(findTopStudent(students));

function findPassedStudents(list) {
    // Return students who have a mark of 50 or higher
    passed =[];
    for (student of list){
        if(student.mark > 50){
            passed.push(student.name);
        }
    }
    return passed;
}

console.log(findPassedStudents(students))

