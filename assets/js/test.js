let user = new Object();
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

/* --- */

function isEmpty(obj) {
    let result = true
    for (key in obj) {
        if (key) result = false
    }
    return result
}

let schedule = {};

// alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


/* --- */

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;

for (let person in salaries) {
    sum += salaries[person];
}

// alert(sum);

/* --- */

function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'number') obj[prop] *= 2;
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu)

/* --- */

let user = {
    name: "Иван",
    age: 37,

    [Symbol.toPrimitive](hint) {
        return hint == 'string' ? `${this.name}, ${this.age} лет` : this.age;
    }
}

let money = {
    value: 100,

    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'string':
                return `${this.value}$`;
            case 'number':
                return this.value;
            case 'default':
                return this.value + '$';
        }
    }
}