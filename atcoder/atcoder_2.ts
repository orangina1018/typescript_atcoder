/*

/【問題概要】
/ 0 と 1 のみから成る 3 桁の番号 s が与えられます。1 が何個含まれるかを求めてください。

/【数値例】
/1)
/　s = "101"
/　答え: 2
/'1' が 2 個含まれています。
*/

import * as fs from 'fs';

function main(input: string) {
  let i: number = 0;
  if (input[0] == '1') {
    i += 1;
  }
  if (input[1] == '1') {
    i += 1;
  }
  if (input[2] == '1') {
    i += 1;
  }
  console.log(i);
}
main(fs.readFileSync('input_file/file2.txt', 'utf8'));
