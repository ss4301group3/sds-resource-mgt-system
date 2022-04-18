import "../../../stylesheets/components/App/MessageBox.scss";
import { getOrCreate, ifClicked, on, removeElem } from "../../utils/html";
import { Pages } from "../Pages";


abstract class Message extends HTMLDivElement {
    abstract timeout: NodeJS.Timeout | null;
}

export class MessageBox {
    static get(): HTMLDivElement {
        return getOrCreate("DIV", "AppMessageBox") as HTMLDivElement;
    }

    static writeMessage(id: string, text: string, isDestructible?: boolean, duration?: number) {
        const message = getOrCreate("P", id) as Message;
        message.innerHTML = text;

        let to: NodeJS.Timeout | null = message["timeout"] ? message["timeout"] : null;

        if(isDestructible) ifClicked(message).trigger(() => {
            removeElem(message);
            if (message.timeout) clearTimeout(message.timeout);
        });

        if(to) clearTimeout(to);
        
        if(duration) {
            message["timeout"] = to = setTimeout(function() {
                if(message) removeElem(message);
            }, duration);
        }

        const links = message.getElementsByClassName("link");
        for(let i = 0; i < links.length; i++) {
            ifClicked(<HTMLElement> links[i]).trigger(() => Pages.display(links[i].innerHTML));
        }

        this.get().appendChild(message);
    }
}