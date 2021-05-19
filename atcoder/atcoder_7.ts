/*
// N 個の整数 d[0],d[1],…,d[N−1]d[0],d[1],…,d[N−1] が与えられます。
// この中に何種類の異なる値があるでしょうか？
// (原問題文をかなり意訳していますが、題意はこういうことです)

// 【制約】

// 1≤N≤100
// 1≤d[i]≤100
// 入力値はすべて整数

// 【数値例】
// 1)
// 　N=4
// 　Q=3
// 　d=(8,10,8,6)
// 　答え: 3
// 6, 8, 10 の 3 種類です。
*/

import * as fs from "fs";

function main(input: string) {
  const N: string = input.split("\n")[0];
  const N_number: number = Number(N);
  //console.log(N);

  const Q: string = input.split("\n")[1];
  const Q_number: number = Number(Q);
  //console.log(Q);

  const d: string[] = input.split("\n")[2].split(",");
  const d_number_array: number[] = d.map(Number);
  //console.log(d_number_array);

  let num_array: number[] = Array(100).fill(0);
  //console.log(num)
  for (let i: number = 0; i < N_number; ++i) {
    num_array[d_number_array[i]]++;
    //console.log(num)
  }
  let res = 0;
  for (let i: number = 1; i <= 100; ++i) {
    if (num_array[i] > 0) {
      ++res;
    }
  }
  console.log(res);
}
main(fs.readFileSync("input_file/file7.txt", "utf8"));
