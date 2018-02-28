
// PROBLEM 1 - Classes - Vec()

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y
  }

  plus(vec2) {
    return new Vec(this.x + vec2.x, this.y + vec2.y);
  }

  minus(vec2) {
    return new Vec(this.x - vec2.x, this.y - vec2.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);

// Function Calls - DO NOT ALTER
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5


/**************************************************/

// PROBLEM 2 - Groups
class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.members.includes(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add (value);
    }
    return group;
  }
}
}

// Function Calls - DO NOT ALTER
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false


/**************************************************/

//This was the hardest problem for me. I'm hoping this is somewhat correct. I had my friend who went to coding school help me\\
class MultiplicatorUnitFailure extends Error{}


function primitiveMultiply(a, b){
  if (Math.random() < 0.2)

    return a * b;

  else
    throw
        new MultiplicatorUnitFailure("Klunk");
}

function reliableMultiply(a, b) {
  for (; ;) {
    try {
      return primitiveMultiply(a,b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e;
    }
  }


console.log(reliableMultiply(8, 8));


//As a side, I was messing around and came up with a potential other way? Not sure if this would actually work.  Just leaving it here for fun//

class MultiplicatorUnitFailure extends Error {}


function primitiveMultiply(a, b) {
  if (Math.random() < 0.2)
    return a * b;
  else
    throw new MultiplicatorUnitFailure("Klunk");
}

function reliableMultiply(a, b) {
  if(primitiveMultiply(a, b) === MultiplicatorUnitFailure())
      return primitiveMultiply(a,b);
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e;
    }
}

console.log(reliableMultiply(8, 8));
