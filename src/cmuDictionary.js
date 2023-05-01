import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

let dictionary;

function loadDictionary() {
    dictionary = {};
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const cmudictPath = join(__dirname, '../cmudict/cmudict-0.7b');
    const data = fs.readFileSync(cmudictPath, 'utf8');
    const lines = data.split('\n');

    for (let line of lines) {
        const trimmedLine = line;
        if (trimmedLine.startsWith(";;;")) {
            continue;
        }
        const [key, arpabet] = trimmedLine.split("  ");
        if (arpabet) {
            dictionary[key] = arpabet.trim();
        }
    }
}

export function cmuDictionaryLookup(word) {
    if (!dictionary) {
        loadDictionary();
    }
    return dictionary[word.toUpperCase()];
}