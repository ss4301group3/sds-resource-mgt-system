export function hideLoader(): void {
    let loader: HTMLElement = <HTMLElement> document.querySelector('#LoaderContainer')

    if(loader) loader.classList.add("page-inactive")
}

export function unhideLoader(innerHTML?: string): void {
    let loaderContainer: HTMLElement = <HTMLElement> document.querySelector('#LoaderContainer')
    let loader: HTMLElement = <HTMLElement> document.querySelector('#Loader')

    if(innerHTML) loader.innerHTML = innerHTML;
    if(loaderContainer) loaderContainer.classList.remove("page-inactive")
}