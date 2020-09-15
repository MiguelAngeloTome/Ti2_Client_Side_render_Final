const db = require ('../configs/sqlite.js');
const uuid = require ('uuid').v4;

exports.getCategorias=()=>{
    return new Promise((resolve,reject)=>{
        db.all(`Select * from categorias`,(err,row)=>{
            if(err) reject (err);
            resolve(row);
        });
    });

};

exports.getCategoria= id =>{
    return new Promise((resolve,reject)=>{
        db.all(`Select * from categorias where cat_id = ?`, [id],
        (err,row)=>{
            if(err) reject (err);
            resolve(row);
        });
    });
};

exports.insertCategoria= body =>{
    return new Promise((resolve,reject)=>{
        const id = uuid();
        db.run(`INSERT INTO categorias(cat_id, nome) VALUES(?,?)`,
        [id, body.nome],
        err=>{
            if(err) reject (err);
            resolve({inserted:1, cat_id: id});
        });
    });

};

exports.updateCategoria=(id, body)=>{
    return new Promise((resolve,reject)=>{
        db.run(`update categorias set nome = ? where cat_id = ?`,
        [body.nome, id],
        err=>{
            if(err) reject (err);
            resolve({updated:1, cat_id: id});
        });
    });
};

exports.removeCategoria=id=>{
    return new Promise((resolve,reject)=>{
        db.run(`delete from categorias where cat_id = ?`, [id],
        err=>{
            if(err) reject (err);
            resolve({removed:1, cat_id: id});
        });
    });

};