const db = require ('../configs/sqlite.js');
const uuid = require ('uuid').v4;

exports.getRecipes=()=>{
    return new Promise((resolve,reject)=>{
        db.all(`Select * from receitas`,(err,row)=>{
            if(err) reject (err);
            resolve(row);
        });
    });

};

exports.getRecipe= id =>{
    return new Promise((resolve,reject)=>{
        db.all(`Select * from receitas where rec_id = ?`, [id],
        (err,row)=>{
            if(err) reject (err);
            resolve(row);
        });
    });
};

exports.insertRecipe= body =>{
    return new Promise((resolve,reject)=>{
        const id = uuid();
        db.run(`INSERT INTO receitas(rec_id, nome, ingre, prep, priv, class, timesClass, user_id) VALUES(?,?,?,?,?,?,?,?)`,
        [id, body.nome, body.ingre,body.prep, true, 0, 0, body.user_id],
        err=>{
            if(err) reject (err);
            resolve({inserted:1, rec_id: id});
        });
    });

};

exports.updateRecipe=(id, body)=>{
    return new Promise((resolve,reject)=>{
        db.run(`update receitas set nome = ?, ingre = ?, prep = ? , priv = ?, class = ?, timesClass = ? where rec_id = ?`,
        [body.nome, body.ingre, body.prep, body.priv, body.class, body.timesClass, id],
        err=>{
            if(err) reject (err);
            resolve({updated:1, rec_id: id});
        });
    });
};

exports.removeRecipe=id=>{
    return new Promise((resolve,reject)=>{
        db.run(`delete from receitas where rec_id = ?`, [id],
        err=>{
            if(err) reject (err);
            resolve({removed:1, rec_id: id});
        });
    });

};