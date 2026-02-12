test('Full house', ()=>{
  const h = evaluate5(['AS','AD','AH','KC','KD'].map(Card.from));
  expect(h.category).toBe(3);
});

