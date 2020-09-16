const db = require ('../configs/sqlite.js');
const uuid = require ('uuid').v4;

exports.getComentarios=()=>{
    return new Promise((resolve,reject)=>{
        db.all(`Select * from comentarios`,(err,row)=>{
            if(err) reject (err);
            resolve(row);
        });
    });

};

exports.getComentario= id =>{
    return new Promise((resolve,reject)=>{
        db.all(`Select * from comentarios where coment_id = ?`, [id],
        (err,row)=>{
            if(err) reject (err);
            resolve(row);
        });
    });
};

exports.insertComentario= body =>{
    return new Promise((resolve,reject)=>{
        const id = uuid();
        db.run(`INSERT INTO comentarios(coment_id, title, comment, user_id, rec_id) VALUES(?,?,?,?,?)`,
        [id, body.title, body.comment, body.user_id, body.rec_id],
        err=>{
            if(err) reject (err);
            resolve({inserted:1, coment_id: id});
        });
    });

};

exports.updateComentario=(id, body)=>{
    return new Promise((resolve,reject)=>{
        db.run(`update comentarios set title = ?, comment = ? where coment_id = ?`,
        [body.title, body.comment, id],
        err=>{
            if(err) reject (err);
            resolve({updated:1, coment_id: id});
        });
    });
};

exports.removeComentario=id=>{
    return new Promise((resolve,reject)=>{
        db.run(`delete from comentarios where coment_id = ?`, [id],
        err=>{
            if(err) reject (err);
            resolve({removed:1, coment_id: id});
        });
    });

};