// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  	//determine what the parameter is
  	var type = typeof(obj);
  	var finalStr = '';

  	//base case
  	//returns final str

  	//recursive case
  	//makes whatever a string, probably cannot use .toString()
  	
  
  	
 
  	
  	//simple single cases first
  	
  	if (type == 'number'){
  		finalStr+= obj;
  	};
  	
  	if (type == 'string'){ 
  		finalStr+= "\"" + obj + "\""};
  	
  	if (type == 'boolean'){
  		finalStr += obj};
  		
  	//if (type == 'symbol'){
  		//do nothing
  	//};
  	
  	//if (type == 'undefined'){
  		//do nothing
  	//};
  	
  	// more complicated case
  	if (type == 'object'){
  		type = (Array.isArray(obj) ? 'array' : 'object')
  	} 
  	
  	if (type == 'array'){
  	//add in the array brackets
  	finalStr += "[";
  	//iterate through the array
  		for(var i=0; i<obj.length; i++){
  			//call the method on each element of the array
  			finalStr += stringifyJSON(obj[i]);	
  		}
  	// add in the array bracket end
  		finalStr += "]"
  	};
  	
  	if (type == 'object'){
  	// add in objects opening curly bracket
  	finalStr+= "{"
  		for(var key in object){
  			//run JSON stringify on key
  			finalStr+=stringifyJSON(key)
  			finalStr+= ":"
  			finalStr+=stringifyJSON(object[key])
  			finalStr+=","
  		}
  			finalStr.slice(0, finalStr.length -1)
  			finalStr+="}"
  	};

  	//return str at end of process

  	return finalStr;
};
