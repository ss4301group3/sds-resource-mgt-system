import { showApp, setAsAppContainer, hideApp } from './scripts/app';
import { haveDropnavEffect, getDropnav, hideDropnav, showDropnav, showFrontPage } from './scripts/app/dropnav';
import { clearPageRemarks, clearPageTitle } from './scripts/app/mainContainer';
import { getNavbar } from './scripts/app/navbar';
import { getSidenavToggle } from './scripts/app/sidenav';

setAsAppContainer(document.body);
showApp();

clearPageTitle();
clearPageRemarks();

haveDropnavEffect(getNavbar());
haveDropnavEffect(getDropnav());
haveDropnavEffect(getSidenavToggle());
showFrontPage();


document.body.addEventListener("click", () => {
    let isExpanded = getDropnav().classList.contains("dropnav-active");
    if(isExpanded) hideDropnav();
    else showDropnav();
})