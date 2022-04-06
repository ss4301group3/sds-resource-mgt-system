export const makeDivWithClass = (className?: string, innerHTML?: string): HTMLDivElement => Object.assign(document.createElement("div"),{
    className: className ? className : null,
    innerHTML: innerHTML ? innerHTML : null
});
export const makeTableRowWithClass = (className?: string, innerHTML?: string): HTMLTableRowElement => Object.assign(document.createElement("tr"),{
    className: className ? className : null,
    innerHTML: innerHTML ? innerHTML : null
});