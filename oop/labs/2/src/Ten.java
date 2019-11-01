/*

10. Напишите программу со статическим методом, аргументом которому передается
произвольное количество целочисленных аргументов. Результатом метод возвращает
массив из двух элементов: это значения наибольшего и наименьшего значений среди
аргументов, переданных методу

*/

public class Ten {

    static int[] findMaxMin(int ... n) {
        int[] result = new int[2];

        if (n.length == 0) return result;

        int max, min;
        max = min = n[0];
        for (int i: n) {
            if (i > max)
                max = i;
            if (i < min)
                min = i;
        }

        result[0] = max;
        result[1] = min;

        return result;
    }

    public static void main(String[] args) {
        {
            int[] result = findMaxMin();
            int max = result[0];
            int min = result[1];
            System.out.println("Max:" + max);
            System.out.println("Min:" + min);
            System.out.println();
        }
        {
            int[] result = findMaxMin(1, 2, 3, 4, 5);
            int max = result[0];
            int min = result[1];
            System.out.println("Max:" + max);
            System.out.println("Min:" + min);
            System.out.println();
        }
        {
            int[] result = findMaxMin(1, 2, 3, -100, 500, 4, 5);
            int max = result[0];
            int min = result[1];
            System.out.println("Max:" + max);
            System.out.println("Min:" + min);
            System.out.println();
        }
    }

}
