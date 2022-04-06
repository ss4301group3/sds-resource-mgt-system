import "./stylesheets/main.scss";
import Icon from './assets/brand.png';
import { BoxData, Box, BoxBuilder, OrderABox } from './components/box'

function component() {
  const element = document.createElement('div');

  element.innerHTML = "arst";

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  const boxBuilder: BoxBuilder = new OrderABox();
  
  const boxProperties = {
    "Serial Number": "33ETTT33333",
    "Model": "Nice",
  }
  const boxData: BoxData = new BoxData(0, 0, "Nice Stuff", boxProperties);

  const boxxx: Box = boxBuilder.orderABox("View Only", "Tile", boxData);
  boxxx.appendThisHTMLTo(element);
  boxxx.setProperty("Model", "Nicer");

  const table = document.createElement("table");
  element.appendChild(table);
  const row1: Box = boxBuilder.orderABox("View Only", "Row", boxData);
  row1.appendThisHTMLTo(table);
  const row2: Box = boxBuilder.orderABox("View Only", "Row", boxData);
  row2.appendThisHTMLTo(table);
  

  
  return element;
}

document.body.appendChild(component());