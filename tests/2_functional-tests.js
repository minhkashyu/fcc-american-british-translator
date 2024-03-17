const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Functional Tests', () => {
  // Translation with text and locale fields: POST request to `/api/translate`
  test(
    'Translation with text and locale fields: POST request to `/api/translate`',
    (done) => {
      chai
        .request(server)
        .post('/api/translate')
        .send({
          locale: Translator.LOCALE__AMERICAN_TO_BRITISH,
          text: 'Mangoes are my favorite fruit.',
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.text, 'Mangoes are my favorite fruit.');
          assert.equal(
            res.body.translation,
            'Mangoes are my <span class="highlight">favourite</span> fruit.',
          );
          done();
        });
    });

  // Translation with text and invalid locale field: POST request to `/api/translate`
  test(
    'Translation with text and invalid locale field: POST request to `/api/translate`',
    (done) => {
      chai
        .request(server)
        .post('/api/translate')
        .send({
          locale: 'british-to-nothing',
          text: 'Mangoes are my favorite fruit.',
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, 'Invalid value for locale field');
          done();
        });
    });

  // Translation with missing text field: POST request to `/api/translate`
  test(
    'Translation with missing text field: POST request to `/api/translate`',
    (done) => {
      chai
        .request(server)
        .post('/api/translate')
        .send({
          locale: Translator.LOCALE__AMERICAN_TO_BRITISH,
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, 'Required field(s) missing');
          done();
        });
    });

  // Translation with missing locale field: POST request to `/api/translate`
  test(
    'Translation with missing locale field: POST request to `/api/translate`',
    (done) => {
      chai
        .request(server)
        .post('/api/translate')
        .send({
          text: 'Mangoes are my favorite fruit.',
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, 'Required field(s) missing');
          done();
        });
    });

  // Translation with empty text: POST request to `/api/translate`
  test(
    'Translation with empty text: POST request to `/api/translate`',
    (done) => {
      chai
        .request(server)
        .post('/api/translate')
        .send({
          locale: Translator.LOCALE__AMERICAN_TO_BRITISH,
          text: '',
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, 'No text to translate');
          done();
        });
    });

  // Translation with text that needs no translation: POST request to `/api/translate`
  test(
    'Translation with text that needs no translation: POST request to `/api/translate`',
    (done) => {
      chai
        .request(server)
        .post('/api/translate')
        .send({
          locale: Translator.LOCALE__AMERICAN_TO_BRITISH,
          text: 'He is eating fruit.',
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.text, 'He is eating fruit.');
          assert.equal(res.body.translation,'Everything looks good to me!');
          done();
        });
    });
});
