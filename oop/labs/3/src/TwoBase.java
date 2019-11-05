/*

2. Напишите программу, в которой есть суперкласс с приватным текстовым полем. В
базовом классе должен быть метод для присваивания значения полю: без параметров и с
одним текстовым параметром. Объект суперкласса создается передачей одного текстового
аргумента конструктору. Доступное только для чтения свойство результатом возвращает
длину текстовой строки. На основе суперкласса создается подкласс. В подклассе появляется
дополнительное открытое целочисленное поле. В классе должны быть такие версии метода
для присваивания значений полям (используется переопределение и перегрузка метода из
суперкласса): без параметров, с текстовым параметром, с целочисленным параметром, с
текстовым и целочисленным параметром. У конструктора подкласса два параметра
(целочисленный и текстовый).

*/

public class TwoBase {

    private String str;

    TwoBase(String str) {
        set(str);
    }

    public void set() {

    }

    public int set(String newValue) {
        str = newValue;
        return newValue.length();
    }

//    public void description() {
//        System.out.printf("str:%s\n", str);
//    }

    public static void main(String args[]) {
        TwoBase twoBase = new TwoBase("init base");
        TwoDerived twoDerived = new TwoDerived("init derived", 10);

//        twoBase.description();
//        System.out.println();
//        twoDerived.description();
//
//        twoBase.set("after base");
//        twoDerived.set("after derived");
//        twoDerived.set(15);
//
//        System.out.println();
//        twoBase.description();
//        System.out.println();
//        twoDerived.description();
    }

}
