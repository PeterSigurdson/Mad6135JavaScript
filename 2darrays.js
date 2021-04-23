// app.js

let data = [
  ['Millie', 15],
  ['Finn', 17],
  ['Dustin', 17]
];

console.table(data);


let data = [
  ['Millie', 15],
  ['Finn', 17],
  ['Dustin', 17]
];

console.log('The age of Millie is:', data[0][1]);


More complex data structures:

let matrix = [
    [0,0, 'electronics'],
    [0,1, 'household'],
    [0,2, 'cleaning supplies'],
    
    [1,0, 'dry food'],
    [1,1, 'kitchen items'], 
    [1,2, 'school supplies'],

    [2,0, 'tools'],
    [2,1, 'automotive'],
    [2,2, 'machine parts'],
];

var answer;  

for (var i = 0; i<=2; i++){
    for (var j = 0; j<=2; j++){
        answer = matrix[i,j][2];
        console.log(i, j, answer)
    }
} 
  
