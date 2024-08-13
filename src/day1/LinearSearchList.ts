export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (let hay of haystack) {
        if (hay == needle) {
            return true;
        }
    }
    return false;
}
