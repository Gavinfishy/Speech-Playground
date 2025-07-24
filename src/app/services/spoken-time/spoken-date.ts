import { MONTHS, ORDINAL_DAYS } from "../../local-data-pool";
import { parseSpokenYear } from "./spoken-years";

export function parseSpokenDate(input: string, returnFormat: string): string | null {
    const normalized = input.toLowerCase().replace(/-/g, ' ').replace(/\s+and\s+/g, ' ');
    const words = normalized.split(/\s+/);

    let month = '';
    let day = '';
    let yearPhrase = '';

    // month
    for (const word of words) {
        if (MONTHS[word]) {
            month = MONTHS[word];
            break;
        }
    }

    // day
    for (let i = 0; i < words.length; i++) {
        const oneWord = words[i];
        const twoWord = i < words.length - 1 ? `${words[i]} ${words[i+1]}` : '';

        if (ORDINAL_DAYS[twoWord]) {
            day = ORDINAL_DAYS[twoWord];
            i++;
            continue;
        } else if (ORDINAL_DAYS[oneWord]) {
            day = ORDINAL_DAYS[oneWord];
        }
    }

    // year
    let year = 0;
    const dateWords = new Set([...Object.keys(MONTHS), ...Object.keys(ORDINAL_DAYS)]);
    const yearWords = words.filter(w => !dateWords.has(w));
    yearPhrase = yearWords.join(' ');
    if (typeof Number(yearPhrase) === 'number' && !isNaN(Number(yearPhrase))) {
        year = Number(yearPhrase)
    }
    else {
        year = Number(parseSpokenYear(yearPhrase));
    }

    if (month && day && year) {
        if (returnFormat == 'ymd') {
            return `${year}-${month}-${day}`;
        }
        else if (returnFormat == 'mdy') {
            return `${month}-${day}-${year}`;
        }
        else {
            return `${day}-${month}-${year}`;
        }
    } else {
        return null;
    }
}