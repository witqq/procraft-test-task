interface MaskOptions {
    onComplete?: (val: string) => void;
    onChange?: (val: string) => void;
}
interface JQuery {
    mask(mask: string, opt?: MaskOptions): JQuery;
    mask(mask: () => string, opt?: MaskOptions): JQuery;
    cleanVal(): string;
    masked(val: string): string;
}