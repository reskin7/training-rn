import { isArray } from './utils';

export function min(...params) {
  if (params.length>0) {
    if (isArray(params[0])) {
      return Math.min(...params[0]);
    } else {
      return Math.min(...params);
    }
  } else {
    return undefined;
    }   
}

export function copy(params) {
  if(isArray(params)){
return [...params];
  }else{
return {...params};
  }
}

export function reverseMerge(a,b) {
  return [...b,...a];
}

export function filterAttribs(params) {
  const {a, b, ...rest} = params;
  return rest;
}