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

import * as fs from "fs";

//入力を考える関数
function main(input: string) {
  let N: string = input.split("\n")[0];
  let N_number: number = Number(N);
  console.log(N_number);

  // 後で訂正
  let A_array: string[] = input.split("\n")[1].split(",");
  let A_number_array: number = Number(A_array);
  console.log(A_number_array);


  let t[0] : number[] = 0;
  let x[0] : number[] = 0;
  let y[0] : number[] = 0;

  let canReach :boolean = false; 
  for (let i : number = 0; i < N_number; ++i){
    let dt = t[i+1] - t[i];
    let dist = abs(x[i +1] -x[i]) + abs(x[i +1] -x[i]);
    if (dist <= dt && dt % 2 != dist % 2 ){canReach = true}

  }
  if (canReach){
    console.log('Yes')
  }else{
    console.log('No')
  }
}

main(fs.readFileSync("input_file/file10.txt", "utf8"));
