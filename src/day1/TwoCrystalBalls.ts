export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpamount = Math.floor(Math.sqrt(breaks.length));
    let i = jmpamount;
    for (; i < breaks.length; i += jmpamount) {
        if (breaks[i]){
            break;
        }
    }
    i -= jmpamount;
    for (let j = 0; j <= jmpamount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}