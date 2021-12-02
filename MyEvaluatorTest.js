var result = function (parsedTree) {
    return Evaluator(parsedTree);
    // return evalfunc[parsedTree.type](parsedTree);
};

var binOpEval = {
    "+": function (left, right) {
        return left + right;
    },
    "-": function (left, right) {
        return left - right;
    },
    "*": function (left, right) {
        return left * right;
    },
    "/": function (left, right) {
        return left / right;
    },
};

let variables = {};
let funcdecl = {};

let evalfunc = {
    "number": function(parsedTree){ return parsedTree.value; },
    "+": function (parsedTree) { return evalfunc[parsedTree.left] + evalfunc[parsedTree.right]; },
    "-": function (parsedTree) { return evalfunc[parsedTree.left] - evalfunc[parsedTree.right]; },
    "*": function (parsedTree) { return evalfunc[parsedTree.left] * evalfunc[parsedTree.right]; },
    "/": function (parsedTree) { return evalfunc[parsedTree.left] / evalfunc[parsedTree.right]; },
};


function Evaluator(parsedTree) {
    
    if (parsedTree.type == "number") return parsedTree.value;

    else if (binOpEval[parsedTree.type])
        return binOpEval[parsedTree.type](
            Evaluator(parsedTree.left),
            Evaluator(parsedTree.right)
        );

    else if (parsedTree.type == "assign") {
        variables[parsedTree.name] = Evaluator(parsedTree.value);
        if (parsedTree.body) return Evaluator(parsedTree.body);
        else return variables[parsedTree.name];
    } 

    else if (parsedTree.type == "identifier")
        return variables[parsedTree.value];

    else if (parsedTree.type == "compare")
        return Evaluator(parsedTree.left) == Evaluator(parsedTree.right);

    else if (parsedTree.type == "if")
        return Evaluator(parsedTree.condition)
            ? Evaluator(parsedTree.iftrue)
            : Evaluator(parsedTree.elsefalse);

    else if (parsedTree.type == "funcdecl") {
        funcdecl[parsedTree.name] = new Function("temp","return Evaluator(parsedTree.body)");
        return Evaluator(parsedTree.callsite);
    } 
    
    else if (parsedTree.type == "funccall") {
        return funcdecl[parsedTree.name]() ;
    }
}


