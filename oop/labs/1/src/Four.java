/*

4.Напишите программу с классом, у которого есть символьное и целочисленное поле.
В классе должны быть описаны версии конструктора с двумя аргументами
(целое число и символ – определяют значения полей), а также с одним аргументом типа double.
В последнем случае действительная часть аргумента определяет код символа (значение символьного поля),
а дробная часть (с учетом десятых и сотых) определяет значение целочисленного поля.
Например, если аргументом передается число 65.1267, то значением символьного поля будет символ ‘A’ с кодом 65,
а целочисленное поле получит значение 12 (в дробной части учитываются только десятые и сотые).

*/

public class Four {

    private char ch;
    private int x;

    Four(char ch, int a) {
        this.ch = ch;
        this.x = a;
    }

    Four(double raw) {
        int decimal = (int) raw;
        ch = (char) decimal;
        x = (int) Math.floor((raw - decimal) * 100);
    }

//    public void description(String prefix) {
//        System.out.printf("%sch:%c x:%d\n", prefix, ch, x);
//    }

    public static void main(String[] args) {
        Four four1 = new Four('a', 5);
        Four four2 = new Four(65.1267);

//        four1.description("Constructor with two arguments ");
//        four2.description("Constructor with raw data ");
    }

}
