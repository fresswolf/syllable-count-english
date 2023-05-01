import {cmuDictionaryLookup} from "./cmuDictionary.js";
import {syllable} from "syllable";

const arpabetVowels = new Set([
    'AO', 'AA', 'IY', 'UW', 'EH', 'IH', 'UH', 'AH', 'AE', 'EY', 'AY', 'OW', 'AW', 'OY', 'ER'
]);

function syllableCount(text) {
    const words = textToWords(text);
    let syllables = 0;
    words.forEach(w => syllables += syllableCountForWord(w));
    return syllables;
}

function textToWords(text) {
    // Words in the dictionary can contain dots, like in "v.a."
    const regex = /\w+(?:[\w'\-.][\w.]+)?/g;
    const words = text.match(regex);
    if (!words) {
        return [text];
    }
    return words;
}

function syllableCountForWord(word) {
    const arpabet = cmuDictionaryLookup(word);
    if (arpabet) {
        const phonemes = arpabet.split(" ");
        let count = 0;
        for (let phoneme of phonemes) {
            if (phoneme.length < 2) {
                continue;
            }
            const basePhoneme = phoneme.substring(0, 2);
            if (arpabetVowels.has(basePhoneme)) {
                count++;
            }
        }
        return count;
    } else {
        if (word.length > 1 && word.endsWith(".")) {
            return syllableCountForWord(word.substring(0, word.length - 2));
        }
        if (word.endsWith("s")) {
            return syllableCountForWord(word.substring(0, word.length - 1));
        }
    }
    return syllable(word);
}

export {syllableCount, cmuDictionaryLookup};
