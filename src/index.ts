import app from './App'

const port = process.env.PORT || 3005

app.listen(port, (err:string) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
})
