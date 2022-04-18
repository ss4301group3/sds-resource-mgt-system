export type ElemGetter = () => HTMLElement;

export function on(elem: HTMLElement) {
	return {
		appendByGetters: (getters: ElemGetter[]): void => applyGettersTo(elem, getters),
		removeChildren() {
			while(elem.hasChildNodes()) elem.removeChild(<Node> elem.firstChild);
		}
	}
}

export function ifEmpty(elem: HTMLElement) {
	return {
		appendByGetters: (getters: ElemGetter[]): void => { if(isEmpty(elem)) applyGettersTo(elem, getters); }
	}
}

export function ifClicked(elem: HTMLElement) {
	return {
		trigger: (fn: EventListener | EventListenerObject): void => {
			elem.addEventListener("click", fn, {capture : true});
		},
		ignore: (fn: EventListener | EventListenerObject): void => {
			elem.removeEventListener("click", fn, {capture : true});
		}
	}
}

export function newElem(tag: string, text: string): HTMLElement {
	return Object.assign(document.createElement(tag), {innerText: text});
}

export function getOrCreate(
	tag: string,
	id?: string | null,
	className?: string | null,
	innerText?: string | null,
	href?: string | null,
	type?: string | null,
	name?: string | null,
	required?: boolean
) {
	
	let elem = id ? document.getElementById(`${id}`) : null;
	
	const alreadyExist: boolean = elem != null;
	
	if(alreadyExist) return <HTMLElement> elem;
	
	elem = document.createElement(tag);
	
	if(id) elem.id = id;
	if(className) elem.className = className;
	if(innerText) elem.innerText = innerText;
	
	const isA: boolean = match(tag, "A");
	const isBtn: boolean = match(tag, "BUTTON");
	const isInput: boolean = match(tag, "INPUT");
	
	if(href && isA) (<HTMLAnchorElement> elem).href = href;
	if(type && (isInput || isBtn)) (<HTMLInputElement|HTMLButtonElement> elem).type = type;
	if(name && isInput) (<HTMLInputElement> elem).name = name;
	if(required && isInput) (<HTMLInputElement> elem).required = required;
	
	return elem;
}

export function removeElem(elem: HTMLElement) {
	elem.parentElement?.removeChild(elem);
}

function isEmpty(elem: HTMLElement): boolean { return elem.childElementCount == 0 };

function match(tag: string, tag2: string): boolean { return tag.toLowerCase() === tag2.toLowerCase()};

function applyGettersTo (elem: HTMLElement, getters: ElemGetter[]): void  {
	getters.forEach(get => elem.appendChild(get()))
}