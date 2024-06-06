#! /user/bin/env node

import inquirer from "inquirer";

class Student {
    name:string
    constructor(n:string) {
        this.name = n
    }
}

class Person{
    students:Student[]=[]

    addStudent(obj:Student) {
        this.students.push(obj)
    }
}

const persons = new Person()

const programmStart = async (persons: Person) => {
    do{console.log("welcome guest");

    const ans = await inquirer.prompt({
        type:"list",
        name:"select",
        message:"Who would you like to talk to?",
        choices:["YourSelf", "Student"]

    });

    if(ans.select == "YourSelf"){
        console.log("Hi, I'm talking to myself");
        console.log("I'm fine");
    }
    if(ans.select == "Student") {
        const ans = await inquirer.prompt({
            type:"input",
            message:"Who do you have to talk to?",
            name:"student",
        });

        const student = persons.students.find(val => val.name == ans.student );

        if(!student){
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(`Hellow, I am ${name.name}, I'm good`);
            console.log(persons.students);
            
            
        }
        if(student){
            console.log(`Hellow, I am ${student.name}, I'm good..............`);
            console.log(persons.students);
        }
    }
    }while(true)
}

programmStart(persons);