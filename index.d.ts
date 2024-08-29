declare const useResize: () => {
    (el: HTMLElement, callback: Function): void;
    install: (app: any) => void;
}

export default useResize;