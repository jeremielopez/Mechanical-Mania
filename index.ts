// Import stylesheets
import './style.css';
import { Garage } from './entities/garage';


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const garage = new Garage('Test');
console.log(garage);