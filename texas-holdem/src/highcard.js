function evaluate5(cards){
  const ranks = cards.map(c=>c.rank).sort((a,b)=>b-a);
  const counts = countRanks(ranks);

const groups = Object.entries(counts)
  .map(([r,c])=>({rank:+r,count:c}))
  .sort((a,b)=>b.count-a.count || b.rank-a.rank);

if(groups[0].count === 2){
  const kickers = groups.filter(g=>g.count===1)
                        .map(g=>g.rank)
                        .sort((a,b)=>b-a);
  return {category:8, tiebreak:[groups[0].rank,...kickers], cards};
}

  return { category:9, tiebreak:ranks, cards };
}

function countRanks(ranks){
  const map = {};
  ranks.forEach(r => map[r] = (map[r]||0)+1);
  return map;
}


module.exports = { evaluate5, countRanks };
