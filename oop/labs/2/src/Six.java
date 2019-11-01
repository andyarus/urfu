/*

6. Напишите программу со статическим методом, которому аргументом передается
целочисленный массив и целое число. Результатом метод возвращает ссылку на новый
массив, который получается из исходного массива (переданного первым аргументом
методу), если в нем взять несколько начальных элементов. Количество элементов, которые
нужно взять из исходного массива, определяются вторым аргументом метода. Если второй
аргумент метода больше длины массива, переданного первым аргументом, то методом
создается копия исходного массива и возвращается ссылка на эту копию.

*/

public class Six {

    static int[] takeFirstElements(int[] nums, int n) {
        int[] result;
        if (n > nums.length) {
            result = nums.clone();
        } else {
            result = new int[n];
            for (int i = 0; i < n; i++) {
                result[i] = nums[i];
            }
        }

        return result;
    }

    public static void main(String[] args) {
        int[] data = {1, 2, 3, 100, 500, 4, 5};

        int n1 = 4;
        int n2 = 10;

        int[] result1 = takeFirstElements(data, n1);
        int[] result2 = takeFirstElements(data, n2);

        System.out.println("Reference to source array:" + data);
        System.out.println("Reference to result1 array:" + result1);
        System.out.println("Reference to result2 array:" + result2);

        System.out.println("Values of source array:");
        for (int i = 0; i < data.length; i++) {
            System.out.print(data[i] + " ");
        }
        System.out.println();

        System.out.println("Values of result1 array by taken first " + n1 + " elements from source array:");
        for (int i = 0; i < result1.length; i++) {
            System.out.print(result1[i] + " ");
        }
        System.out.println();

        System.out.println("Values of result2 array by taken first " + n2 + " elements from source array:");
        for (int i = 0; i < result2.length; i++) {
            System.out.print(result2[i] + " ");
        }
    }

}
