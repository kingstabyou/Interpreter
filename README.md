# Interpreter

Lexer written from scratch which is capable of interpreting instructions such as first order function calls.
Parses, executes custom language instructions in an in-order depth first traversal manner of parse tree.
Lexical-scoping based execution environments incorporated for performing binary operations.


Example of a language instruction :-
```
(12%7)*(3+2)

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
```

More of the same examples found [here](https://github.com/kingstabyou/Interpreter/blob/master/programs.js)
