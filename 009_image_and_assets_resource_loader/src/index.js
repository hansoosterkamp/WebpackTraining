import generateJoke from "./generateJoke";
import './styles/main.scss'
import laughingIcon from './assets/laughing.svg'

const laughImg = document.getElementById('laughImg')
laughImg.src = laughingIcon

console.log("Hello there..!");
console.log(generateJoke());
