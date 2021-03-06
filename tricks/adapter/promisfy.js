/*Converts an asynchronous function to return a promise.

Use currying to return a function returning a Promise that calls the original function. Use the ...rest operator to pass in all the parameters.*/

const promisfy = func => (...args) =>
    new Promise((resolve, reject) => {
        func(...args, (err, result) => (err ? reject(err) : resolve(result)))
    })

const delay = promisfy((d, cb) => setTimeout(cb, d))
delay(2000).then(() => console.log('Hi!'))
