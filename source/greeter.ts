import { GreeterInterface } from "./greeterInterface";

export class Greeter implements GreeterInterface {
    constructor() {

    }

    private greeting: string = "Hello";

    greet(s: string): string {
        let r: string = `Hello: ${name}.`;
        return r;
    }


}