import "./style.scss";
import Icon from './brand.png';

function component() {
  const element = document.createElement('div');

  element.innerHTML = "arst";

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());