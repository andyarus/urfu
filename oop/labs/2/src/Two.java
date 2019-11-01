/*

2. Напишите программу с классом, в котором есть закрытое статическое
целочисленное поле с начальным нулевым значением. В классе должен быть описан
статический метод, при вызове которого отображается текущее значение статического
поля, после чего значение поля увеличивается на единицу

*/

public class Two {

    private static int x = 0;

    static void description() {
        System.out.printf("x:%d\n", x);
        x += 1;
    }

    public static void main(String[] args) {
        description();
        description();
        description();
    }

}
