import { showApp, setAsAppContainer, hideApp } from './components/app';
import { clearPageRemarks, clearPageTitle } from './components/app/main-container';
setAsAppContainer(document.body);
showApp();
clearPageTitle();
clearPageRemarks();