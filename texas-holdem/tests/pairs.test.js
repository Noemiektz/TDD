const Card = require('../src/card');
const { evaluate5 } = require('../src/handcard');

test('One pair beats high card', () => {
  const pair = ['AS','AD','KC','9H','2D'].map(Card.from);
  const high = ['KS','QD','JC','9H','8D'].map(Card.from);

  expect(evaluate5(pair).category).toBe(8);
  expect(evaluate5(high).category).toBe(9);
});
