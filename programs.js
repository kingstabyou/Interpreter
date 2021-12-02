// (12%7)*(3+2)
a = {
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

// a=4;
// b=a+1

type= assign
name=a
value=4
scope


b = {
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



c = {
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

d = {
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
            "name": "minutesPerHour",
            "value": {
                "type": "number",
                "value": 20
            },
            "body": {
                "type": "-",
                "left": {
                    "type": "number",
                    "value": 19
                },
                "right": {
                    "type": "identifier",
                    "value": "minutesPerHour"
                }
            }
        },
        "right": {
            "type": "identifier",
            "value": "hoursPerDay"
        }
    }
}

e = {
    "type": "assign",
    "name": "minutesPerHour",
    "value": {
        "type": "number",
        "value": 60
    }
}

f = {
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


g = {
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


h = {
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
            "name": "minutesPerHour",
            "value": {
                "type": "number",
                "value": 20
            },
            "body": {
                "type": "if",
                "condition": {
                    "type": "compare",
                    "left": {
                        "type": "identifier",
                        "value": "hoursPerDay"
                    },
                    "right": {
                        "type": "identifier",
                        "value": "minutesPerHour"
                    }
                },
                "iftrue": {
                    "type": "number",
                    "value": 1
                },
                "elsefalse": {
                    "type": "assign",
                    "name": "hoursPerDay",
                    "value": {
                        "type": "identifier",
                        "value": "minutesPerHour"
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

//   "params":{
//     "type": "assign",
//     "name":"hoursPerDay",
//     "value":{
//         "type":"number",
//         "value":0
//     }		
//   },

i = {
    "type": "funcdecl",
    "name": "test",
    "params": ["hoursPerDay", "minutesPerHour"],
    "body": {
        "type": "if",
        "condition": {
            "type": "compare",
            "left": {
                "type": "identifier",
                "value": "hoursPerDay"
            },
            "right": {
                "type": "identifier",
                "value": "minutesPerHour"
            }
        },
        "iftrue": {
            "type": "number",
            "value": 1
        },
        "elsefalse": {
            "type": "assign",
            "name": "hoursPerDay",
            "value": {
                "type": "identifier",
                "value": "minutesPerHour"
            }
        }
    },
    "callsite": {
        "type": "funccall",
        "params":[],
        "name": "test"
    }
}

z={
    "type": "funcdecl",
    "name": "test",
    "body": {
        "type": "if",
        "condition": {
            "type": "compare",
            "left": {
                "type": "number",
                "value": 0
            },
            "right": {
                "type": "number",
                "value": 1
            }
        },
        "iftrue": {
            "type": "number",
            "value": 1
        },
        "elsefalse": {
            "type": "number",
            "value": 0
        }
    },
    "callsite": {
        "type": "funccall",
        "name": "test"
    }
}

// [
//     {
//         "type": "assign",
//         "name": "minutesPerHour",
//         "value": {
//             "type": "number",
//             "value": 20

//     },
//     {
//         "type": "assign",
//         "name": "hoursPerDay",
//         "value": {
//             "type": "number",
//             "value": 20

//     }]


j = {
    x: function name(params) {
        return Evaluator()
    }
}

k = {
    x: {

    }
}

j[parsedTree.name](...arr)

k={
    "type": "assign",
    "name": "divident",
    "value": {
        "type": "number",
        "value": 474
    },
    "body":{
        "type": "assign",
        "name": "divisor",
        "value": {
            "type": "number",
            "value": 2
        },
        "body":{
        "type": "if",
        "condition": {
            "type": "compare",
            "left": {
                "type": "identifier",
                "value": "divisor"
            },
            "right": {
                "type": "number",
                "value": 0
            }
        },
        "iftrue": {
            "type": "number",
            "value": 0
        },
        "elsefalse": {
            "type": "/",
            "left": {
                "type": "identifier",
                "value": "divident"
            },
            "right":{
                "type": "identifier",
                "value": "divisor"    
            }
        }
        }   
    }
}


2+3*4
