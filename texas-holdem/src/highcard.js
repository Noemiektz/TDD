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

if(groups[0].count===2 && groups[1].count===2){
  const high = Math.max(groups[0].rank, groups[1].rank);
  const low = Math.min(groups[0].rank, groups[1].rank);
  const kicker = groups.find(g=>g.count===1).rank;
  return {category:7, tiebreak:[high,low,kicker], cards};
}

if(groups[0].count===3){
  const kickers = groups.filter(g=>g.count===1).map(g=>g.rank).sort((a,b)=>b-a);
  return {category:6, tiebreak:[groups[0].rank,...kickers], cards};
}


  return { category:9, tiebreak:ranks, cards };
}

function countRanks(ranks){
  const map = {};
  ranks.forEach(r => map[r] = (map[r]||0)+1);
  return map;
}

function isStraight(ranks){
  const uniq=[...new Set(ranks)].sort((a,b)=>b-a);
  if(uniq[0]===14) uniq.push(1);
  for(let i=0;i<=uniq.length-5;i++){
    if(uniq[i]-uniq[i+4]===4) return uniq[i]===5?5:uniq[i];
  }
  return null;
}

const suits = cards.map(c=>c.suit);
const flushSuit = suits.find(s=>suits.filter(x=>x===s).length>=5);

if(flushSuit){
  return {category:4, tiebreak:ranks.sort((a,b)=>b-a), cards};
}

module.exports = { evaluate5, countRanks, isStraight };
