const db = require('../database/config')

exports.test = (req, res) => {
    var sql = 'select * from t_user'
    db.query(sql, (err, result) => {
        if (err) {
            res.send(err)
        }

        res.send(result)
    })
}
  