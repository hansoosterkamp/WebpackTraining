import axios from 'axios'

function generateJoke() {
    const reqParms = {
        headers: {
            Accept: 'application/json'
        }
    };

    axios.get('https://icanhazdadjoke.com', reqParms).then(
        res => {
            document.getElementById('joke').innerHTML = res.data.joke
        });

}

export default generateJoke