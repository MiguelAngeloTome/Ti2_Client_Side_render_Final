const db = require ('../configs/sqlite.js');
const uuid = require ('uuid').v4;

exports.getRecipes=()=>{
    return new Promise((resolve,reject)=>{
        db.all(`Select rec_id, nome From receitas`,(err,row)=>{
            if(err) reject (err);
            resolve(row);
        });
    });

};

exports.getRecipe= id =>{
    return new Promise((resolve,reject)=>{
        resolve ({got: 1})
    });

};

exports.insertRecipe= body =>{
    return new Promise((resolve,reject)=>{
        const id = uuid();
        db.run(`INSERT INTO receitas(rec_id, nome, ingre, prep) VALUES(?,?,?,?)`,
        [id, body.nome, body.ingre,body.prep],
        err=>{
            if(err) reject (err);
            resolve({inserted:1, rec_id: id});
        });
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