export function parseSpokenYear(spoken: string): string | null {
    const numberWords: Record<string, number> = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9,
        ten: 10, eleven: 11, twelve: 12, thirteen: 13,
        fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17,
        eighteen: 18, nineteen: 19, twenty: 20, thirty: 30,
        forty: 40, fifty: 50, sixty: 60, seventy: 70,
        eighty: 80, ninety: 90, hundred: 100, thousand: 1000
    };

    const words = spoken.toLowerCase().replace(/and/g, '').trim().split(/\s+/);
    let result = 0;
    let current = 0;
    let lastWasMultiplier = false;
    const resonableAgeFloor: number = 1900;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const num = numberWords[word];

        if (num === undefined){
            return null;
        } else if (num === 100 || num === 1000) {
            if (current === 0) current = 1;
            current *= num;
            lastWasMultiplier = true;
        } else {
            if (lastWasMultiplier) {
                result += current;
                current = 0;
            }
            current += num;
            lastWasMultiplier = false;
        }
    }
    result += current;

    if (result < resonableAgeFloor) {
        const first = numberWords[words[0]];
        const second = numberWords[words[1]];
        if (words.length >= 2 && first !== undefined &&
            second !== undefined && first < 100 &&
            second < 100
        ) {
            result = first * 100 + second + (words[2] ? numberWords[words[2]] ?? 0 : 0);
        }
    }

    return result.toString();
}
