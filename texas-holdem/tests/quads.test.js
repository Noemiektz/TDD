test('Quads', ()=>{
  const h = evaluate5(['7S','7D','7H','7C','AS'].map(Card.from));
  expect(h.tiebreak).toEqual([7,14]);
});
