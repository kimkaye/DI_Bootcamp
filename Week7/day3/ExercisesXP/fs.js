let fs = require('fs');
fs.readFile('text.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.error(data.toString());
});

fs.writeFile('kim.txt','Hello World!', function (err, data){
    if (err) {
        console.error(err)
    }else{
        console.log('Write operation complete.');
    }
});

fs.appendFile('kim.txt', 'append text', function (err, data) {
    if (err) {
        console.error(err)
    }else{
        console.log('append operation complete.');
    }
});

fs.readFile('kim.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.error(data.toString());
});

fs.unlink('kim.txt', function (err) {
    console.log('delete operation complete.');
});



console.log("-----Right Left---------", '\n',);


