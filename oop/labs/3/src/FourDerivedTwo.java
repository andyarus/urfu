/*

4. Напишите программу, в которой использована цепочка наследования из трех
классов. В первом классе есть открытое символьное поле. Во втором классе появляется
открытое текстовое поле. В третьем классе появляется открытое целочисленное поле. В
каждом из классов должен быть конструктор, позволяющий создавать объект на основе
значений полей, переданных аргументами конструктору, а также конструктор создания
копии.

*/

public class FourDerivedTwo extends FourDerivedOne {

    public int x;

    FourDerivedTwo(char ch, String str, int x) {
        super(ch, str);
        this.x = x;
    }

//    public String toString() {
//        String className = getClass().getSimpleName();
//        return className + " ch:" + super.ch + " x:" + x;
//    }

    FourDerivedTwo(FourDerivedTwo fourDerivedTwo) {
        super(fourDerivedTwo.ch, fourDerivedTwo.str);
        this.x = fourDerivedTwo.x;
    }

}
