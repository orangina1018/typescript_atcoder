/*
// 【問題概要】
// 10000 円札と、5000 円札と、1000 円札が合計で N 枚あって、合計金額が Y 円であったという。このような条件を満たす各金額の札の枚数の組を 1 つ求めなさい。そのような状況が存在し得ない場合には -1 -1 -1 と出力しなさい。

// 【制約】
// 1≤N≤2000
// 1000≤Y≤2∗107
// N は整数
// Y は 1000 の倍数

// 【数値例】
// 1)
// 　N=9
// 　Y=45000
// 　答え: (4,0,5)など

// 10000 円札 4 枚と 1000 円札 5 枚で、合計枚数が 9 枚、合計金額が 45000 円になります。他の答えもあります。

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
