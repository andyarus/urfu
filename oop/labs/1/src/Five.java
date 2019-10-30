/*

5. Напишите программу с классом, у которого есть закрытое целочисленное поле.
Значение полю присваивается с помощью открытого метода. Методу аргументом может передаваться целое число,
а также метод может вызываться без аргументов. Если метод вызывается без аргументов,
то поле получает нулевое значение. Если метод вызывается с целочисленным аргументом,
то это значение присваивается полю. Однако если переданное аргументом методу значение превышает 100,
то значением полю присваивается число 100. Предусмотрите в классе конструктор,
который работает по тому же принципу что и метод для присваивания значения полю.
Также в классе должен быть метод, позволяющий проверить значение поля.

*/

public class Five {

    private int x;
    //private int limit = 100;

    Five() {
        set();
    }

    Five(int x) {
        set(x);
    }

    public void set() {
        x = 0;
    }

    public void set(int newValue) {
        if (newValue > 100) {
            x = 100;
        } else{
            x = newValue;
        }
    }

    public void validation() {
        if (x > 100) {
            System.out.println(x + " is invalid");
        } else{
            System.out.println(x + " is valid");
        }
    }

    public static void main(String[] args) {
        Five five1 = new Five();
        Five five2 = new Five(5);
        Five five3 = new Five(115);

        five1.validation();
        five2.validation();
        five3.validation();
    }

}
