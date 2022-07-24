const express = require('express')
const app = express()
const PORT = 8000

const discGolfers = {
    'wysoki': {
        'age': 29,
        'fullName': 'Richard Wysocki',
        'numOfWins': 122
    },
    'mcbeth': {
        'age':32,
        'fullName':'Paul McBeth',
        'numOfWins': 126
    },
    'unknown': {
        'age':0,
        'fullName':'unknown',
        'numOfWins':'unknown'
    }    
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const discGolferName = request.params.name.toLowerCase()
    if(discGolfers[discGolferName]){
        response.json(discGolfers[discGolferName])
    }else{
        response.json(discGolfers['unknown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}, betta go catch it!!`)
})