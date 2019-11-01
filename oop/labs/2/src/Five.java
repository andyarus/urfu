/*

5. Напишите программу со статическим методом, которым вычисляется сумма
квадратов натуральных чисел 1^2 + 2^2 + 3^2 + ... + п^2. Число п передается аргументом методу.
Предложите версию метода с рекурсией и без рекурсии. Для проверки результата можно
использовать формулу 1^2 + 2^2 + 3^2 + ... + n^2 = (n+1) * (2n + 1)/6

*/

public class Five {

    static int calcSumOfSquaresWithRecursion(int n) {
        // only natural numbers
        if (n <= 0)
            return 0;
        if (n == 1)
            return 1;

        return n * n + calcSumOfSquaresWithRecursion(n - 1);
    }

    static int calcSumOfSquaresWithoutRecursion(int n) {
        // only natural numbers
        if (n <= 0)
            return 0;

        int result = 0;
        for (int i = n; i > 0; i -= 1) {
            result += i * i;
        }

        return result;
    }

    public static void main(String[] args) {
        int n1 = 3;
        int n2 = 3;

        System.out.println("Sum of squares " + n1 + " is equal " + calcSumOfSquaresWithRecursion(n1));
        System.out.println("Sum of squares " + n2 + " is equal " + calcSumOfSquaresWithoutRecursion(n2));
    }

}
