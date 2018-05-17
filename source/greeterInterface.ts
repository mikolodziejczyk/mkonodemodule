/**
 * Common interface for all greeters.
 */
export interface GreeterInterface {
    /**
     * Generates a greeting.
     * @param s The person to greet.
     */
    greet(s: string): string;
}