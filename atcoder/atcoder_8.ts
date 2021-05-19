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

import * as fs from "fs";

//入力を考える関数
function main(input: string) {
  const N: string = input.split("\n")[0];
  const N_number: number = Number(N);
  //console.log(N_number);

  const Y: string = input.split("\n")[1];
  const Y_number: number = Number(Y);
  //console.log(Y_number);

  let res10000: number = -1;
  let res5000: number = -1;
  let res1000: number = -1;

  for (let a: number = 0; a <= N_number; ++a) {
    for (let b: number = 0; b <= N_number - a; ++b) {
      let c: number = N_number - a - b;
      let amountOfmoney: number = 10000 * a + 5000 * b + 1000 * c;
      if (amountOfmoney === Y_number) {
        res10000 = a;
        res5000 = b;
        res1000 = c;

        console.log(String(Array(a, b, c)));
      }
    }
  }
}

main(fs.readFileSync("input_file/file8.txt", "utf8"));
