// Hint: use setInterval, create a new Promise and measure time with Date.now()

/*export function delay(t) {
    let delayedTime = new Promise (function (resolve, reject){
        resolve(t);
    })
    return delayedTime;
}*/


export function delay(time) { 
    const start=Date.now();
    let dt = new Promise (function (resolve, reject){
        if(time<=1000){
        setInterval(()=>resolve(Date.now()-start), time);
    }else{
        reject(Error('This time is too much !'));
    }
    })
    return dt;
}

 export function asyncDelay(time) {
    const start=Date.now();
    let dt = new Promise (function (resolve, reject){
        if(time<=1000){
        setInterval(()=>resolve(Date.now()-start), time);
    }else{
        reject(Error('This time is too much !'));
    }
    })
    return dt;
 };
