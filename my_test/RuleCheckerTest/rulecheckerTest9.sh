#!/bin/sh

input=''

echo "입력 $input"

f_output=$(echo "$input" | node isSameNumberTest.js)

expect_output="Error: [ERROR] user가 입력한 수 중 같은 수가 있습니다. []"

first_line_f_output=$(echo "$f_output" | head -1)

echo "$first_line_f_output"

if [ "$expect_output" = "$first_line_f_output" ]; then
    echo "성공"
else
    echo "실패"
fi
