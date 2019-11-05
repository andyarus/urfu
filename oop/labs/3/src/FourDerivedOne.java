/*

4. Напишите программу, в которой использована цепочка наследования из трех
классов. В первом классе есть открытое символьное поле. Во втором классе появляется
открытое текстовое поле. В третьем классе появляется открытое целочисленное поле. В
каждом из классов должен быть конструктор, позволяющий создавать объект на основе
значений полей, переданных аргументами конструктору, а также конструктор создания
копии.

*/

public class FourDerivedOne extends FourBase {

    public String str;

    FourDerivedOne(char ch, String str) {
        super(ch);
        this.str = str;
    }

//    public String toString() {
//        String className = getClass().getSimpleName();
//        return className + " ch:" + super.ch + " str:" + str;
//    }

    FourDerivedOne(FourDerivedOne fourDerivedOne) {
        super(fourDerivedOne.ch);
        this.str = fourDerivedOne.str;
    }

}
