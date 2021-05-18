/*
/【問題概要】
/二つの正整数 aa, bb が与えられます。 aa と bb の積が偶数か奇数か判定してください。

/【制約】
/ 1<=a, b<=10000
/a, b は整数

/【数値例】
/1)
/　a=3
/　b=4
/　答え: Even
/ 3 × 4 = 12 でこれは偶数なので、"Even" を出力します。

/2)
/　a=1a=1
/　b=21b=21
/　答え: Odd
/ 1 × 21 = 21 でこれは奇数なので、"Odd" を出力します。
*/
import { Number } from 'aws-sdk/clients/iot';
import * as fs from 'fs';

function main(input: string) {
  //console.log(input.split(' '))
  const input_array: Number[] = input.split(' ').map(Number);
  //console.log(input_array);

  const a: number = input_array[0];
  const b: number = input_array[1];

  let muluti: number = a * b;

  if (muluti % 2 == 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}
main(fs.readFileSync('input_file/file1.txt', 'utf8'));
