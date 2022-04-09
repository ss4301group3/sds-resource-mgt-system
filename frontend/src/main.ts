import { showApp, setAsAppContainer, init as appInit } from './scripts/app';
import { hideDropnav, showDropnav } from './scripts/app/dropnav';
import { init as authInit } from './scripts/utils/auth';
import { pages } from './scripts/utils/pages';

function init() {
    authInit();
    setAsAppContainer(document.body);
    appInit();
}
init();
//hideDropnav();
//pages.frontPage.show();
pages.loanForm.init();
setTimeout(() => {
    //hideDropnav();
//    pages.frontPage.show();
}, 1000);
setTimeout(() => {
    //showDropnav();
  //  pages.loanForm.show();
}, 2000);
setTimeout(() => {
    //pages.frontPage.show();
    //hideDropnav();
}, 3000);
setTimeout(() => {
    //pages.loanForm.show();
}, 4000);
setTimeout(() => {
    //pages.frontPage.show();
}, 5000);