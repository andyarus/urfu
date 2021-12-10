package yaav;

import java.io.IOException;

public class Salesman {

    public static void main(String[] args) {
        try {

            String fileName = args[0];

            try {

                long startTime = System.nanoTime();

                // solve salesman task
                Solver solver = FileManager.parse(fileName);
                solver.solve(0, 1, 0, false);
                System.out.println(solver.getPrintableCities());
                System.out.println(solver.getPrintableBestWays());

                long resultTime = System.nanoTime() - startTime;
                long seconds = resultTime / 1000000000;
                long minutes = seconds / 60;
                long hours = minutes / 60;

                System.out.println("solutions count:" + solver.solutionsCount);
                System.out.println("\nprocessing time: " + hours + "h " + minutes + "m " + seconds + "s" + " " + resultTime + "ns");

            } catch (IOException e) {
                System.out.println(e);
            }

        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println(e);
        }
    }

}
