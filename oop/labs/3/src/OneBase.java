/*

1. Напишите программу, в которой есть суперкласс с приватным текстовым полем,
конструктором с текстовым параметром и где переопределен метод toString (). На основе
суперкласса путем наследования создается подкласс. У него появляется еще одно
приватное текстовое ноле. Также подкласс должен иметь версии конструктора с одним и
двумя текстовыми аргументами, а еще в нем должен быть переопределен метод toString ().
В обоих классах метод toString () переопределяется так, что он возвращает строку с
названием класса и значение текстового поля или текстовых полей.

*/

public class OneBase {

    private String strBase;

    OneBase(String str) {
        this.strBase = str;
    }

    public String toString() {
        String className = getClass().getSimpleName();
        return className + ":" + strBase;
    }

    public static void main(String args[]) {
        OneDerived oneDerived1 = new OneDerived("test1");
        OneDerived oneDerived2 = new OneDerived("test1", "test2");

        String result1 = oneDerived1.toString();
        String result2 = oneDerived2.toString();

        System.out.println(result1);
        System.out.println();
        System.out.println(result2);
    }

}
