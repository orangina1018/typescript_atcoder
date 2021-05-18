/*
/問題概要】
/500 円玉を A枚、100 円玉を B枚、50 円玉を C枚持っています。これらの硬貨の中から何枚かを選び、合計金額をちょうど X円にする方法は何通りあるでしょうか？

/【制約】

/ 0≤A,B,C≤50
/ A+B+C≥1
/ 50≤X≤20000
/ A,B,Cは整数である
/ X は 50 の倍数である

/【数値例】
/1)
/　A=2
/　B=2
/　C=2
/　X=100
/　答え: 2
/条件を満たす選び方は以下の 2 通りです。

/500 円玉を 0 枚、100 円玉を 1 枚、50 円玉を 0 枚選ぶ
/500 円玉を 0 枚、100 円玉を 0 枚、50 円玉を 2 枚選ぶ

*/

import * as fs from 'fs';

function main(input: string) {
  // ここに処理を書く
  var A: string = input.split('\n')[0];
  var A_number: number = +A;
  //console.log(A);

  var B: string = input.split('\n')[1];
  var B_number: number = +B;
  //console.log(B);

  var C: string = input.split('\n')[2];
  var C_number: number = +C;
  //console.log(C);

  var X: string = input.split('\n')[3];
  var X_number: number = +X;
  //console.log(X);

  var count: number = 0;

  for (var a: number = 0; a <= A_number; ++a) {
    for (var b: number = 0; b <= B_number; ++b) {
      for (var c: number = 0; c <= C_number; ++c) {
        if (500 * a + 100 * b + 50 * c == X_number) {
          count += 1;
        }
      }
    }
  }
  console.log(count);
}
main(fs.readFileSync('input_file/file4.txt', 'utf8'));
