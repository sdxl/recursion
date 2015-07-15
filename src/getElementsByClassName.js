// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
	var finalArr = [];
	// starting point is document.body
	var start = document.body
	


	function nodeFinder(startNode){
		//does the node itself have the class we want?
		if(startNode.classList!=undefined && startNode.classList.length > 0){
			for(var i=0; i<startNode.classList.length; i++){
				if(startNode.classList[i]==className){
					finalArr.push(startNode)
				}
			}
		}


		//does the node have children?
		// if so go through the children 
		if (startNode.children!=undefined && startNode.children.length>0){
			for(var i = 0; i<startNode.children.length; i++){
					nodeFinder(startNode.children[i]);
			}
		}

		else{
			return
		}

	}
	nodeFinder(start)
	return finalArr
};
