import { showApp, setAsAppContainer, init as appInit } from './scripts/app';
import { hideDropnav, showDropnav } from './scripts/app/dropnav';
import { getItemsList } from './scripts/pages/loanPage';
import { init as authInit } from './scripts/utils/auth';
import { pages, init as pagesInit } from './scripts/utils/pages';

function init() {
    setAsAppContainer(document.body);
    appInit();
    authInit();
    pagesInit();
}
init();