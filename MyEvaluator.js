var result = function (parsedTree) {
    return Evaluator(parsedTree);
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
// function functemplate(parsedTree) {
//     return Evaluator(parsedTree)
// }

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
        // variables[parsedTree.name] = new Function(
        //     "",
        //     "return Evaluator("+JSON.stringify(parsedTree.body)+")"
        // );
        // variables[parsedTree.name]= functemplate(parsedTree.body)
        variables[parsedTree.name]= function(...args){
            return Evaluator(parsedTree.body)
        }
        return Evaluator(parsedTree.callsite);
    } 
    
    else if (parsedTree.type == "funccall") {
        console.log(typeof variables[parsedTree.name])
        return variables[parsedTree.name].apply(null,[]);
    }
}
