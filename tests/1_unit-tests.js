const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  // Translate `Mangoes are my favorite fruit.` to British English
  test('Translate `Mangoes are my favorite fruit.` to British English', () => {
    assert.equal(
      translator.translate(
        'Mangoes are my favorite fruit.',
        Translator.LOCALE__AMERICAN_TO_BRITISH
      ),
      'Mangoes are my favourite fruit.'
    );
  });

  // Translate `I ate yogurt for breakfast.` to British English
  test('Translate `I ate yogurt for breakfast.` to British English', () => {
    assert.equal(
      translator.translate(
        'I ate yogurt for breakfast.',
        Translator.LOCALE__AMERICAN_TO_BRITISH
      ),
      'I ate yoghurt for breakfast.'
    );
  });

  // Translate `We had a party at my friend's condo.` to British English
  test('Translate `We had a party at my friend\'s condo.` to British English',
    () => {
      assert.equal(
        translator.translate(
          'We had a party at my friend\'s condo.',
          Translator.LOCALE__AMERICAN_TO_BRITISH
        ),
        'We had a party at my friend\'s flat.'
      );
    });

  // Translate `Can you toss this in the trashcan for me?` to British English
  test(
    'Translate `Can you toss this in the trashcan for me?` to British English',
    () => {
      assert.equal(
        translator.translate(
          'Can you toss this in the trashcan for me?',
          Translator.LOCALE__AMERICAN_TO_BRITISH
        ),
        'Can you toss this in the bin for me?'
      );
    });

  // Translate `The parking lot was full.` to British English
  test('Translate `The parking lot was full.` to British English', () => {
    assert.equal(
      translator.translate(
        'The parking lot was full.',
        Translator.LOCALE__AMERICAN_TO_BRITISH
      ),
      'The car park was full.'
    );
  });

  // Translate `Like a high tech Rube Goldberg machine.` to British English
  test('Translate `Like a high tech Rube Goldberg machine.` to British English', () => {
    assert.equal(
      translator.translate(
        'Like a high tech Rube Goldberg machine.',
        Translator.LOCALE__AMERICAN_TO_BRITISH
      ),
      'Like a high tech Heath Robinson device.'
    );
  });

  // Translate `To play hooky means to skip class or work.` to British English
  test('Translate `To play hooky means to skip class or work.` to British English', () => {
    assert.equal(
      translator.translate(
        'To play hooky means to skip class or work.',
        Translator.LOCALE__AMERICAN_TO_BRITISH
      ),
      'To bunk off means to skip class or work.'
    );
  });

  // Translate `No Mr. Bond, I expect you to die.` to British English
  test('Translate `No Mr. Bond, I expect you to die.` to British English', () => {
    assert.equal(
      translator.translate(
        'No Mr. Bond, I expect you to die.',
        Translator.LOCALE__AMERICAN_TO_BRITISH
      ),
      'No Mr Bond, I expect you to die.'
    );
  });

  // Translate `Dr. Grosh will see you now.` to British English
  test('Translate `Dr. Grosh will see you now.` to British English', () => {
    assert.equal(
      translator.translate(
        'Dr. Grosh will see you now.',
        Translator.LOCALE__AMERICAN_TO_BRITISH
      ),
      'Dr Grosh will see you now.'
    );
  });

  // Translate `Lunch is at 12:15 today.` to British English
  test('Translate `Lunch is at 12:15 today.` to British English', () => {
    assert.equal(
      translator.translate(
        'Lunch is at 12:15 today.',
        Translator.LOCALE__AMERICAN_TO_BRITISH
      ),
      'Lunch is at 12.15 today.'
    );
  });

  // Translate `We watched the footie match for a while.` to American English
  test('Translate `We watched the footie match for a while.` to American English', () => {
    assert.equal(
      translator.translate(
        'We watched the footie match for a while.',
        Translator.LOCALE__BRITISH_TO_AMERICAN
      ),
      'We watched the soccer match for a while.'
    );
  });

  // Translate `Paracetamol takes up to an hour to work.` to American English
  test('Translate `Paracetamol takes up to an hour to work.` to American English', () => {
    assert.equal(
      translator.translate(
        'Paracetamol takes up to an hour to work.',
        Translator.LOCALE__BRITISH_TO_AMERICAN
      ),
      'Tylenol takes up to an hour to work.'
    );
  });

  // Translate `First, caramelise the onions.` to American English
  test('Translate `First, caramelise the onions.` to American English', () => {
    assert.equal(
      translator.translate(
        'First, caramelise the onions.',
        Translator.LOCALE__BRITISH_TO_AMERICAN
      ),
      'First, caramelize the onions.'
    );
  });

  // Translate `I spent the bank holiday at the funfair.` to American English
  test('Translate `I spent the bank holiday at the funfair.` to American English', () => {
    assert.equal(
      translator.translate(
        'I spent the bank holiday at the funfair.',
        Translator.LOCALE__BRITISH_TO_AMERICAN
      ),
      'I spent the public holiday at the carnival.'
    );
  });

  // Translate `I had a bicky then went to the chippy.` to American English
  test('Translate `I had a bicky then went to the chippy.` to American English', () => {
    assert.equal(
      translator.translate(
        'I had a bicky then went to the chippy.',
        Translator.LOCALE__BRITISH_TO_AMERICAN
      ),
      'I had a cookie then went to the fish-and-chip shop.'
    );
  });

  // Translate `I've just got bits and bobs in my bum bag.` to American English
  test('Translate `I\'ve just got bits and bobs in my bum bag.` to American English', () => {
    assert.equal(
      translator.translate(
        'I\'ve just got bits and bobs in my bum bag.',
        Translator.LOCALE__BRITISH_TO_AMERICAN
      ),
      'I\'ve just got odds and ends in my fanny pack.'
    );
  });

  // Translate `The car boot sale at Boxted Airfield was called off.` to American English
  test('Translate `The car boot sale at Boxted Airfield was called off.` to American English', () => {
    assert.equal(
      translator.translate(
        'The car boot sale at Boxted Airfield was called off.',
        Translator.LOCALE__BRITISH_TO_AMERICAN
      ),
      'The swap meet at Boxted Airfield was called off.'
    );
  });

  // Translate `Have you met Mrs Kalyani?` to American English
  test('Translate `Have you met Mrs Kalyani?` to American English', () => {
    assert.equal(
      translator.translate(
        'Have you met Mrs Kalyani?',
        Translator.LOCALE__BRITISH_TO_AMERICAN
      ),
      'Have you met Mrs. Kalyani?'
    );
  });

  // Translate `Prof Joyner of King's College, London.` to American English
  test('Translate `Prof Joyner of King\'s College, London.` to American English', () => {
    assert.equal(
      translator.translate(
        'Prof Joyner of King\'s College, London.',
        Translator.LOCALE__BRITISH_TO_AMERICAN
      ),
      'Prof. Joyner of King\'s College, London.'
    );
  });

  // Translate `Tea time is usually around 4 or 4.30.` to American English
  test('Translate `Tea time is usually around 4 or 4.30.` to American English', () => {
    assert.equal(
      translator.translate(
        'Tea time is usually around 4 or 4.30.',
        Translator.LOCALE__BRITISH_TO_AMERICAN
      ),
      'Tea time is usually around 4 or 4:30.');
  });

  // Highlight translation in `Mangoes are my favorite fruit.`
  test('Highlight translation in `Mangoes are my favorite fruit.`', () => {
    assert.equal(
      translator.translate(
        'Mangoes are my favorite fruit.',
        Translator.LOCALE__AMERICAN_TO_BRITISH,
        true
      ),
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });

  // Highlight translation in `I ate yogurt for breakfast.`
  test('Highlight translation in `I ate yogurt for breakfast.`', () => {
    assert.equal(
      translator.translate(
        'I ate yogurt for breakfast.',
        Translator.LOCALE__AMERICAN_TO_BRITISH,
        true
      ),
      'I ate <span class="highlight">yoghurt</span> for breakfast.'
    );
  });

  // Highlight translation in `We watched the footie match for a while.`
  test('Highlight translation in `We watched the footie match for a while.`', () => {
    assert.equal(
      translator.translate(
        'We watched the footie match for a while.',
        Translator.LOCALE__BRITISH_TO_AMERICAN,
        true
      ),
      'We watched the <span class="highlight">soccer</span> match for a while.'
    );
  });

  // Highlight translation in `Paracetamol takes up to an hour to work.`
  test('Highlight translation in `Paracetamol takes up to an hour to work.`', () => {
    assert.equal(
      translator.translate(
        'Paracetamol takes up to an hour to work.',
        Translator.LOCALE__BRITISH_TO_AMERICAN,
        true
      ),
      '<span class="highlight">Tylenol</span> takes up to an hour to work.'
    );
  });
});
