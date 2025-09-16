import 'dart:io';

void main() {
  print('Simple Calculator');
  
  while (true) {
    stdout.write('\nEnter first number (or type "exit" to quit): ');
    String? input1 = stdin.readLineSync();
    if (input1 == null || input1.toLowerCase() == 'exit') break;
    double? num1 = double.tryParse(input1);
    if (num1 == null) {
      print('Invalid number, try again.');
      continue;
    }

    stdout.write('Enter operator (+, -, *, /): ');
    String? operator = stdin.readLineSync();
    if (operator == null || !['+', '-', '*', '/'].contains(operator)) {
      print('Invalid operator, try again.');
      continue;
    }

    stdout.write('Enter second number: ');
    String? input2 = stdin.readLineSync();
    double? num2 = double.tryParse(input2 ?? '');
    if (num2 == null) {
      print('Invalid number, try again.');
      continue;
    }

    double result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 == 0) {
          print('Cannot divide by zero.');
          continue;
        }
        result = num1 / num2;
        break;
      default:
        print('Unknown error.');
        continue;
    }

    print('Result: $num1 $operator $num2 = $result');
  }

  print('Calculator closed. Goodbye!');
}
