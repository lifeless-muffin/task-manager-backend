import express from 'express';

const app = express();

app.get("/", async (req, resp) => {
  resp.status(200).json({msg: "Hello world"})
})

app.listen(8080, () => {
  console.log(`Server running!`); 
});