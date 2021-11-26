var result = function(parsedTree){
    return Evaluator(parsedTree);
}

function Evaluator(parsedTree){
    switch(parsedTree.type){
        case "*" :
            return BinOpEval(parsedTree,parsedTree.type);
        case ""
    }
}

function BinOpEval(parsedTree,op){
    
    if(parsedTree.left) ? return Evaluator(parsedTree.left)
    
}