/*

1. Напишите программу, в которой есть суперкласс с приватным текстовым полем,
конструктором с текстовым параметром и где переопределен метод toString (). На основе
суперкласса путем наследования создается подкласс. У него появляется еще одно
приватное текстовое ноле. Также подкласс должен иметь версии конструктора с одним и
двумя текстовыми аргументами, а еще в нем должен быть переопределен метод toString ().
В обоих классах метод toString () переопределяется так, что он возвращает строку с
названием класса и значение текстового поля или текстовых полей.

*/

public class OneDerived extends OneBase {

    private String strDerived;

    OneDerived(String str) {
        super(str);
    }

    OneDerived(String str1, String str2) {
        super(str1);
        strDerived = str2;
    }

    public String toString() {
        String className = getClass().getSimpleName();
        return super.toString() + "\n" + className + ":" + strDerived;
    }

}
