const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const developers = data.filter(person => person.profession === "developer");
  developers.forEach(developer => {
    console.log(`Name: ${developer.name}, Age: ${developer.age}, Profession: ${developer.profession}`);
  });
}

// 2. Add Data
function addData() {
   const name = prompt("Enter Name");
   const age = parseInt(prompt("Enter Your Age"));
   const profession = prompt("Enter Your Profession");
   const newData = {name,age,profession} ;
   data.push(newData);
   console.log(data)
}

// 3. Remove Admins
function removeAdmin() {
  // const admins = data.pop();
  
  // console.log(admins)
  //  or 
  const nonAdmins = data.filter(person => person.profession !== "admin");
   console.log(nonAdmins)
  
  data.length = 0; 
  data.push(nonAdmins);
  console.log(data);
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { name: "Rohit", age: 23, profession: "Shopify Developer" },
    { name: "bob", age: 22, profession: "engineer" },
  ];
 const newArray = data.concat(dummyArray);

 console.log(newArray);

}

// 5. Average Age
function averageAge() {
  let ageSum = null;
  data.forEach(sum =>{
    ageSum +=  sum.age;
  })
  const avrage = ageSum / data.length;
  console.log(avrage)
}

// 6. Age Check
function checkAgeAbove25() {
   let flag = false;
  const isAbove25 = data.forEach(person => {
    if(person.age > 25){
      flag = true;
    }
  });
  console.log(flag);
}

// 7. Unique Professions
function uniqueProfessions() {
  let allProfession = [];
  data.forEach(person => {
    allProfession.push(person.profession);
  })
  console.log(allProfession);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a,b) => {
     return a.age - b.age;
  })
  console.log(data)
  
}

// 9. Update Profession
function updateJohnsProfession() {
  const update = data.map(person=>{
    if( person.name == "john") return {...person,profession:"manager"}
  return person
  });
  console.log(update)
}

// 10. Profession Count
function getTotalProfessions() {
  let admin = 0;
  let developer = 0;
  data.forEach(person => {
    if(person.profession == "admin"){
      admin++;
    }else if(person.profession == "developer"){
      developer++;
    }
  })
  console.log(`Admin : ${admin}, Developer : ${developer}`)
}
