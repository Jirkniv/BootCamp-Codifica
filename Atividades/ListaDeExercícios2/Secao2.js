function fatorial(n){
    if(n == 0){
        return 1
    }else{
        return n * fatorial(n - 1)
    }
}
console.log(fatorial(2))

function debounce(fn, delay) {
  let timeoutId = null;
  
  return function(...args) {
   
    clearTimeout(timeoutId);
    
    
    timeoutId = setTimeout(() => {
      fn.apply(this, args); 
    }, delay);
  };
}


function minhaFuncao() {
  console.log('Executada!');
}


const minhaFuncaoDebounced = debounce(minhaFuncao, 500);

minhaFuncaoDebounced();
minhaFuncaoDebounced(); 
minhaFuncaoDebounced();


function memoize(fn) {
  const cache = new Map();
  
  return function memoized(...args) {

    const key = JSON.stringify(args);
    

    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = fn(...args);
    
    cache.set(key, result);
    return result;
  };
}

const memoizedFactorial = memoize(fatorial);

console.log(memoizedFactorial(7)); 
console.log(memoizedFactorial(6)); 