var result = function(parsedTree){
    return Evaluator(parsedTree);
}

let variables={}
function Evaluator(parsedTree){
    if(parsedTree.type=="number") return parsedTree.value;
    else if(binOpEval[parsedTree.type]) return binOpEval[parsedTree.type](Evaluator(parsedTree.left),Evaluator(parsedTree.right));
    else if(parsedTree.type=="assign"){
        variables[parsedTree.name]=Evaluator(parsedTree.value);
        if(parsedTree.body) return Evaluator(parsedTree.body);
    } 
    else if(parsedTree.type=="identifier") return variables[parsedTree.value] 
}

var binOpEval={
    "+": function(left,right){ return left+right},
    "-": function(left,right){ return left-right},
    "*": function(left,right){ return left*right},
    "/": function(left,right){ return left/right}
}

