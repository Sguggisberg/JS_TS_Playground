// https://www.w3schools.com/Js/js_promise.asp

function myDisplayer(some) {
    console.log('Hey ' + some);
}

// @ts-ignore
let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function(value) {myDisplayer(value)},
    function(error) {myDisplayer(error);}
);

// *****************************************************************************
// *****************************************************************************
// *****************************************************************************

// @ts-ignore
let myPromise2 = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise2.then(function(value) {
    console.log('Bye! ' + value);
});
