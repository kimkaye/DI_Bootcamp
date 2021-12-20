function valueOfInputs(){
    let arrLibs = ["noun", "adjective", "person", "verb", "place"];
    let arrValue = [];
    for(let i = 0; i < arrLibs.length; i++){
        arrValue[i] = document.getElementById(arrLibs[i]).value;
        if(arrValue[i] === "" || arrValue[i] === undefined){
            alert("the field "+arrLibs[i]+" is empty");
            return;
        }
    }
    console.log(arrValue);
    let story = document.getElementById('story');
    let textNode = document.createTextNode("a "+ arrValue[0] + " from " + arrValue[4] + " name " + arrValue[2] + " always " + arrValue[3] + " in a " + arrValue[1] + " way");
    story.appendChild(textNode);
}



