// function getTempCallBack(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }
//
// getTempCallBack('Philadelphia', function(err, temp){
//     if(err){
//         console.log('error', err)
//     } else {
//         console.log('success', temp)
//     }
// });
//
// function getTempPromise (location) {
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve(79);
//             reject('City not found')
//         }, 1000);
//     });
// }
//
//
// getTempPromise('Erwin').then(function(temp){
//     console.log('promise success', temp);
// }, function(err){
//     console.log('promise err', err);
// });

//challenge area

function addPromise(a, b){
    console.log(typeof a);
    console.log(typeof b);
    return new Promise(function(resolve, reject){

       if(typeof a === 'number' && typeof b === 'number')
           resolve(a + b);
       else
           reject('a or b is not a number');
    });
}

addPromise(1,2).then(function(answer){
    console.log(answer);
}, function(err){
    console.log(err);
});

addPromise(1,'s').then(function(answer){
    console.log(answer);
}, function(err){
    console.log(err);
});