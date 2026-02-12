test('Wheel straight A2345', ()=>{
  const h = evaluate5(['AS','2D','3H','4S','5C'].map(Card.from));
  expect(h.tiebreak).toEqual([5]);
});
