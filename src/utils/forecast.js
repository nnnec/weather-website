const request = require('request')

const forecast = (longitude,latitude,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=b96c64c4c8c84c999c87f6217ab1b751&query='+latitude+','+longitude
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to the internet',undefined)
        }else if (body.error){
            callback('Unable to find location',undefined)
        }else{
            const temperature = body.current.temperature
            const feelsLike = body.current.feelslike
            const weatherDescription = body.current.weather_descriptions[0]

            data = weatherDescription + '. There are currently ' + temperature + ' degrees but it feels like ' + feelsLike + ' degrees.'
            callback(undefined,data)
        }
    })

}


module.exports = forecast