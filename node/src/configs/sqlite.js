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

db.run(`CREATE TABLE IF NOT EXISTS receitas (
'rec_id' varchar(36) PRIMARY KEY,
'nome' varchar(255) not null,
'ingre' varchar(500) not null,
'prep' varchar(1000) not null
)`   
);

module.exports = db;