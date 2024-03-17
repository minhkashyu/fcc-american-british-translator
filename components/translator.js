const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
  static get LOCALE__BRITISH_TO_AMERICAN() {
    return 'british-to-american';
  }

  static get LOCALE__AMERICAN_TO_BRITISH() {
    return 'american-to-british';
  }

  translate(text, locale, highlight) {
    let translation = text;

    translation = this.translateOneWay(translation, locale, highlight);
    translation = this.translateSpelling(translation, locale, highlight);
    translation = this.translateTitles(translation, locale, highlight);
    translation = this.translateTime(translation, locale, highlight);

    return translation;
  }

  replaceAll(input, search, replacement) {
    /**
     *
     * (?<=[^a-zA-Z-]|^): This is a positive lookbehind assertion (?<=...),
     * which asserts that what precedes the current position in the string
     * is either a character that is not in the range a-z or A-Z or a hyphen -,
     * [^a-zA-Z-], or the beginning of the string ^.
     * This ensures that the match occurs only if it's not preceded by
     * an alphabet character or a hyphen.
     * This part is non-capturing, meaning it doesn't count as part of the match.
     *
     * (?=[^a-zA-Z]): This is a positive lookahead assertion (?=...),
     * which asserts that what follows the current position in the string
     * is not an alphabet character. Similar to the lookbehind assertion,
     * this ensures that the match occurs only if it's not followed by
     * an alphabet character.
     */
    return input.replace(
      new RegExp(`(?<=[^a-zA-Z-]|^)${search}(?=[^a-zA-Z])`, 'ig'),
      replacement,
    );
  }

  translateOneWay(translation, locale, highlight) {
    let words = (locale === Translator.LOCALE__AMERICAN_TO_BRITISH)
      ? americanOnly
      : britishOnly;

    for (let word in words) {
      let replacement = words[word];

      if (highlight) {
        replacement = '<span class="highlight">' + replacement + '</span>';
      }

      translation = this.replaceAll(translation, word, replacement);
    }

    return translation;
  }

  translateSpelling(translation, locale, highlight) {
    let words = americanToBritishSpelling;

    for (let word in words) {
      let search = (locale === Translator.LOCALE__AMERICAN_TO_BRITISH)
        ? word
        : words[word];
      let replacement = (locale === Translator.LOCALE__AMERICAN_TO_BRITISH)
        ? words[word]
        : word;

      if (highlight) {
        replacement = '<span class="highlight">' + replacement + '</span>';
      }

      translation = this.replaceAll(translation, search, replacement);
    }

    return translation;
  }

  // The route should also handle the way titles/honorifics
  // are abbreviated in American and British English.
  // For example, Doctor Wright is abbreviated as "Dr Wright"
  // in British English and "Dr. Wright" in American English.
  translateTitles(translation, locale, highlight) {
    let words = americanToBritishTitles;

    for (let word in words) {
      let search = (locale === Translator.LOCALE__AMERICAN_TO_BRITISH)
        ? word
        : words[word];
      let replacement = (locale === Translator.LOCALE__AMERICAN_TO_BRITISH)
        ? words[word]
        : word;

      if (highlight) {
        replacement = '<span class="highlight">' +
          replacement.charAt(0).toUpperCase() +
          replacement.slice(1) +
          '</span>';
      } else {
        replacement = replacement.charAt(0).toUpperCase() +
          replacement.slice(1);
      }

      translation = this.replaceAll(translation, search, replacement);
    }

    return translation;
  }

  // The route should handle the way time is written in American and
  // British English.
  // For example, ten thirty is written as "10.30" in British English
  // and "10:30" in American English.
  translateTime(translation, locale, highlight) {
    let search = (locale === Translator.LOCALE__AMERICAN_TO_BRITISH)
      ? ':'
      : '.';
    let replacement = (locale === Translator.LOCALE__AMERICAN_TO_BRITISH)
      ? '.'
      : ':';

    /**
     * \\d: This matches any digit from 0 to 9.
     *
     * \\d\\d?: This matches one or two digits. The ? quantifier makes
     * the second \d optional, allowing for one or two digits.
     *
     * \\d{2}: This matches exactly two digits.\
     */
    let regex = new RegExp(`\\d\\d?[${search}]\\d{2}`, 'gi');
    let matches = translation.match(regex);
    for (let i in matches) {
      let word = matches[i];
      let newWord = word.replace(
        new RegExp(`(?<=\\d\\d?)[${search}](?=\\d{2})`, 'gi'),
        replacement,
      );

      if (highlight) {
        newWord = '<span class="highlight">' + newWord + '</span>';
      }

      translation = translation.replace(word, newWord);
    }

    return translation;
  }
}

module.exports = Translator;

