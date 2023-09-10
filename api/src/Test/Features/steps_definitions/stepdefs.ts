import { Then, When } from '@cucumber/cucumber';
import assert from 'assert';
import { spec } from 'pactum';

let response: { status: number; body: string };

When('I made a request to {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  response = await spec().get(string);
});
Then('The response status is {int}', function (int) {
  // Then('The response status is {float}', function (float) {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(response.status, int);
});
Then('The body response should be:', function (docString) {
  // Write code here that turns the phrase above into concrete actions
  return docString;
});
