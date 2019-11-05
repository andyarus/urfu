/*

5. Напишите программу, в которой есть суперкласс с защищенным текстовым полем,
конструктор с текстовым параметром и метод, при вызове которого в консольном окне
отображается название класса и значение поля. На основе суперкласса создаются два
подкласса (оба на основе одного и того же суперкласса). В одном из классов появляется
защищенное целочисленное поле, там есть конструктор с двумя параметрами и
переопределен метод для отображения значений полей объекта и названия класса. Во
втором подклассе появляется защищенное символьное поле, конструктор с двумя
параметрами и переопределен метод, отображающий в консоли название класса и значения
полей. В главном методе создайте объекты каждого из классов. Проверьте работу метода,
отображающего значения полей объектов, для каждого из объектов. Вызовите этот же
метод через объектную переменную суперкласса, которая ссылается на объект
производного класса.

*/

public class FiveBase {

    protected String str;

    FiveBase(String str) {
        this.str = str;
    }

    public String toString() {
        String className = getClass().getSimpleName();
        return className + " str:" + str;
    }

    public static void main(String args[]) {
        FiveBase fiveBase = new FiveBase("FiveBase");
        FiveDerivedOne fiveDerivedOne = new FiveDerivedOne("FiveDerivedOne", 10);
        FiveDerivedTwo fiveDerivedTwo = new FiveDerivedTwo("FiveDerivedTwo", 'a');

        System.out.println(fiveBase.toString());
        System.out.println(fiveDerivedOne.toString());
        System.out.println(fiveDerivedTwo.toString());


        FiveBase fiveBaseDerived = new FiveDerivedOne("FiveBase FiveDerivedOne", 100500);

        System.out.println();
        System.out.println(fiveBaseDerived.toString());
    }

}
