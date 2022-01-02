// console.log("window", window)
// console.log("window.location", window.location) //read-only property returns a Location
// console.log("window.location.search", window.location.search) //return an object
//
//
// const urlSearchParamsObj = new URLSearchParams(window.location.search);
//
// let results = document.getElementById("results");
//
// for (const [key, value] of urlSearchParamsObj.entries()) {
//     let paragraph = document.createElement("p");
//     paragraph.textContent = `${key}: ${value}`;
//     results.appendChild(paragraph)
// }


let marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}
//Convert this JS object into a JSON object. What happens to the nested objects ?
let jsonMarioGame = JSON.stringify(marioGame);

alert(typeof jsonMarioGame); // string

//Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.

let jsonMarioGame = JSON.stringify(marioGame, null, 2);
alert(jsonMarioGame);

// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.







