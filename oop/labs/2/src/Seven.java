/*

7. Напишите программу со статическим методом, аргументом которому передастся
символьный массив, а результатом возвращается ссылка на целочисленным массив,
состоящий из кодов символов из массива-аргумента.

*/

public class Seven {

    static int[] convertArray(char[] ch) {
        int[] result = new int[ch.length];
        for (char i = 0; i < ch.length; i++) {
            result[i] = (int) ch[i];
        }

        return result;
    }

    public static void main(String[] args) {
        char[] data = {'a', 'b', 'c', 'd', 'e', 'x'};
        int[] result = convertArray(data);

        System.out.println("Values of source char array:");
        for (int i = 0; i < data.length; i++) {
            System.out.print(data[i] + " ");
        }
        System.out.println();

        System.out.println("Values of result int array (obtained from the character codes of the source array):");
        for (int i = 0; i < result.length; i++) {
            System.out.print(result[i] + " ");
        }
    }

}
