package yaav;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

import static org.junit.Assert.assertTrue;

public class TestMatrix {

    @Test
    public void testMatrix() {
        int citiesCount = 10;
        Random rand = new Random();
        List<List<Integer>> citiesDistances = new ArrayList<List<Integer>>();
        for (int i = 0; i < citiesCount; i++) {
            citiesDistances.add(new ArrayList<Integer>());
            for (int j = 0; j < citiesCount; j++) {
                citiesDistances.get(i).add(rand.nextInt(100));
            }
        }
        Solver solver = new Solver(citiesCount);
        Matrix.fill(solver, citiesDistances);

        //solver.printCities();
        assertTrue("Cities array length must be equal cities count",
                solver.cities.length == citiesCount);

        List<Integer> rowValues = new ArrayList<Integer>();
        int row = rand.nextInt(citiesCount);
        for (int i = 0; i < solver.cities[row].length; i++) {
            rowValues.add(solver.cities[row][i]);
        }
        Collections.sort(rowValues);

        assertTrue("Cities must be sorted",
                solver.cities[row][solver.citiesSortedIdx[row][0]] == rowValues.get(0));
    }

}
