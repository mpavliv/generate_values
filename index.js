
// Axios also supports async/await syntax for performing a POST request:

const axios = require('axios')


let temperature = 19;
const now = Date.now();
const sec = 1000;
const min = sec * 60;
const hour = min * 60;
const day = hour * 24;
// start 100 days before
// read sensor every 1 minute
let time = now - 30 * day;




const postTemperature = async () => {
  const intTemperature = Math.floor(temperature);
  try {
    const data = {
      point: 1,
      datatime: time,
      value: intTemperature
    }
    const res = await axios.post('http://185.65.246.123:8080/temperature', data)
    // const res = await axios.post('http://localhost:8080/temperature', data)
    console.log(`Status: ${res.status}`)
  } catch (err) {
    console.error(err)
  }
}

async function todo() {
  while (time < now) {
    time = time + min;
    const date = new Date(time);
    console.log(date);
    await postTemperature(); 
    temperature = temperature + Math.random() * 2 - 1;
    if (temperature < 3 || temperature > 47) {
      temperature = 25;
    }
  } 
}

(async () => {
  todo();
})();