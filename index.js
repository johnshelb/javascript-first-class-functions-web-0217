function receivesAFunction(callback){
  return callback()
}


function returnsANamedFunction(){
  return function x(){}
}

function returnsAnAnonymousFunction(){
  return ()=>{}
}
