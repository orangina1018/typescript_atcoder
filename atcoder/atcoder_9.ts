/*
【問題概要】
英小文字からなる文字列 S が与えられます。
T が空文字列である状態から始めて、以下の操作を好きな回数繰り返すことで S=Tとすることができるか判定してください。

T の末尾に "dream", "dreamer", "erase", "eraser" のいずれかを追加する。

【制約】
1≤|S|≤105
S は英小文字からなる

【数値例】
1)
　S = "dreameraser"
　答え: "YES"

"dream", "eraser" の順で T の末尾に追加することで S=T とすることができます。
*/

import { reverse } from 'dns';
import * as fs from 'fs';

//入力を考える関数
function main(input: string) {
  // ここに処理を書く
  let S: string = input.split('\n')[0];
  //console.log(S);

  const string_divide_array: string[] = ['dream', 'dreamer', 'erase', 'eraser'];

  let re_reverse_string_divide_array: string[] = [];

  for (let i = 0; i < string_divide_array.length; ++i) {
    let str: string = string_divide_array[i];
    let re_str: string = reverseString(str);
    re_reverse_string_divide_array.push(re_str);
  }
  //console.log(re_reverse_string_divide_array);

  const re_S: string = reverseString(S);
  //console.log(re_S);

  function reverseString(str: string): string {
    return str.split('').reverse().join('');
  }

  let canShare: Boolean = true;
  for (let i: number = 0; i < S.length; ) {
    let canShare2: Boolean = false;
    for (let j: number = 0; j < 4; ++j) {
      let d: string = re_reverse_string_divide_array[j];
      //console.log(d)
      //console.log(d.length)
      if (re_S.substr(i, d.length) == d) {
        //console.log(d)
        canShare2 = true;
        //console.log(i + d.length);
        i += d.length;
      }
    }
    if (!canShare2) {
      canShare = false;
      break;
    }
  }

  if (canShare == true) {
    console.log('YES');
  }
  if (canShare == false) {
    console.log('NO');
  }

  /*
  if (canShare) {
    console.log('YES');
  } if (!canShare){
    console.log('NO');
  }
  */

  //67-71行目 or 75-78行目で書くのかどっちが自然ですか？
}

main(fs.readFileSync('input_file/file9.txt', 'utf8'));
