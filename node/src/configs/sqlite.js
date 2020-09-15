const sqlite3 = require ('sqlite3').verbose();
const path = require ('path');

const db = new sqlite3.Database(
    path.resolve (__dirname,'..','db','raw_sqlite.db'),
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    err=> {
        if(err) console.error(err.message);
        else console.log ('Connected')
    }
);

db.run(
    `create table if not exists user(
        'user_id' varchar(36) primary key,
        'username' varchar(30),
        'password' varchar(200),
        'email' varchar(30),
        'dataIv' varchar(200),
        'name' varchar(30),
        'surname' varchar(30),
        'type' varchar(30))`
);

db.run(`CREATE TABLE IF NOT EXISTS receitas (
'rec_id' varchar(36) PRIMARY KEY,
'nome' varchar(255) not null,
'ingre' varchar(500) not null,
'prep' varchar(1000) not null,
'priv' boolean not null,
'class' int not null,
'timesClass' int not null,
'user_id' varchar(36) not null,
foreign key (user_id) REFERENCES user(user_id))` 
);

db.run(
    `create table if not exists categoria(
        'cat_id' varchar(36) PRIMARY KEY,
        'nome' varchar(255) not null)`
);

db.run(
    `create table if not exists categoriaReceita(
        'catRec_id' varchar(36) PRIMARY KEY,
        'cat_id' varchar(36) not null,
        'rec_id' varchar(36) not null,
        foreign key (cat_id) REFERENCES categoria(cat_id),
        foreign key (rec_id) REFERENCES receitas(rec_id)
    )`
);

db.run(
    `create table if not exists comentarios(
        'coment_id' varchar(36) Primary Key,
        'title' varchar(50) not null,
        'comment' varchar(1000) not null,
        'user_id' varchar(36) not null,
        'rec_id' varchar(36) not null,
        foreign key (user_id) REFERENCES user(user_id),
        foreign key (rec_id) REFERENCES receitas(rec_id)
    )`
);



module.exports = db;