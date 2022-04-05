import (/* webpackPrefetch: true */ "./style.scss");
import Icon from './brand.png';

async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import(/* webpackPrefetch: true */ 'lodash');

  element.innerHTML = _.join(['Hallo', 'webpsack'], ' ');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});