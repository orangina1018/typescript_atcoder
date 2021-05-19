/*
【問題概要】
英小文字からなる文字列 S が与えられます。
T が空文字列である状態から始めて、以下の操作を好きな回数繰り返すことで S=Tとすることができるか判定してください。

TT の末尾に "dream", "dreamer", "erase", "eraser" のいずれかを追加する。

【制約】
1≤|S|≤105
S は英小文字からなる

【数値例】
1)
　S = "dreameraser"
　答え: "YES"

"dream", "eraser" の順で TT の末尾に追加することで S=T とすることができます。
*/

import * as fs from "fs";

//入力を考える関数
function main(input: string) {
  // ここに処理を書く
  let S: string = input.split("\n")[0];
  console.log(S);
}

main(fs.readFileSync("input_file/file9.txt", "utf8"));
