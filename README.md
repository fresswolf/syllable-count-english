# syllable-count-english

Accurate syllable counter for English text.

## Motivation
There are many syllable counting packages around that count syllables by reading words in an algorithmic way. While these libraries can give an estimation of the syllables in a text, they fail to give the accurate count for a lot of words.

This package uses the [CMU Pronouncing Dictionary](http://www.speech.cs.cmu.edu/cgi-bin/cmudict) that contains the pronunciation of over 134,000 US English words.

For words not found in the dictionary the [syllable](https://www.npmjs.com/package/syllable) package is used, which uses an above-mentioned algorithmic approach to estimate syllables.

## Installation (esm only)
```sh
npm install syllable-count-english
```

## Usage
```sh
import {syllableCount} from "syllable-count-english";

syllableCount("It's not easy to pronounce 'worcestershire'!");
// returns 10
```