/*

【問題概要】
シカの AtCoDeer くんは二次元平面上で旅行をしようとしています。AtCoDeer くんの旅行プランでは、時刻 00 に 点 (0,0)を出発し、1 以上 N 以下の各 i に対し、時刻 ti に 点 (xi,yi) を訪れる予定です。

AtCoDeer くんが時刻 t に 点 (x,y) にいる時、 時刻 t+1 には 点 (x+1,y),(x−1,y),(x,y+1),(x,y−1) のうちいずれかに存在することができます。その場にとどまることは出来ないことに注意してください。AtCoDeer くんの旅行プランが実行可能かどうか判定してください。

【制約】

1≤N≤105
0≤xi,yi≤105
1≤ti≤ti+1≤105
入力はすべて整数

【数値例】
1)
　N=2
　(t,x,y)=(3,1,2),(6,1,1)
　答え: "Yes"

例えば (0,0),(0,1),(1,1),(1,2),(1,1),(1,0),(1,1) と移動すれば目的を果たせます。
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
