import test from 'node:test';
import assert from 'node:assert/strict';
import {cmuDictionaryLookup, syllableCount} from "../src/index.js";

test('syllable count words', (t) => {
    assert.strictEqual(syllableCount("Frog"),1);
    assert.strictEqual(syllableCount("Indonesia"),4);
    assert.strictEqual(syllableCount("(Indonesia)"),4);
    assert.strictEqual(syllableCount("yeebeedeebee"),4);
    assert.strictEqual(syllableCount("I"),1);
    assert.strictEqual(syllableCount("U.S.A."),3);
    assert.strictEqual(syllableCount("@;'/;,"),0);
    assert.strictEqual(syllableCount(""),0);
});

test('syllable count sentences', (t) => {
    assert.strictEqual(syllableCount("It's a nice monday today"), 7);
    assert.strictEqual(syllableCount("It's not easy to pronounce 'worcestershire'!"), 10);
    assert.strictEqual(syllableCount("This... Is.some.text!\nWith two lines"), 7);
    assert.strictEqual(syllableCount("\n\n\n\n"),0);
});

test('cmu dictionary lookup', (t) => {
    assert.strictEqual(cmuDictionaryLookup("Water"), "W AO1 T ER0");
    assert.strictEqual(cmuDictionaryLookup("asdf"), undefined);
});