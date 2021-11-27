var result = function(parsedTree){
    return Evaluator(parsedTree);
}

function Evaluator(parsedTree){
    if(parsedTree.type==="number") return parsedTree.value;
    else if(binOpEval[parsedTree.type]) return binOpEval[parsedTree.type](Evaluator(parsedTree.left),Evaluator(parsedTree.right));

    // switch(parsedTree.type){
    //     case "number": return parsedTree.value
    //     break;
    //     case binOpEval[parsedTree.type] :
    //         return binOpEval[parsedTree.type](Evaluator(parsedTree.left),Evaluator(parsedTree.right));
    // }
}

var binOpEval={
    "+": function(left,right){ return left+right},
    "-": function(left,right){ return left-right},
    "*": function(left,right){ return left*right},
    "/": function(left,right){ return left/right}
}

