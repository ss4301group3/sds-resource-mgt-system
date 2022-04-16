import { BasicPageContainer, DropPageContainer } from "./abstractions/Page";
import { App } from "./dom-elements/App";
import { Loader } from "./dom-elements/App/Loader";
import { FrontPage } from "./dom-elements/pages/FrontPage";
import { LoanPage } from "./dom-elements/pages/LoanPage";

App.init();

const pages = new BasicPageContainer;
const drops = new DropPageContainer;

const fp = drops.addPage(FrontPage.get);
const lp = drops.addPage(LoanPage.get)

FrontPage.setActionForLoanButton(() => { lp.display(); Loader.hide(); });
LoanPage.setActionForCloseButton(() => { fp.display(); Loader.display(); });

fp.display();