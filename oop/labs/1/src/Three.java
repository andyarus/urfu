/*

3. Напишите программу с классом, у которого есть два целочисленных поля.
В классе должны быть описаны конструкторы, позволяющие создавать объекты без передачи аргументов,
с передачей одного аргумента и с передачей двух аргументов.

*/

public class Three {

    private int x, y;

    Three() {
        //x = 1;
        //y = 1;
    }

    Three(int x) {
        this.x = x;
        //y = 5;
    }

    Three(int x, int y) {
        this.x = x;
        this.y = y;
    }

//    public void description(String prefix) {
//        System.out.printf("%sx:%d y:%d\n", prefix, x, y);
//    }

    public static void main(String[] args) {
        Three three1 = new Three();
        Three three2 = new Three(2);
        Three three3 = new Three(6,7);

//        three1.description("Constructor without arguments ");
//        three2.description("Constructor with one argument ");
//        three3.description("Constructor with two arguments ");
    }

}
