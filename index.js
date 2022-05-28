var weather = require('openweather-apis');
require('dotenv').config();
weather.setAPPID(process.env.WEATHER_API);
weather.setLang('pt');
const app = require('express')();
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send({status: 'OK!'});
});

app.get('/temperature/:loc', async(req, res) => {
    const {loc} = req.params;
    weather.setCity(loc);
    await weather.getAllWeather(function(err, temp){
        res.send(temp);
	});
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor aberto!')
})