export const makeDivWithClass = (className: string): HTMLDivElement => Object.assign(document.createElement("div"),{
    className: className
});
export const makeDivWithId = (id: string): HTMLDivElement => Object.assign(document.createElement("div"),{
    id: id
});
export const makeDivWithIdAndText = (id: string, text: string): HTMLDivElement => Object.assign(document.createElement("div"),{
    id: id,
    innerHTML: text
});
export const makeH2WithId = (id: string): HTMLHeadingElement => Object.assign(document.createElement("h2"),{
    id: id
});
export const makePWithId = (id: string): HTMLParagraphElement => Object.assign(document.createElement("p"),{
    id: id
});
export const makeButtonWithId = (id: string): HTMLButtonElement => Object.assign(document.createElement("button"),{
    id: id
});
export const makeTableRowWithClass = (className: string): HTMLTableRowElement => Object.assign(document.createElement("tr"),{
    className: className
});
export function hideElemUsingClassList(elemToHide: HTMLElement): void {
    elemToHide.classList.add("hidden");
}
export function unhideElemUsingClassList(elemToHide: HTMLElement): void {
    elemToHide.classList.remove("hidden");
}