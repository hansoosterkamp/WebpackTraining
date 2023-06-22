import generateJoke from "./generateJoke";
import './styles/main.scss'
import laughingIcon from './assets/laughing.svg'

const laughImg = document.getElementById('laughImg')
laughImg.src = laughingIcon

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke)

generateJoke();
