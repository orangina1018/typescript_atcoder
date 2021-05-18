/*
/【問題概要】
/黒板に N個の正の整数 A1,…,ANが書かれています。
/すぬけ君は，黒板に書かれている整数がすべて偶数であるとき，次の操作を行うことができます。

/黒板に書かれている整数すべてを，2で割ったものに置き換える。
/すぬけ君は最大で何回操作を行うことができるかを求めてください。

/【制約】

/1≤N≤200
/1≤Ai≤109
/【数値例】
/1)
/　N=3
/　A=(16,12,24)
/　答え: 2
*/

import * as fs from 'fs';

function main(input: string) {
  var N_input: string = input.split('\n')[0];
  var N: number = +N_input;
  //console.log(N);
  var A: string[] = input.split('\n')[1].split(' ');
  var A_number: number[] = A.map(Number);
  //console.log(A);

  for (var i: number = 0; i < N; i++) {
    var count: number = 0;
    while (true) {
      var exist_odd_flg: boolean = false;
      for (var i: number = 0; i < N; i++) {
        if (A_number[i] % 2 != 0) {
          exist_odd_flg = true;
        }
      }

      if (exist_odd_flg == true) {
        break;
      }

      for (var i: number = 0; i < N; i++) {
        A_number[i] /= 2;
      }
      //console.log(A_number);
      count += 1;
    }
    console.log(count);
  }
}
main(fs.readFileSync('input_file/file3.txt', 'utf8'));
