import { showApp, setAsAppContainer, init } from './scripts/app';
import { hideDropnav, showDropnav } from './scripts/app/dropnav';


setAsAppContainer(document.body);
init();
setTimeout(() => {
    document.querySelector("#AppButtonBox")?.classList.add("switched-from")
}, 1000);
setTimeout(() => {
    document.querySelector("#AppButtonBox")?.classList.remove("switched-from")
}, 2000);