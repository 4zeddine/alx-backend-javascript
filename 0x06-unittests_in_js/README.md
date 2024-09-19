# Unittests in JS

This project covers creating unittests in NodeJS.

## Learning Objectives

- Use Mocha for test suites
- Use assertion libraries (Node or Chai)
- Present long test suites
- Use spies and stubs
- Implement hooks
- Unit test async functions
- Write integration tests for a small Node server

## Tasks

0. Basic test with Mocha and Node assertion library
1. Combining descriptions
2. Basic test using Chai assertion library
3. Spies
4. Stubs
5. Hooks
6. Async tests with done
7. Skip
8. Basic Integration testing
9. Regex integration testing
10. Deep equality & Post integration testing

## Resources

- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://github.com/request/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs)


## Project Structure

- `0-calcul.js` / `0-calcul.test.js`: Basic calculator function and tests
- `1-calcul.js` / `1-calcul.test.js`: Extended calculator function and tests
- `2-calcul_chai.js` / `2-calcul_chai.test.js`: Chai assertion tests
- `3-payment.js` / `3-payment.test.js`: Spy tests
- `4-payment.js` / `4-payment.test.js`: Stub tests
- `5-payment.js` / `5-payment.test.js`: Hook tests
- `6-payment_token.js` / `6-payment_token.test.js`: Async tests
- `7-skip.test.js`: Skipping tests
- `8-api/`, `9-api/`, `10-api/`: Integration test folders
