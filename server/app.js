import fetch from 'node-fetch'
import Express from "express"
import cors from "cors"

const app = Express()

app.use(cors())

app.get("/", async (req, res) => {

    let url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=dogs&api_key=f51eb04f4c3629c39ff7b2bab8aac94d&format=json&nojsoncallback=1'
    let options = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    const request = await fetch(url,options)
    const response = await request.json()
    const list = response.photos.photo
    
    
    res.send(list)

})

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000")
})