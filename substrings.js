const input = "As I was going to Saint Ives";
input.startsWith("As")        // true
input.endsWith("Ives")        // true
input.startsWith("going", 9)  // true -- start at index 9
input.endsWith("going", 14)   // true -- treat index 14 as the end of the string
input.includes("going")       // true
input.includes("going", 10)   // false -- starting at index 10
input.indexOf("going")        // 9
input.indexOf("going", 10)    // -1
input.indexOf("nope")         // -1
