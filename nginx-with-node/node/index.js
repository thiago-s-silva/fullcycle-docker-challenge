const express = require('express')
const app = express()
const port = 3000
const config = {
	host: 'db',
	user: 'root',
	password: 'root',
	database: 'nodedb'
}

const mysql = require('mysql2')
const connection = mysql.createConnection(config)


app.get('/', (req, res) => {
		const sql = `INSERT INTO people(name) VALUES('Thiago Silva')`
		connection.query(sql)

		connection.query('SELECT * FROM people', (err, results, fields) => {
			if (err) return res.status(500).send({ message: err })

			const peopleListHtml = results.reduce((acc, record) => acc+=`<li>${record.name}</li>`, '')

			return res.send(
				`
				<h1>Full Cycle Rocks!</h1>
				${peopleListHtml}
				`
			)
		})
})

app.listen(port, () => console.log('Server running on localhost:' + port))