/*

1. Напишите программу с классом, в котором есть два поля: символьное и текстовое.
В классе должен быть перегруженный метод для присваивания значений полям. Если метод
вызывается с символьным аргументом, то соответствующее значение присваивается
символьному полю. Если метод вызывается с текстовым аргументом, то он определяет
значение текстового поля. Методу аргументом также может передаваться символьный
массив. Если массив состоит из одного элемента, то он определяет значение символьного
поля. В противном случае (если в массиве больше одного элемента) из символов массива
формируется текстовая строка и присваивается значением текстовому полю.

*/

public class One {

    private char ch;
    private String str;

    public void set(char ch) {
        this.ch = ch;
    }

    public void set(String str) {
        this.str = str;
    }

    public void set(char[] ch) {
        if (ch.length == 0) return;
        if (ch.length == 1) {
            this.ch = ch[0];
        } else {
            str = String.valueOf(ch);
        }
    }

//    public void description(String prefix) {
//        System.out.printf("%sCharacter:%c\nString:%s\n\n", prefix, ch, str);
//    }

    public static void main(String[] args) {
        One one1 = new One();
        One one2 = new One();
        One one3 = new One();
        One one4 = new One();
        One one5 = new One();

        one1.set('a');
        one2.set("a");

        char[] arr3 = {};
        one3.set(arr3);

        char[] arr4 = {'a'};
        one4.set(arr4);

        char[] arr5 = {'a', 'b', 'c'};
        one5.set(arr5);

//        one1.description("Method with char parameter:\n");
//        one2.description("Method with String parameter:\n");
//        one3.description("Method with char[] parameter(empty):\n");
//        one4.description("Method with char[] parameter(one element):\n");
//        one5.description("Method with char[] parameter(several elements):\n");
    }

}
