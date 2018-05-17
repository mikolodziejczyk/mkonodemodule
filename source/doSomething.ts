import escapeHTML from "escape-html"

export function doSometing(name: string): string {
    let s: string = `Hello: ${name}.`;
    s = escapeHTML(s);
    return s;
}