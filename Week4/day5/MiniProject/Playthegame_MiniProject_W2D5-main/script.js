let robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image:'https://robohash.org/10?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image:'https://robohash.org/9?200x200'
    }
];

let parent = document.getElementById("robot")

function addRobots(robots) {
    for (let i = 0; i < robots.length; i++) {
        let name = robots[i].name
        let img = robots[i].image
        let mail = robots[i].email
        let newDiv = document.createElement("div")
        let image = document.createElement("img")
        newDiv.classList.add("image")
        newDiv.classList.add("robot")
        newDiv.setAttribute("id", name)
        image.setAttribute("src", img)
        let text = document.createElement("p")
        let title = document.createTextNode(name)
        let mailTitle = document.createTextNode(mail)
        text.setAttribute("id", `${name}`)
        text.appendChild(title)
        text.appendChild(mailTitle)
        newDiv.appendChild(image)
        newDiv.appendChild(text)
        parent.appendChild(newDiv)
    }
}




addRobots(robots);

function myFunction() {
    let input, inputApper;
    input = document.getElementById("myInput");
    inputApper = input.value.toUpperCase();
    console.log(inputApper);
    let newRobotsArray = robots.filter(function (robot) {
        if(robot.name.toUpperCase().startsWith(inputApper)){
            return robot;
        }
    });
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.lastChild);
    }
    addRobots(newRobotsArray);
}

