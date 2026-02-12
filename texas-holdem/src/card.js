class Card {
  constructor(rank, suit) { this.rank = rank; this.suit = suit; }

  static from(txt) {
    const map = {A:14,K:13,Q:12,J:11,T:10};
    const r = txt[0];
    const s = txt[1];
    return new Card(map[r] || parseInt(r), s);
  }
}
module.exports = Card;
