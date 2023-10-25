#!/bin/sh

input=""

echo "입력 $input"

f_output=$(echo "$input" | node userTest.js)

expect_output=""

if [ $f_output = $expect_output ]; then
    echo "예상 $expect_output | 결과 $f_output"
    echo "성공"
else
    echo "예상 $expect_output | 결과 $f_output"
    echo "실패"
fi