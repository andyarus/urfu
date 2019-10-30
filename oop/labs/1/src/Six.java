/*

6.Напишите программу с классом, в котором есть два закрытых целочисленных поля (назовем их max и min).
Значение поля max не может быть меньше значения поля min. Значения полям присваиваются с помощью открытого метода.
Метод может вызываться с одним или двумя целочисленными аргументами.
При вызове метода значения полям присваиваются так: сравниваются текущие значения полей и значения аргументов,
переданных методу. Самое большое из значений присваивается полю max,
а самое маленькое из значений присваивается полю min. Предусмотрите конструктор,
который работает по тому же принципу, что и метод для присваивания значений полям.
В классе также должен быть метод, отображающий в консольном окне значения полей объекта.

*/

public class Six {

    private int min, max;

    Six(int x) {
        //min = 0; max = 0;
        set(x);
    }

    Six(int x, int y) {
        //min = 0; max = 0;
        set(x, y);
    }

    public void set(int x) {
        min = Math.min(min, x);
        max = Math.max(max, x);
    }

    public void set(int x, int y) {
        min = Math.min(min, x);
        min = Math.min(min, y);

        max = Math.max(max, x);
        max = Math.max(max, y);
    }

    public void description(String prefix) {
        System.out.printf("%smin:%d max:%d\n", prefix, min, max);
    }

    public static void main(String[] args) {
        Six six1 = new Six(5);
        Six six2 = new Six(10, 15);

        six1.description("Constructor with one argument ");
        six2.description("Constructor with two arguments ");
    }

}
