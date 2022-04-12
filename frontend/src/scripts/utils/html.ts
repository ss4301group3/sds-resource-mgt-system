export const makeDivWithClass = (className: string): HTMLDivElement => Object.assign(document.createElement("div"),{
    className: className
});
export const makeDivWithId = (id: string): HTMLDivElement => Object.assign(document.createElement("div"),{
    id: id
});
export const makeDivWithIdAndClass = (id: string, className: string): HTMLDivElement => Object.assign(document.createElement("div"),{
    id: id,
    className: className
});
export const makeDivWithIdAndClassAndText = (id: string, className: string, text: string): HTMLDivElement => Object.assign(document.createElement("div"),{
    id: id,
    className: className,
    innerHTML: text
});
export const makeDivWithIdAndText = (id: string, text: string): HTMLDivElement => Object.assign(document.createElement("div"),{
    id: id,
    innerHTML: text
});

export const makeH2Withid = (id: string): HTMLHeadingElement => Object.assign(document.createElement("h2"),{
    id: id
});
export const makeH2WithText = (text: string): HTMLHeadingElement => Object.assign(document.createElement("h2"),{
    innerHTML: text
});
export const makeH2WithIdAndText = (id: string, text: string): HTMLHeadingElement => Object.assign(document.createElement("h2"),{
    id: id,
    innerHTML: text
});

export const makeH3WithId = (id: string): HTMLHeadingElement => Object.assign(document.createElement("h3"),{
    id: id
});
export const makeH3WithText = (text: string): HTMLParagraphElement => Object.assign(document.createElement("h3"),{
    innerHTML: text
});
export const makeH3WithIdAndText = (id: string, text: string): HTMLHeadingElement => Object.assign(document.createElement("h3"),{
    id: id,
    innerHTML: text
});

export const makePWithId = (id: string): HTMLParagraphElement => Object.assign(document.createElement("p"),{
    id: id
});
export const makePWithText = (text: string): HTMLParagraphElement => Object.assign(document.createElement("p"),{
    innerHTML: text
});

export const makeButtonWithId = (id: string): HTMLButtonElement => Object.assign(document.createElement("button"),{
    id: id
});
export const makeButtonWithClass = (className: string): HTMLButtonElement => Object.assign(document.createElement("button"),{
    className: className
});
export const makeButtonWithIdAndClass = (id: string, className: string): HTMLButtonElement => Object.assign(document.createElement("button"),{
    id: id,
    className: className
});
export const makeButtonWithTypeAndIdAndClass = (type: string, id: string, className: string): HTMLButtonElement => Object.assign(document.createElement("button"),{
    type: type,
    id: id,
    className: className
});
export const makeButtonWithTypeAndIdAndClassAndText = (type: string, id: string, className: string, text: string): HTMLButtonElement => Object.assign(document.createElement("button"),{
    type: type,
    id: id,
    className: className,
    innerHTML: text
});

export const makeLiWithText = (innerHTML: string): HTMLLIElement => Object.assign(document.createElement("li"),{
    innerHTML: innerHTML
});

export const makeIWithIdAndClassAndText = (id: string, className: string, innerHTML: string): HTMLElement => Object.assign(document.createElement("i"),{
    id: id,
    className: className,
    innerHTML: innerHTML
});

export const makeAWithIdAndHrefAndText = (id: string, href: string, innerHTML: string): HTMLAnchorElement => Object.assign(document.createElement("a"),{
    id: id,
    href: href,
    innerHTML: innerHTML
});
export const makeAWithClassAndHrefAndText = (className: string, href: string, innerHTML: string): HTMLAnchorElement => Object.assign(document.createElement("a"),{
    className: className,
    href: href,
    innerHTML: innerHTML
});

export const makeInputWithIdAndTypeAndNameAndRequired = (id: string, type: string, name: string, required: boolean): HTMLInputElement => Object.assign(document.createElement("input"),{
    id: id,
    type: type,
    name: name,
    required: required
});

export const makeInputWithTypeAndNameAndRequired = (type: string, name: string, required: boolean): HTMLInputElement => Object.assign(document.createElement("input"),{
    type: type,
    name: name,
    required: required
});

export const makeLabelWithIdAndText = (id: string, text: string): HTMLLabelElement => Object.assign(document.createElement("label"),{
    id: id,
    innerHTML: text
});

export const makeSelectWithIdAndName = (id:string, name: string): HTMLSelectElement => Object.assign(document.createElement("select"), {
    id: id,
    name: name
});

export const makeOptionWithValueAndText = (value: string, text: string): HTMLOptionElement => Object.assign(document.createElement("option"), {
    value: value,
    innerHTML: text
});

export const makeTableRowWithClass = (className: string): HTMLTableRowElement => Object.assign(document.createElement("tr"),{
    className: className
});

export function removeChildren(elemToClear: HTMLElement): void {
    while(elemToClear.hasChildNodes()) elemToClear.removeChild(<Node> elemToClear.firstChild);
}

export function hideElemUsingClassList(elemToHide: HTMLElement): void {
    elemToHide.classList.add("hidden");
}
export function unhideElemUsingClassList(elemToHide: HTMLElement): void {
    elemToHide.classList.remove("hidden");
}

export function expandElemUsingClassList(elemToHide: HTMLElement): void {
    elemToHide.classList.add("expanded");
}
export function unexpandElemUsingClassList(elemToHide: HTMLElement): void {
    elemToHide.classList.remove("expanded");
}