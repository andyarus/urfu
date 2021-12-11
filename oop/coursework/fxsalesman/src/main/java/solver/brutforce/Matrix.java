package solver.brutforce;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Matrix {
    public static void fill(Solver solver, List<List<Integer>> citiesDistances) {
        for (int row = 0; row < citiesDistances.size(); row++) {
            // for sorted array idx
            List<Integer> columnSorted = new ArrayList<>(citiesDistances.get(row));
            Collections.sort(columnSorted, new Comparator<Integer>() {
                public int compare(Integer lhs, Integer rhs){
                    if (lhs.intValue() == solver.passValue) {
                        return 1;
                    } else if (rhs.intValue() == solver.passValue) {
                        return -1;
                    }
                    return lhs.compareTo(rhs);
                }
            });

            List<Integer> columnOriginal = new ArrayList<>(citiesDistances.get(row));

            for (int column = 0; column < citiesDistances.get(row).size(); column++) {
                int distance = citiesDistances.get(row).get(column);
                solver.cities[row][column] = distance;

                // sorted array idxs
                int sortedValue = columnSorted.get(column);
                int idx = columnOriginal.indexOf(sortedValue);
                columnOriginal.set(idx, null); // processed value
                solver.citiesSortedIdx[row][column] = idx;
            }
        }
    }
}
