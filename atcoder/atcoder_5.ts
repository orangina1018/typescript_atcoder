/*

/【問題概要】
/ 1 以上 N 以下の整数のうち、10 進法で各桁の和が A 以上 B 以下であるものについて、総和を求めてください。

/【制約】

/ 1≤N≤10^4
/ 1≤A≤B≤36
/ 入力はすべて整数

/【数値例】
/1)
/　N=20
/　A=2
/　B=5
/　答え: 84
/20 以下の整数のうち、各桁の和が 2 以上 5 以下なのは、2, 3, 4, 5, 11, 12, 13, 14, 20 です。これらの合計である 84 を出力します。

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
  
  sumMain(N_number, A_number, B_number)
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

console.log()

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
