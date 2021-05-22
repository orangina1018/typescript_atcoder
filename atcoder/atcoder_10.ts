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

/*【質問】
//43行目のコードが何故[0][0]からじゃなくて、[0][1]から入るのかが謎
*/

import * as fs from 'fs';

//入力を考える関数
function main(input: string) {
  let N: string = input.split('\n')[0];
  let N_number: number = Number(N);
  console.log(N_number);

  let A_array_number: number[][] = [[0, 0, 0]];
  for (let i: number = 0; ++i; ) {
    if (input.split('\n')[i] == undefined) {
      break;
    } else {
      let A: string = input.split('\n')[i];
      //以下コードが何故[0][0]からじゃなくて、[0][1]から入るのかが謎
      A_array_number[i] = A.split(' ').map(Number);
    }
    console.log(A_array_number);
  }

  let t: number[] = [];
  let x: number[] = [];
  let y: number[] = [];

  for (let i: number = 0; i < A_array_number.length; ++i) {
    t[i] = A_array_number[i][0];
    x[i] = A_array_number[i][1];
    y[i] = A_array_number[i][2];
  }
  console.log(t);
  console.log(x);
  console.log(y);

  let canReach: boolean = false;
  for (let i: number = 0; i < N_number; ++i) {
    let dt = t[i + 1] - t[i];
    let dist = Math.abs(x[i + 1] - x[i]) + Math.abs(y[i + 1] - y[i]);
    if (dist <= dt && dt % 2 == dist % 2) {
      canReach = true;
    }
  }
  if (canReach) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

main(fs.readFileSync('input_file/file10.txt', 'utf8'));
