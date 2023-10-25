#!/bin/sh

cd ./userTest

chmod +x ./usertest1.sh
chmod +x ./usertest2.sh
chmod +x ./usertest3.sh
chmod +x ./usertest4.sh

echo "---user class Test---"

./usertest1.sh
echo ""
./usertest2.sh
echo ""
./usertest3.sh
echo ""
./usertest4.sh
echo ""

cd ../ComputerTest

echo "---Computer class Test---"

node computerTest.js;
echo ""
node computerTest.js;
echo ""
node computerTest.js;
echo ""

cd ../RuleCheckerTest
chmod +x ./rulecheckerTest1.sh
chmod +x ./rulecheckerTest2.sh
chmod +x ./rulecheckerTest3.sh
chmod +x ./rulecheckerTest4.sh
chmod +x ./rulecheckerTest5.sh
chmod +x ./rulecheckerTest6.sh
chmod +x ./rulecheckerTest7.sh
chmod +x ./rulecheckerTest8.sh
chmod +x ./rulecheckerTest9.sh

echo "---RuleCheckerTest---"
echo "-----lengthCheckTest-----"
./rulecheckerTest1.sh
echo ""
./rulecheckerTest2.sh
echo ""
./rulecheckerTest3.sh
echo ""
echo "-----isNumberCheckTest-----"
./rulecheckerTest4.sh
echo ""
./rulecheckerTest5.sh
echo ""
./rulecheckerTest6.sh
echo ""
echo "-----isSameNumberTest-----"
./rulecheckerTest7.sh
echo ""
./rulecheckerTest8.sh
echo ""
./rulecheckerTest9.sh
echo ""
