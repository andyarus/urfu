/*

4. Напишите программу, в которой описан статический метод для вычисления
двойного факториала числа, переданного аргументом методу. По определению, двойной
факториал числа п (обозначается как n!!) — это произведение через одно всех чисел, не
больших числа п. То есть n!! = п * (n - 2) * (п - 4)* ... (последний множитель равен 1 для
нечетного п и равен 2 для четного n). Например, 6!! = 6 х 4 х 2 = 48 и 5!! = 5 х 3 х 1 = 15.
Предложите версию метода без рекурсии и с рекурсией.

*/

public class Four {

    static int calcDoubleFactorialWithRecursion(int n) {
        if (n == 0 || n == 1)
            return 1;

        return n * calcDoubleFactorialWithRecursion(n - 2);
    }

    static int calcDoubleFactorialWithoutRecursion(int n) {
        int result = 1;
        for (int i = n; i >= 0; i = i - 2) {
            if (i == 0 || i == 1)
                return result;
            else
                result *= i;
        }

        return result;
    }

    public static void main(String[] args) {
        int n1 = 6;
        int n2 = 5;

        System.out.println("Double factorial of " + n1 + " is equal " + calcDoubleFactorialWithRecursion(n1));
        System.out.println("Double factorial of " + n2 + " is equal " + calcDoubleFactorialWithoutRecursion(n2));
    }

}
