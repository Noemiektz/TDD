function evaluate5(cards){
  const ranks = cards.map(c=>c.rank).sort((a,b)=>b-a);
  return { category:9, tiebreak:ranks, cards };
}

module.exports = { evaluate5 };
