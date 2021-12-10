package yaav;

import org.junit.Before;
import org.junit.Test;
import java.io.IOException;
import static org.junit.Assert.assertTrue;

public class TestSolver {

    private Solver solver;

    @Before
    public void prepareToTest() throws IOException {
        String fileName = "tests/yaav/testInput.txt";
        solver = FileManager.parse(fileName);
    }

    @Test
    public void testSolverInit() {
        int citiesCount = 6;
        Solver solver = new Solver(citiesCount);

        assertTrue("Cities length must be equal cities count", solver.cities.length == citiesCount);
        assertTrue("cities sorted array length must be equal cities count",
                solver.citiesSortedIdx.length == citiesCount);
    }

    @Test
    public void testSolverSolve() {
        solver.solve(0, 1, 0, false);
        //System.out.println(solver.getPrintableCities());
        //System.out.println(solver.getPrintableCities());

        assertTrue("bestCost must be equal 63 for testInput.txt data", solver.bestCost == 63);

        assertTrue("bestWay[0] must be equal 1 for testInput.txt data", solver.bestWay[0] == 1);
        assertTrue("bestWay[1] must be equal 4 for testInput.txt data", solver.bestWay[1] == 4);
        assertTrue("bestWay[2] must be equal 3 for testInput.txt data", solver.bestWay[2] == 3);
        assertTrue("bestWay[3] must be equal 5 for testInput.txt data", solver.bestWay[3] == 5);
        assertTrue("bestWay[4] must be equal 6 for testInput.txt data", solver.bestWay[4] == 6);
        assertTrue("bestWay[5] must be equal 2 for testInput.txt data", solver.bestWay[5] == 2);
        assertTrue("bestWay[6] must be equal 1 for testInput.txt data", solver.bestWay[6] == 1);
    }

    @Test
    public void testSolverGetPrintableCities() {
        String output = solver.getPrintableCities();
        //System.out.println(output);

        assertTrue("getPrintableCities can't return empty string", !output.isEmpty());

        assertTrue("getPrintableCities must contains cities:COUNT",
                output.contains("cities:" + solver.cities.length + "\n"));

        assertTrue("getPrintableCities must contains 20 13 -1 35 5 0 for testInput.txt data",
                output.contains("20 13 -1 35 5 0"));
    }

    @Test
    public void testSolverGetPrintableBestWay() {
        solver.solve(0, 1, 0, false);
        String output = solver.getPrintableBestWay();
        //System.out.println(output);

        assertTrue("1 -> 4 -> 3 -> 5 -> 6 -> 2 -> 1 cost:63 for testInput.txt data",
                output.contains("1 -> 4 -> 3 -> 5 -> 6 -> 2 -> 1 cost:63"));
    }

    @Test
    public void testSolverGetPrintableBestWays() {
        solver.solve(0, 1, 0, false);
        String output = solver.getPrintableBestWays();
        //System.out.println(output);

        assertTrue("1 -> 4 -> 3 -> 5 -> 6 -> 2 -> 1 cost:63 for testInput.txt data",
                output.contains("1 -> 4 -> 3 -> 5 -> 6 -> 2 -> 1 cost:63"));
    }

}
