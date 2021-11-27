a={
	"type": "*",
	"left": {
	  "type": "%",
	  "left": {
		"type": "number",
		"value": 12
	  },
	  "right": {
		"type": "number",
		"value": 7
	  }
	},
	"right": {
	  "type": "+",
	  "left": {
		"type": "number",
		"value": 3
	  },
	  "right": {
		"type": "number",
		"value": 2
	  }
	}
  }

b={
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



c={
	"type": "+",
	"left": {
	  "type": "number",
	  "value": 3
	},
	"right": {
	  "type": "number",
	  "value": 2
	}
  }

// hoursPerDay=24;
// minutesPerHour=20;
// minutesPerHour=19-minutesPerHour;
// return minutesPerHour*hoursPerDay;

d={
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
  
e={
      "type": "assign",
      "name": "minutesPerHour",
      "value": {
        "type": "number",
        "value": 60
      }
    }
  
f={
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
  
  
g={
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
  
  
  h={
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
  
  
i={
      "type":"funcdecl",
      "name":"test",
      "body":{
          "type": "compare",
          "left": {
            "type": "number",
            "value": 24
        },
          "right": {
            "type": "number",
            "value": 24
        }
      },
      "callsite":{
          "type":"funccall",
          "name":"test"
      }  
  }