export function init() {
    window.onpopstate = function(event) {
        let state: any;
        if(event.state) state = event.state;


    }
}

export function render(): void {

}

export function pushState(page: string, contentId?: string, others?: string[]) {
    //if(page === "adminHome") 
}