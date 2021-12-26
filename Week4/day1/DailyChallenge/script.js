// Daily Challenge : Go Wildcats

const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];

gameInfo.forEach((elem, index, arr) =>
    arr[index] = elem.username + "!"
)
console.log(gameInfo);

let newArr =[];
gameInfo.forEach((elem, index, arr) => elem.score >= 5 ?  newArr.push(elem.username) + "!" : false)
console.log(newArr);

let totalScore = 0;
gameInfo.forEach((elem, index, arr) =>
    totalScore += elem.score
)
console.log(totalScore);










