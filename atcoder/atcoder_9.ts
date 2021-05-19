/*
【問題概要】
英小文字からなる文字列 S が与えられます。
T が空文字列である状態から始めて、以下の操作を好きな回数繰り返すことで S=Tとすることができるか判定してください。

TT の末尾に "dream", "dreamer", "erase", "eraser" のいずれかを追加する。

【制約】
1≤|S|≤105
S は英小文字からなる

【数値例】
1)
　S = "dreameraser"
　答え: "YES"

"dream", "eraser" の順で TT の末尾に追加することで S=T とすることができます。
*/

import * as fs from 'fs';

//入力を考える関数
function main(input: string) {
  // ここに処理を書く
  let N: string = input.split('\n')[0];
  let N_number: number = +N;
  console.log(N);

  let A: string = input.split('\n')[1];
  let A_number: number = +A;
  console.log(A);

  let B: string = input.split('\n')[2];
  let B_number: number = +B;
  console.log(B);

  sumMain(N_number, A_number, B_number);
}

//格桁の総和を求める
function sumDigitnumber(X: number): number {
  let remainder: number = 0;
  X = 0;

  while (X > 0) {
    remainder += X % 10;
    X /= 10;
  }
  let sum = remainder;
  return sum;
}

console.log();

function sumMain(N_number: number, A_number: number, B_number: number): void {
  let ans_total_number: number = 0;
  for (let i = 1; i <= N_number; ++i) {
    let sum = sumDigitnumber(i);
    if (sum >= A_number && sum <= B_number) {
      ans_total_number += i;
    }
  }
  return console.log(ans_total_number);
}

main(fs.readFileSync('input_file/file5.txt', 'utf8'));
