//// Increment By 10

var number = 5;
for (var i = 5; i < 120; i += 10) {
	console.log(i);
}

// Decrement by division

var numDiv = 4096
for (var i = 4096; i > 1; i /= 2) {
	console.log(i);
}

//learning
// Presidents 
var prez = [
"George Washington", 
"John Adams", 
"Thomas Jefferson", 
"James Madison", 
"James Monroe",
"John Quincy Adams", 
"Andrew Jackson", 
"Martin Van Buren", 
"William Henry Harrison", 
"John Tyler", "James Knox Polk", 
"Zachary Taylor", 
"Franklin Pierce", 
"James BuchananÆ", 
"Abraham Lincoln", 
"Andrew Johnson", 
"Ulysses S. Grant", 
"Rutherford Birchard Hayes", 
"James Abram Garfield", 
"Chester Alan Arthur", 
"Grover Cleveland", 
"Benjamin Harrison", 
"Grover Cleveland", 
"William McKinley", 
"Theodore Roosevelt", 
"William Howard Taft", 
"Woodrow Wilson", 
"Warren Gamaliel Harding", 
"Calvin Coolidge", 
"Herbert Clark Hoover", 
"Franklin Delano Roosevelt", 
"Harry S. Truman", 
"Dwight David Eisenhower", 
"John Fitzgerald Kennedy", 
"Lyndon Baines Johnson", 
"Richard Milhous Nixon", 
"Gerald Rudolph Ford", 
"James Earl Carter, Jr.", 
"Ronald Wilson Reagan", 
"George Herbert Walker Bush", 
"William Jefferson Clinton",
"Barack Hussein Obama", "The Donald"];

for (var i = 0; i < prez.length; i++) {
  console.log("President #" + [i] + " was " + prez[i]);
}

// object iteration

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
  }

  for (var prop in antSpecies) {
    console.log(prop);
  }
//good work





















