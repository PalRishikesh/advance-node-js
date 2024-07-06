function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(data);

    return job(true);
})

.then(function(data) {
    if (data !== 'victory') {
        throw 'Defeat';
    }

    return job(true);
})

.then(function(data) {
    console.log("data 30: ",data);
})

.catch(function(error) {
    console.log("error 34: ",error);

    return job(false);
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log("error 46: ",error);

    return 'Error caught';
})

.then(function(data) {
    console.log("data 52: ",data);

    return new Error('test');
})

.then(function(data) {
    console.log('Success:', data.message);
})

.catch(function(data) {
    console.log('Error:', data.message);
});


// success
// error 34:  Defeat
// error 46:  error
// data 52:  Error caught
// Success: test
