public class Calculator {
  public static void main(String[] args) {
    try {
      if (args.length < 3) {
        System.out.println("Error: insufficient arguments");
        return;
      }

      double num1 = Double.parseDouble(args[0]);
      double num2 = Double.parseDouble(args[1]);
      String operation = args[2];

      double result;

      switch (operation) {
        case "add":
          result = num1 + num2;
          break;
        case "subtract":
          result = num1 - num2;
          break;
        case "multiply":
          result = num1 * num2;
          break;
        case "divide":
          if (num2 == 0) {
            System.out.println("Error: Divide by zero");
            return;
          }
          result = num1 / num2;
          break;
        case "mod":
          result = num1 % num2;  
          break;
        case "power":
          result = Math.pow(num1, num2);
          break;
        default:
          System.out.println("Error: Invalid operation");
          return;
      }

      System.out.println(result);

    } catch (NumberFormatException e) {
      System.out.println("Error: Invalid number format");
    } catch (ArithmeticException e) {
      System.out.println("Error: Arithmetic issue - " + e.getMessage());
    } catch (Exception e) {
      System.out.println("Error: " + e.getMessage());
    }
  }
}

// This Java program implements a simple calculator that performs basic arithmetic operations.
// It takes three command-line arguments: two numbers and an operation (add, subtract, multiply, divide, mod, or power).
// The program parses the numbers, performs the specified operation, and prints the result.     