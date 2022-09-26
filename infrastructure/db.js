const con = require("../config");
// Database setup


// Returns a connection to the db

// Helper function for querying the db; releases the db connection
const query = async (queryString, params) => {
    return new Promise(async (resolve, reject) => {
        try {
            con.query(queryString, params, (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        } catch (err) {
            reject(err);
        }
    });
};

const update = async (table, col_names, rows, conn) => {
    const queryString = 'INSERT INTO ' + table +
        ' (' + col_names.join() + ') VALUES (' +
        col_names.map((c) => '?').join() +
        ') ON DUPLICATE KEY UPDATE ' +
        col_names.join('=?,') + '=?';
    try {
        // const conn = await getConnection();
        var p = rows.map((row) => {
            new Promise((resolve, reject) => {
                conn.query(queryString, row.concat(row), function (err, resp, fields) {
                    if (err) throw err;
                    resolve();
                });
            });
        });

        return new Promise((resolve, reject) => {
            Promise.all(p)
                .then(() => {
                    conn.query('Select last_insert_id() as insert_id', (err, resp) => {
                        // conn.release();
                        if (err) return reject(err);
                        return resolve(resp[0].insert_id);
                    });
                })
                .catch((err) => {
                    reject('error: ', err.message);
                });
        });
    } catch (err) {
        throw err;
    }
};

exports.query = query;
exports.update = update;