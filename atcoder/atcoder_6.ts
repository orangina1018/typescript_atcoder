/*
/【問題概要】
/ NN 枚のカードがあり、i 枚目のカードには ai という数が書かれています。
/ Alice と Bob はこれらのカードを使ってゲームを行います。ゲームでは 2 人が交互に 1 枚ずつカードを取っていきます。Alice が先にカードを取ります。
/ 2 人がすべてのカードを取ったときゲームは終了し、取ったカードの数の合計がその人の得点になります。2 人とも自分の得点を最大化するように最適戦略をとったとき、Alice は Bob より何点多くの得点を獲得できるかを求めてください。

/【制約】

/ N は 1 以上 100 以下の整数
/ ai は 1 以上 100 以下の整数
/【数値例】
/1)
/　N=3
/　a=(2,7,4)
/　答え: 5

/ 以下が最適です:
/ 1 ターン目: Alice が 7 を取る
/ 2 ターン目: Bob が 4 を取る
/ 3 ターン目: Alice が 2 を取る
/ Alice は 7 + 2 = 9 点、Bob は 4 点を獲得するので、その差は 9 - 4 = 5 点です。

*/

import * as fs from 'fs';

function main(input: string) {
  let N: string = input.split('\n')[0];
  let N_number: number = +N;
  //console.log(N);

  let a: string[] = input.split('\n')[1].split(',');
  let a_number_array: number[] = a.map(Number);
  //console.log(a);

  a_number_array.sort((x: number, y: number) => x - y);
  //console.log(a_number);
  a_number_array.reverse();
  //console.log(a_number);

  let alice_hand: number = 0;
  let bob_hand: number = 0;

  //console.log(a_number.length);
  for (let i: number = 0; i < a_number_array.length; i++) {
    if (i % 2 == 0) {
      alice_hand += a_number_array[i];
      //console.log(alice_hand);
    } else {
      bob_hand += a_number_array[i];
      //console.log(bob_hand);
    }
  }
  const left: number = alice_hand - bob_hand;
  console.log(left);
}
main(fs.readFileSync('input_file/file6.txt', 'utf8'));
