/*

3. Напишите программу, в которой на основе суперкласса создается подкласс, а на
основе этого подкласса создается еще один подкласс (цепочка наследования из трех
классов). В первом суперклассе есть открытое целочисленное поле, метод с одним
параметром для присваивания значения полю и конструктор с одним параметром. Во
втором классе появляется открытое символьное поле, метод с двумя параметрами для
присваивания значения полям (перегрузка метода из суперкласса) и конструктор с двумя
параметрами. В третьем классе появляется открытое текстовое поле, метод с тремя
аргументами для присваивания значений полям (перегрузка метода из суперкласса) и
конструктор с тремя параметрами. Для каждого класса определите метод toString () так,
чтобы он возвращал строку с названием класса и значениями всех полей объекта.

*/

public class ThreeDerivedSecond extends ThreeDerivedOne {

    public String str;

    ThreeDerivedSecond(int x, char ch, String str) {
        super(x, ch);
        this.str = str;
    }

    public void set(int x, char ch, String str) {
        super.set(x, ch);
        this.str = str;
    }

    public String toString() {
        String className = getClass().getSimpleName();
        return className + " x:" + super.x + " ch:" + super.ch + " str:" + str;
    }

}