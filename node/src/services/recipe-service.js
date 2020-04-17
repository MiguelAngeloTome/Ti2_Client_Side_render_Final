exports.getRecipes=()=>{
    return new Promise((resolve,reject)=>{
        resolve ({got: 10000})
    });

};

exports.getRecipe= id =>{
    return new Promise((resolve,reject)=>{
        resolve ({got: 1})
    });

};

exports.insertRecipe= body =>{
    return new Promise((resolve,reject)=>{
        resolve ({inserted: 1})
    });

};

exports.updateRecipe=(id, body)=>{
    return new Promise((resolve,reject)=>{
        resolve ({updt: 1})
    });

};

exports.removeRecipe=id=>{
    return new Promise((resolve,reject)=>{
        resolve ({remove: 1})
    });

};