// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
   var finalStr = '';	

   	if (obj == null){
   		return finalStr = 'null'
   	}
   	
   	if (obj == undefined){
   		return finalStr
   	}

    if(typeof(obj) == 'object'){
        if(Array.isArray(obj)){
          var type = 'array'
        }
        else{
          var type = 'object'
        }
    }

    if(type == 'array'){
    	finalStr = []
    	for(var i =0; i<obj.length; i++){	

    		//if(typeof(obj[i])=='object' || typeof(obj[i]) == 'string'){
    			finalStr.push(stringifyJSON(obj[i]))
    			//finalStr+=(stringifyJSON(obj[i]))
    		//}

    		//else{
    		//	finalStr.push(obj[i])
    			//finalStr+=(obj[i]);
    	//	}
    			//finalStr+=','
		}

		//finalStr = finalStr.slice(0, finalStr.length-1)
		return "[" + finalStr.join(',') + ']'
	}

	if (type == 'object'){
		//if(Object.keys(obj).length==0){
		 //return 'null'
		//}
		
		//else{
			finalStr = "{"

			for(var key in obj){

				if (typeof(obj[key])=='function' || key=="undefined" || key==null){
					finalStr
				}

				else{
					finalStr+= stringifyJSON(key)+ ":"  + stringifyJSON(obj[key]) + ",";
				}
			}

				if(finalStr[finalStr.length-1]===','){
					finalStr = finalStr.slice(0, finalStr.length-1)
				}
			return finalStr+="}"
		//}
	}

	else{
		if (typeof(obj) == 'string'){
			return finalStr+= '\"' + obj +'\"'
		}
		else{
			return finalStr+= obj
		}
	}
};
