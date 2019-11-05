/*

4. Напишите программу, в которой использована цепочка наследования из трех
классов. В первом классе есть открытое символьное поле. Во втором классе появляется
открытое текстовое поле. В третьем классе появляется открытое целочисленное поле. В
каждом из классов должен быть конструктор, позволяющий создавать объект на основе
значений полей, переданных аргументами конструктору, а также конструктор создания
копии.

*/

public class FourBase {

    public char ch;

    FourBase(char ch) {
        this.ch = ch;
    }

    FourBase(FourBase fourBase) {
        this.ch = fourBase.ch;
    }

//    public String toString() {
//        String className = getClass().getSimpleName();
//        return className + " ch:" + ch;
//    }

    public static void main(String args[]) {
        FourBase fourBase = new FourBase('a');
        FourDerivedOne fourDerivedOne = new FourDerivedOne('d', "abcd");
        FourDerivedTwo fourDerivedTwo = new FourDerivedTwo('f', "asdf", 555);

        FourBase fourBaseCopy = fourBase;
        FourDerivedOne fourDerivedOneCopy = fourDerivedOne;
        FourDerivedTwo fourDerivedTwoCopy = fourDerivedTwo;

//        System.out.println(fourBase.toString());
//        System.out.println(fourDerivedOne.toString());
//        System.out.println(fourDerivedTwo.toString());
//
//        System.out.println();
//        System.out.println("Copies:");
//
//        System.out.println(fourBaseCopy.toString());
//        System.out.println(fourDerivedOneCopy.toString());
//        System.out.println(fourDerivedTwoCopy.toString());
    }

}
