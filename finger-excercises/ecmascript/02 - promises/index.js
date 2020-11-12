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