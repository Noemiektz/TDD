const Card = require('../src/card');
const { evaluate5 } = require('../src/handcard');

test('One pair beats high card', () => {
  const pair = ['AS','AD','KC','9H','2D'].map(Card.from);
  const high = ['KS','QD','JC','9H','8D'].map(Card.from);

  expect(evaluate5(pair).category).toBe(8);
  expect(evaluate5(high).category).toBe(9);
});

test('Two pair AA KK', () => {
  const h = evaluate5(['AS','AD','KC','KD','2D'].map(Card.from));
  expect(h.category).toBe(7);
  expect(h.tiebreak).toEqual([14,13,2]);
});

test('Three of a kind', ()=>{
  const h = evaluate5(['AS','AD','AH','KC','2D'].map(Card.from));
  expect(h.category).toBe(6);
});


