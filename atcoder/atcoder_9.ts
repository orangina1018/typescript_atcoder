/*
【問題概要】
英小文字からなる文字列 S が与えられます。
T が空文字列である状態から始めて、以下の操作を好きな回数繰り返すことで S=Tとすることができるか判定してください。

T の末尾に "dream", "dreamer", "erase", "eraser" のいずれかを追加する。

【制約】
1≤|S|≤105
S は英小文字からなる

【数値例】
1)
　S = "dreameraser"
　答え: "YES"

"dream", "eraser" の順で T の末尾に追加することで S=T とすることができます。
*/

import { reverse } from "dns";
import * as fs from "fs";

//入力を考える関数
function main(input: string) {
  // ここに処理を書く
  let S: string = input.split("\n")[0];
  console.log(S);

  const string_divide_array: string[] = ["dream", "dreamer", "erase", "eraser"];

  let re_reverse_string_divide_array: string[] = [];
  for (let i = 0; i <= string_divide_array.length; ++i) {
    let str: string = string_divide_array[i];
    let re_str: string = reverseString(str);
    re_reverse_string_divide_array.push(re_str);
  }
  console.log(re_reverse_string_divide_array)

  function reverseString(str: string): string {
    return str.split("").reverse().join("");
  }
}

main(fs.readFileSync("input_file/file9.txt", "utf8"));
