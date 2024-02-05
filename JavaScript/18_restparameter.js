// ... rest parameter / spread operator


let person = {
    name: "Skill",
    age: 25,
    email: "skill@test.in",
  };
  
  // let data = person;
  let data = { ...person };
  
  person.salary = 1500;
  
  data.hobbies = ["music", "dancing"];
  console.log(person);
  console.log(data);