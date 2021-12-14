// Write a JavaScript program that recreates the pattern below.
//     Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).

let answer = "";
for(let i = 0; i<6; i++){
    answer += '*';
    console.log(answer);
}


let answer = "";
for (let i=0; i<6; i++)
{
    for(let j = 0; j < i; j++) {
      answer += "*";
    }
    answer += "\n";
}
console.log(answer);
