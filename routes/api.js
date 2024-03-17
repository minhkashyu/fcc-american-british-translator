'use strict';

const Translator = require('../components/translator.js');

module.exports = function(app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let locale = req.body.locale;
      let text = req.body.text;

      // If one or more of the required fields is missing,
      // return `{ error: 'Required field(s) missing' }`
      if (locale === undefined
        || text === undefined
      ) {
        return res.json({error: 'Required field(s) missing'});
      }

      // If `text` is empty, return `{ error: 'No text to translate' }`
      if (!text) {
        return res.json({error: 'No text to translate'});
      }

      // If `locale` does not match one of the two specified locales,
      // return `{ error: 'Invalid value for locale field' }`
      if ([
        Translator.LOCALE__AMERICAN_TO_BRITISH,
        Translator.LOCALE__BRITISH_TO_AMERICAN,
      ].indexOf(locale) === -1) {
        return res.json({error: 'Invalid value for locale field'});
      }

      let translation = translator.translate(text, locale, true);

      // If `text` requires no translation, return
      // `"Everything looks good to me!"` for the `translation` value.
      if (translation === text) {
        translation = 'Everything looks good to me!';
      }

      return res.json({
        translation: translation,
        text: text,
      });
    });
};
