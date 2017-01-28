export interface ClassName {
    className?: string;
}

export const joinClassNames = (...args: Array<string>) => {
    return args.join(" ");
}

export const getDigests = (input: string) => {
    const numb = input.match(/\d/g);
    return numb && numb.join("") || "";
}

export const isNullOrUndef = (obj) => {
    return obj === null || obj === undefined;
}