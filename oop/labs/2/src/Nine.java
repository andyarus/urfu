/*

9. Напишите программу со статическим методом, аргументом которому передается
одномерный символьный массив. В результате вызова метода элементы массива попарно
меняются местами: первый — с последним, второй — с предпоследним и так далее.

*/

public class Nine {

    static void swapElements(char[] ch) {
        int halfLength = ch.length/2;
        for (int i = 0, j = ch.length - 1; i < halfLength; i++, j--) {
            char tmp = ch[i];
            ch[i] = ch[j];
            ch[j] = tmp;
        }
    }

    public static void main(String[] args) {
        char[] data = {'a', 'b', 'c', 'd', 'e', 'x'};

        System.out.println("Source array:");
        for (int i = 0; i < data.length; i++) {
            System.out.print(data[i] + " ");
        }
        System.out.println();

        swapElements(data);

        System.out.println("Array after swap elements:");
        for (int i = 0; i < data.length; i++) {
            System.out.print(data[i] + " ");
        }
    }

}
