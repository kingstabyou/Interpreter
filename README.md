# Interpreter

Lexer written from scratch which is capable of interpreting instructions such as first order function calls.
Parses, executes custom language instructions in an in-order depth first traversal manner of parse tree.
Lexical-scoping based execution environments incorporated for performing binary operations.

Host repo on a LiveServer and access [index.html](https://github.com/kingstabyou/Interpreter/blob/master/index.html) through any specified browser. 
On the below rendered page add the ParseTree program to be interpreted

![interpreter](https://user-images.githubusercontent.com/71552236/184052125-f68b58bd-af74-484b-b572-123f5b744c3c.jpg)


Example of a language instruction :-
```
(12%7)*(3+2)

{
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
