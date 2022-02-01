const first = (store) => (next) => (action) => {
    // Our middleware
    console.log("---IN THE MIDDLEWARE---")
    console.log(`Redux Log:`, action)
    // call the next function
    next(action);
}

export {
    first,
}