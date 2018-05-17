import { GreeterInterface } from "./greeterInterface";

/**
 * A sample GreeterInterface implementation.
 */
export class Greeter implements GreeterInterface {
    constructor() {

    }

    private greeting: string = "Hello";

    /**
     * Returns a greeting for the specified name.
     * @param s The name to generate greeting for.
     */
    greet(s: string): string {
        let r: string = `Hello: ${name}.`;
        return r;
    }


}