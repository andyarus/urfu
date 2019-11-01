/*

3. Напишите программу с классом, в котором есть статические методы, которым
можно передавать произвольное количество целочисленных аргументов (или
целочисленный массив). Методы, на основании переданных аргументов или массива,
позволяют вычислить: наибольшее значение, наименьшее значение, а также среднее
значение из набора чисел.

*/

import java.util.Arrays;

public class Three {

    static void calcMin(int[] data) {
        int result = Arrays.stream(data).min().getAsInt();
        System.out.println("Min:" + result);
    }

    static void calcMax(int[] data) {
        int result = Arrays.stream(data).max().getAsInt();
        System.out.println("Max:" + result);
    }

    static void calcAvg(int[] data) {
        double result = Arrays.stream(data).average().getAsDouble();
        System.out.println("Average:" + result);
    }

    public static void main(String[] args) {
        int[] data = {1, 2, 3, 100, 500, 4, 5};

        calcMin(data);
        calcMax(data);
        calcAvg(data);
    }

}
