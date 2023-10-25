#!/bin/sh

input=4

echo "입력 $input"

f_output=$(echo "$input" | node lengthCheckTest.js)

expect_output="Error: [ERROR] user가 1개의 수를 입력했습니다. 3개 미만입니다."

first_line_f_output=$(echo "$f_output" | head -1)

echo "$first_line_f_output"

if [ "$expect_output" = "$first_line_f_output" ]; then
    echo "성공"
else
    echo "실패"
fi


