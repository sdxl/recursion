// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
   var finalStr = '';	

   	if (obj == null){
   		return 'null'
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
    	finalStr = '['
    	for(var i =0; i<obj.length; i++){	

    		if(typeof(obj[i])=='object' || typeof(obj[i]) == 'string'){
    			finalStr+=(stringifyJSON(obj[i]))
    		}

    		else{
    			finalStr+=(obj[i]);
    		}
    			finalStr+=','
		}

		finalStr = finalStr.slice(0, finalStr.length-1)
		return finalStr+ ']'
	}

	if (type == 'object'){
		if(Object.keys(obj).length==0){
			finalStr=null
		}
		
		else{
			finalStr = "{"

			for(var key in obj){

				if (typeof(obj[key]) == 'object'){
					finalStr+=(stringifyJSON(obj[key]))
				}

				else{
					finalStr+= (key+ ":" + obj[key] + ", ");
				}
			}
			return finalStr+="}"
		}
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
