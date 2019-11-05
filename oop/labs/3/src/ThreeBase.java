/*

3. Напишите программу, в которой на основе суперкласса создается подкласс, а на
основе этого подкласса создается еще один подкласс (цепочка наследования из трех
классов). В первом суперклассе есть открытое целочисленное поле, метод с одним
параметром для присваивания значения полю и конструктор с одним параметром. Во
втором классе появляется открытое символьное поле, метод с двумя параметрами для
присваивания значения полям (перегрузка метода из суперкласса) и конструктор с двумя
параметрами. В третьем классе появляется открытое текстовое ноле, метод с тремя
аргументами для присваивания значений полям (перегрузка метода из суперкласса) и
конструктор с тремя параметрами. Для каждого класса определите метод toString () так,
чтобы он возвращал строку с названием класса и значениями всех полей объекта.

*/

public class ThreeBase {

    public int x;

    ThreeBase(int x) {
        set(x);
    }

    public void set(int newValue) {
        x = newValue;
    }

    public String toString() {
        String className = getClass().getSimpleName();
        return className + " x:" + x;
    }

    public static void main(String args[]) {
        ThreeBase threeBase = new ThreeBase(10);
        ThreeDerivedOne threeDerivedOne = new ThreeDerivedOne(15, 'a');
        ThreeDerivedSecond threeDerivedSecond = new ThreeDerivedSecond(100, 'c', "abc");

        System.out.println(threeBase.toString());
        System.out.println(threeDerivedOne.toString());
        System.out.println(threeDerivedSecond.toString());
    }

}
