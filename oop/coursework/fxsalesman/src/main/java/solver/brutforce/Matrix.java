package solver.brutforce;

import java.util.*;

public class Matrix {
    // Private Properties
    private static Comparator<Integer> distanceComparator = (lhs, rhs) -> {
        if (lhs.intValue() == Solver.passValue) {
            return 1;
        } else if (rhs.intValue() == Solver.passValue) {
            return -1;
        }
        return lhs.compareTo(rhs);
    };

    // Public Static Methods
    public static void fill(Solver solver, List<List<Integer>> citiesDistances) {
        for (int row = 0; row < citiesDistances.size(); row++) {
            // for sorted array idx
            List<Integer> columnSorted = new ArrayList<>(citiesDistances.get(row));
            Collections.sort(columnSorted, distanceComparator);
            List<Integer> columnOriginal = new ArrayList<>(citiesDistances.get(row));
            for (int column = 0; column < citiesDistances.get(row).size(); column++) {
                int distance = citiesDistances.get(row).get(column);
                solver.cities[row][column] = distance;
                // Sorted array idxs
                int sortedValue = columnSorted.get(column);
                int idx = columnOriginal.indexOf(sortedValue);
                columnOriginal.set(idx, null); // processed value
                solver.citiesSortedIdx[row][column] = idx;
            }
        }
    }

    public static Solver random() {
        int size = getRandomNumber(5, 10);
        Solver solver = new Solver(size);
        for (int row = 0; row < size; row++) {
            for (int column = 0; column < size; column++) {
                if (solver.cities[row][column] != solver.passValue
                    || row == column) {
                    continue;
                }
                int distance = getRandomNumber(10, 1000);
                solver.cities[row][column] = distance;
                solver.cities[column][row] = distance;
            }
            for (int column = 0; column < size; column++) {
                Integer[] sortedColumn = new Integer[solver.cities[row].length];
                for(int i = 0; i < solver.cities[row].length; i++) {
                    sortedColumn[i] = Integer.valueOf(solver.cities[row][i]);
                }
                List<Integer> columnOriginal = new ArrayList<>(Arrays.asList(sortedColumn));
                Arrays.sort(sortedColumn, distanceComparator);
                // Sorted array idxs
                int sortedDistance = sortedColumn[column];
                int idx = columnOriginal.indexOf(sortedDistance);
                columnOriginal.set(idx, null); // processed value
                solver.citiesSortedIdx[row][column] = idx;
            }
        }
        return solver;
    }

    // Private Static Methods
    private static int getRandomNumber(int min, int max) {
        return (int) ((Math.random() * (max - min)) + min);
    }
}
