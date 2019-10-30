/*

1. Напишите программу с классом, в котором есть закрытое символьное поле и три открытых метода.
Один из методов позволяет присвоить значение полю.
Еще один метод при вызове возвращает результатом код символа.
Третий метод позволяет вывести в консольное окно символ (значение поля) и его код.

*/

public class One {

    private char ch;

    public void set(char newValue) {
        ch = newValue;
    }

    public int getCode() {
        int code = (int) ch;
        return code;
    }

    public void description() {
        System.out.printf("Character: %s (code: %s)", ch, getCode());
    }

    public static void main(String[] args) {
        One one = new One();
        one.set('a');
        one.description();
    }

}
