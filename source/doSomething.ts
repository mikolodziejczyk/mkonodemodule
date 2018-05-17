import escapeHTML from "escape-html"

/**
 * Does someting, in this case returns a html-escaped greeting for the specified name.
 * @param name The name to generate greeting for.
 */
export function doSometing(name: string): string {
    let s: string = `Hello: ${name}.`;
    s = escapeHTML(s);
    return s;
}