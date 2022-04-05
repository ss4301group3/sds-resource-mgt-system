import "./style.scss";
import Icon from './brand.png';
import {
  BoxBuilder, OrderABox
} from './components/box'

function component() {
  const element = document.createElement('div');

  element.innerHTML = "arst";

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  const boxBuilder: BoxBuilder = new OrderABox();
  const viewOnlyBox = boxBuilder.orderABox("View Only", "Tile");
  console.log(viewOnlyBox);
  viewOnlyBox.executeViewOption();
  
  return element;
}

document.body.appendChild(component());