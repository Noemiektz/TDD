test('Flush', ()=>{
  const h = evaluate5(['AH','JH','9H','6H','4H'].map(Card.from));
  expect(h.category).toBe(4);
});
