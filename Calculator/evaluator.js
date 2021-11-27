var evaluate = function (parseTree) {

	var operators = {
		"+": function (a, b) { return a + b; },
		"-": function (a, b) {
			if (typeof b === "undefined") return -a;
			return a - b;
		},
		"*": function (a, b) { return a * b; },
		"/": function (a, b) { return a / b; },
		"%": function (a, b) { return a % b; },
		"^": function (a, b) { return Math.pow(a, b); }
	};

	var variables = {
		pi: Math.PI,
		e: Math.E
	};

	var functions = {
		sin: Math.sin,
		cos: Math.cos,
		tan: Math.cos,
		asin: Math.asin,
		acos: Math.acos,
		atan: Math.atan,
		abs: Math.abs,
		round: Math.round,
		ceil: Math.ceil,
		floor: Math.floor,
		log: Math.log,
		exp: Math.exp,
		sqrt: Math.sqrt,
		max: Math.max,
		min: Math.min,
		random: Math.random
	};
	var args = {
	};

	var parseNode = function (node) {
		if (node.type === "number") return node.value;
		else if (operators[node.type]) {
			if (node.left) return operators[node.type](parseNode(node.left), parseNode(node.right));
			return operators[node.type](parseNode(node.right));
		}
		else if (node.type === "identifier") {
			var value = args.hasOwnProperty(node.value) ? args[node.value] : variables[node.value];
			if (typeof value === "undefined") throw node.value + " is undefined";
			return value;
		}
		else if (node.type === "assign") {
			variables[node.name] = parseNode(node.value);
		}
		else if (node.type === "call") {
			for (var i = 0; i < node.args.length; i++) node.args[i] = parseNode(node.args[i]);
			return functions[node.name].apply(null, node.args);
		}
		else if (node.type === "function") {
			functions[node.name] = function () {
				for (var i = 0; i < node.args.length; i++) {
					args[node.args[i].value] = arguments[i];
				}
				var ret = parseNode(node.value);
				args = {};
				return ret;
			};
		}
	};

	var output = "";
	for (var i = 0; i < parseTree.length; i++) {
		var value = parseNode(parseTree[i]);
		if (typeof value !== "undefined") output += value + "\n";
	}
	return output;
};



// o={
// 	"type": "*",
// 	"left": {
// 	  "type": "%",
// 	  "left": {
// 		"type": "number",
// 		"value": 12
// 	  },
// 	  "right": {
// 		"type": "number",
// 		"value": 7
// 	  }
// 	},
// 	"right": {
// 	  "type": "+",
// 	  "left": {
// 		"type": "number",
// 		"value": 3
// 	  },
// 	  "right": {
// 		"type": "number",
// 		"value": 2
// 	  }
// 	}
//   }

// p={
// 	"type": "assign",
// 	"name": "minutesPerDay",
// 	"value": {
// 	  "type": "*",
// 	  "left": {
// 		"type": "identifier",
// 		"value": "minutesPerHour"
// 	  },
// 	  "right": {
// 		"type": "identifier",
// 		"value": "hoursPerDay"
// 	  }
// 	}
//   }



//   {
// 	"type": "+",
// 	"left": {
// 	  "type": "number",
// 	  "value": 3
// 	},
// 	"right": {
// 	  "type": "number",
// 	  "value": 2
// 	}
//   }

// hoursPerDay=24;
// minutesPerHour=20;
// minutesPerHour=19-minutesPerHour;
// return minutesPerHour*hoursPerDay;

a={
  "type": "assign",
  "name": "hoursPerDay",
  "value": {
    "type": "number",
    "value": 24
  },
  "body": {
	"type": "*",
	"left": {
	  "type": "assign",
	  "name":"minutesPerHour",
	  "value":{
		  "type":"number",
		  "value":20
	  },
	  "body":{
		  "type":"-",
		  "left":{
			  "type":"number",
			  "value":19
		  },
		  "right":{
			  "type":"identifier",
			  "value":"minutesPerHour"
		  }
	  }
	},
	"right": {
	  "type": "identifier",
	  "value": "hoursPerDay"
	}
	}
}

b={
	"type": "assign",
	"name": "minutesPerHour",
	"value": {
	  "type": "number",
	  "value": 60
	}
  }

c={
	"type": "assign",
	"name": "minutesPerDay",
	"value": {
	  "type": "*",
	  "left": {
		"type": "identifier",
		"value": "minutesPerHour"
	  },
	  "right": {
		"type": "identifier",
		"value": "hoursPerDay"
	  }
	}
  }


  d={
	"type": "compare",
	"left": {
	  "type": "number",
	  "value": 24
  },
	"right": {
	  "type": "number",
	  "value": 24
  }  
}


e={
	"type": "assign",
	"name": "hoursPerDay",
	"value": {
	  "type": "number",
	  "value": 24
	},
	"body": {
	  "type": "*",
	  "left": {
		"type": "assign",
		"name":"minutesPerHour",
		"value":{
			"type":"number",
			"value":20
		},
		"body":{
			"type":"if",
			"condition":{
				"type":"compare",
				"left":{
					"type": "identifier",
					"value": "hoursPerDay"
				},
				"right":{
					"type": "identifier",
					"value": "minutesPerHour"
				}
			},
			"iftrue":{
				"type":"number",
				"value":1
			},
			"elsefalse":{
				"type": "assign",
				"name":"hoursPerDay",
				"value":{
					"type":"identifier",
					"value":"minutesPerHour"
				}		
			}
		}
	  },
	  "right": {
		"type": "identifier",
		"value": "hoursPerDay"
	  }
	  }
  }