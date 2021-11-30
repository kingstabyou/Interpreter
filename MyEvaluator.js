var result = function(parsedTree){
    return Evaluator(parsedTree);
}

let variables={}
let func={}
let funcdecl={}

function Evaluator(parsedTree){
    if(parsedTree.type=="number") return parsedTree.value;
    else if(binOpEval[parsedTree.type]) return binOpEval[parsedTree.type](Evaluator(parsedTree.left),Evaluator(parsedTree.right));
    else if(parsedTree.type=="assign"){
        variables[parsedTree.name]=Evaluator(parsedTree.value);
        if(parsedTree.body) return Evaluator(parsedTree.body)
        else return variables[parsedTree.name]
    } 
    else if(parsedTree.type=="identifier") return variables[parsedTree.value] ;
    else if(parsedTree.type=="compare") return Evaluator(parsedTree.left)==Evaluator(parsedTree.right);
    else if(parsedTree.type=="if") return Evaluator(parsedTree.condition)?Evaluator(parsedTree.iftrue):Evaluator(parsedTree.elsefalse);
    else if(parsedTree.type=="funcdecl") {
        // funcdecl[parsedTree.name]=parsedTree.name;
        console.log(typeof JSON.stringify(parsedTree.body));
        var tempfunc = new Function("value",JSON.stringify(parsedTree.body));
        // func[parsedTree.name]=tempfunc;
        return Evaluator(parsedTree.callsite);
    }
    else if(parsedTree.type=="funccall") {
        console.log(func);
        console.log(func[parsedTree.name]);
        return Evaluator(func[parsedTree.name]);
    } 
}

var binOpEval={
    "+": function(left,right){ return left+right},
    "-": function(left,right){ return left-right},
    "*": function(left,right){ return left*right},
    "/": function(left,right){ return left/right}
}

