const Card = require('../src/card');
const { evaluate5 } = require('../src/highcard');

test('High card AK952', () => {
  const cards = ['AS','KD','9H','5C','2D'].map(Card.from);
  const h = evaluate5(cards);

  expect(h.category).toBe(9);
  expect(h.tiebreak).toEqual([14,13,9,5,2]);
});
