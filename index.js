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
    mark:97,
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
    let total = 0;
    list.forEach((student) => {
        total += student.mark;
    })

    return average = total/list.length;
}
console.log("Average mark is "+calculateAverage(students)+"%");

function findTopStudent(list) {
    // Find and return the student with the highest mark

    let highest = 0;
    let name = "";
    list.forEach((student) => {
        if(highest < student.mark){
            highest=student.mark;
            name = student.name;

        }
    })


    return name+" has the highest mark with "+highest+"%";
}
console.log(findTopStudent(students));

function findPassedStudents(list) {
    // Return students who have a mark of 50 or higher
    let passed =[];
    list.forEach((student) =>{
        if(student.mark > 50){
            passed.push(student.name);
        }
    })


    return passed;
}

console.log(findPassedStudents(students))

