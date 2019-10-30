/*

2. Напишите программу с классом, у которого есть два символьных поля и метод.
Он возвращает результат, и у него нет аргументов.
При вызове метод выводит в консольное окно все символы из кодовой таблицы, которые находятся «между» символами,
являющимися значениями полей объекта (из которого вызывается метод).
Например, если полям объекта присвоены значения ‘A’ и ‘D’,
то при вызове метода в консольное окно должны выводиться все символы от ‘A’ до ‘D’ включительно.

*/

public class Two {

    private char start = 'A';
    private char end = 'D';

    public void printRange() {
        for (char i = start; i <= end; i++) {
            System.out.print(i);
        }
    }

    public static void main(String[] args) {
        Two two = new Two();
        two.printRange();
    }

}