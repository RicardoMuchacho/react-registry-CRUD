const express = require('express')
const cors = require('cors')
const path = require('path')
const db = require('./db.js')
const app = express()

app.use(cors())
app.use(express.json())

app.get("/registro", async (req, res) => {
  try {
    const allTodos = await db.pool.query("SELECT * FROM persona");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.post('/registro', async (req, res)=>{
    try{
      const no = req.body.no;
      const ap = req.body.ap;
      const sx = req.body.sx;
      const ci = req.body.ci;
      
      const new_person = await db.pool.query("insert into persona (no_persona, ap_persona, ci_persona, sx_persona) values ($1, $2, $3, $4) RETURNING *", [no, ap, ci, sx]);
      res.json(new_person.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});

app.get("/registro/:ci", async (req, res) => {
    try {
      const ci = req.params.ci;
      const todo = await db.pool.query("SELECT * FROM persona WHERE ci_persona = $1", [
        ci
      ]);
  
      res.json(todo.rows[0]);
      if (res == ""){
        res.json("{msg: 'not found'")
      }
    } catch (err) {
      console.error(err.message);
      res.json("{message: 'person not found'")
    }
});

app.delete('/registro/:ci', async (req, res)=>{
      const ci = req.params.ci
      await db.pool.query("delete from persona where ci_persona = $1", [ci]);
      res.json("message: person deleted");
  })

app.put('/registro/:ci', async (req, res)=>{
    try{
      const no = req.body.no;
      const ap = req.body.ap;
      const sx = req.body.sx;
      const ci = req.params.ci;
      
      const result = await db.pool.query("update persona set no_persona= $1, ap_persona= $2,sx_persona= $3 where ci_persona= $4 RETURNING*", [no,ap,sx,ci])
      
      res.json(result.rows[0])

    }catch{(err => console.log(err))}
  })

app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log('Listening on port ' + PORT + '...')
})