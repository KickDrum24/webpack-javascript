import * as u from '../lib/ke-utils';

u.p(randFace());

function randFace(){
    return["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand(0, 5)];
}

function rand(m, n){
    let a = m + Math.floor((n - m + 1) * Math.random());
    u.wval("rand returned:", a);
    return a;
}
