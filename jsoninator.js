const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  const arr =[]; 
  const objects =[];
  let text ;
  if (typeof obj === 'number' || typeof obj == 'boolean' || obj === null){
    return ''+obj+'';

  } else if (typeof obj === 'string'){
    return '"'+obj+'"';

  } else if (obj.constructor === Array ){
    if(obj.length === 0){
      return '[]';

    } else {
       _.each(obj, item => {
          arr.push(stringify(item));
      });
      return '['+arr+']';
    };

  } else if (typeof obj=== 'object'){
    if(Object.keys(obj).length === 0){
      return '{}';

    } else {
       let allKeys = Object.keys(obj);
      _.each(allKeys, key => {
        if(typeof obj[key] === undefined){ 
          objects.push('');

        } else if(typeof obj[key] === 'string'){
            objects.push('"'+key+'"'+':"'+obj[key]+'"');

          } else if (typeof obj[key] === 'number' || typeof obj[key] == 'boolean' || obj[key] === null){
            objects.push('"'+key+'"'+':"'+obj[key]+'"');
            
          } else if (typeof obj[key]=== 'object'){
            objects.push('"'+key +'":'+ stringify(obj[key]));
          }
      });
      return '{'+objects+'}';
    }
  }
   
};

module.exports = {
  stringify: stringify
};