#!/bin/sh

input=''

echo "입력 $input"

f_output=$(echo "$input" | node isNumberCheckTest.js)

expect_output="Error: [ERROR] user가 입력한 a는 잘못된 입력입니다."

first_line_f_output=$(echo "$f_output" | head -1)

echo "$first_line_f_output"

if [ "$expect_output" = "$first_line_f_output" ]; then
    echo "성공"
else
    echo "실패"
fi
