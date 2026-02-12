test('A♠ is rank 14 spade', () => {
  const c = Card.from('AS');
  expect(c.rank).toBe(14);
  expect(c.suit).toBe('S');
});
