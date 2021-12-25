function display(n)
    {
        for (let i = 0; i < n; i++)
    {
        for (let j = 0; j <= Math.floor(n / 2); j++)
    {
        if (
        ((j === 0 || j === Math.floor(n / 2)) && i !== 0) ||
        (i === 0 && j !== 0 && j !== Math.floor(n / 2)) ||
        i === Math.floor(n / 2)
        ) {
        document.write("*");
    } else document.write("   ");
    }
        document.write("<br>");
    }
    }
    // Driver Function
    display(7);









