let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum)



let menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
    obj[key] *= 2;
    }
  }
    return obj;
  };
  
  console.log(multiplyNumeric(menu));

