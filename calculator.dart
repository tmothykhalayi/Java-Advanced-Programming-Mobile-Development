import 'dart:io';

void main() {
  print('Simple Calculator');
  print('Type an expression like: 3 + 5');
  print('Type "exit" to quit.');

  while (true) {
    stdout.write('\nEnter expression: ');
    String? input = stdin.readLineSync();

    if (input == null) continue;
    if (input.toLowerCase() == 'exit') break;

    // Split input by space: e.g. ["3", "+", "5"]
    List<String> parts = input.split(' ');

    if (parts.length != 3) {
      print('Invalid input format. Use: number operator number (e.g. 3 + 5)');
      continue;
    }

    double? num1 = double.tryParse(parts[0]);
    String operator = parts[1];
    double? num2 = double.tryParse(parts[2]);

    if (num1 == null || num2 == null) {
      print('Invalid numbers.');
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
        print('Invalid operator.');
        continue;
    }

    print('Result: $result');
  }

  print('Calculator closed. Goodbye!');
}
