import api from './api';
import { log } from '../lib/ke-utils';

function round2Decimals(num) {
    // A very stupid way to do it

    num = (typeof num === 'number') ? num.toString() : num;
    let idx = num.indexOf('.');
    log('idx', idx);
    if (!idx) {
      return num;
    }
    let left = num.substring(0, idx);
    log('left', left);
    let right = num.substring(idx+1, num.length);
    log('right', right);
    if (right.length > 2) {

      let thirdChar = right.substring(2,3);
      log('thirdChar', thirdChar);
      right = right.substring(0,2);
      if (Number(thirdChar) >= 5) {
        let n = Number(right);
        log('n', n);
        right = Number(right) + 1;
        log('right', right);
        right = right.toString()
      }
    }

    log('num', num);
    log('left', left);
    log('right', right);
    log('new num', `${left}.${right}`);
}

round2Decimals(223.516);
