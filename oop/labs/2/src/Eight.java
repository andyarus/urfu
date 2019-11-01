/*

8. Напишите программу со статическим методом, аргументом которому передается
целочисленный массив, а результатом возвращается среднее значение для элементов
массива (сумма значений элементов, деленная на количество элементов в массиве).

*/

public class Eight {

    static double averageValueOf(int[] nums) {
        if (nums.length == 0) return 0;

        int sum = 0;
        for (char i = 0; i < nums.length; i++) {
            sum += nums[i];
        }

        return sum/nums.length;
    }

    public static void main(String[] args) {
        int[] data = {1, 2, 3, 100, 500, 4, 5};
        double result = averageValueOf(data);

        System.out.println("Average value of array elements:");
        for (int i = 0; i < data.length; i++) {
            System.out.print(data[i] + " ");
        }
        System.out.println("\nis equal " + result);
    }

}
