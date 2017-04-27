# FizzBuzz Kata

## developer machine setup
### mac operating system
* open the terminal
* install [nvm], [node], [npm], [yarn] using the following commands:
```bash
touch ~/.bash_profile
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
source ~/.bash_profile
nvm install v7.5.0
npm install -g npm
npm install -g yarn
```

## install
```bash
git clone https://github.com/raydecastro/fizzbuzz-kata.git
cd fizzbuzz-kata
yarn
```

## test
```bash
npm test
```

## automatic test
```bash
npm run test-auto
```

## build
```bash
npm run build
```

## shell scripts
### test
```bash
./test.sh
```

### build
```bash
./build.sh
```

## technologies
* javascript
* es6 + babel
* mocha + chai
* nvm + node + npm + yarn
* gulp

## Level
* Beginner

## Skills
* Test Driven Development (TDD)
* Open Closed Principle (OCP)

## Instructions
* Write a program that prints the numbers from 1 to 100. 
* But for multiples of three print “Fizz” instead of the number and 
  for the multiples of five print “Buzz”. 
* For numbers which are multiples of both three and five print “FizzBuzz”.

## Expected Output
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz

## Additional Instructions
* When you’ve got it all working for “Fizz” and “Buzz”, add “Whizz” for 
  multiples of seven
* Then add “Fizz” also for all numbers containing a 3 (eg 23, 53)

## Retrospective
* Is the code you have written clean? Are there any smells?
* Did you refactor throughout or do it all at the end?
* What if a new requirement came along that multiples of seven were “Whizz”? 
  Could you add that without editing the existing code? 
  (Cue discussion of the Open Closed Principle)

## References
* Emily Bache. The Coding Dojo Handbook. A practical guide to creating 
  space where good programmers can become great programmers.

[nvm]: https://github.com/creationix/nvm#install-script
[node]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/  