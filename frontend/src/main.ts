import "./style.scss";
import Icon from './brand.png';
import { Box, BoxBuilder, OrderABox } from './components/box'

function component() {
  const element = document.createElement('div');

  element.innerHTML = "arst";

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  const boxBuilder: BoxBuilder = new OrderABox();
  const viewOnlyBox: Box = boxBuilder.orderABox("View Only", "Row");
  viewOnlyBox.appendThisHTMLTo(element);
  const anotherViewOnlyBox: Box = boxBuilder.orderABox("View Only", "Row");
  anotherViewOnlyBox.appendBoxChild(viewOnlyBox);
  anotherViewOnlyBox.appendThisHTMLTo(element);

  
  return element;
}

document.body.appendChild(component());