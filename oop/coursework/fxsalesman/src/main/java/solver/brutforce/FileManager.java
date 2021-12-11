package solver.brutforce;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class FileManager {
    // Parse input file
    public static Solver parse(String filename) throws IOException {
        File file = new File(filename);
        Scanner sc = new Scanner(file);

        List<List<Integer>> citiesDistances = new ArrayList<List<Integer>>();

        int rowCount = 0;
        int columnCount = 0;
        while(sc.hasNext()){
            String line = sc.nextLine();

            String[] parts = line.split("\\s");
            if (parts.length == 0) {
                continue;
            }

            citiesDistances.add(new ArrayList<Integer>());

            int columnCountTmp = 0;
            for (String part : parts) {
                columnCountTmp += 1;
                try {
                    int distance = Integer.parseInt(part);
                    citiesDistances.get(rowCount).add(distance);
                } catch (NumberFormatException e) {
                    citiesDistances.get(rowCount).add(Solver.passValue);
                    continue;
                }
            }

            if (columnCount == 0) {
                columnCount = columnCountTmp;
            } else if (columnCount != columnCountTmp) {
                throw new IOException("wrong matrix: different column lengths!");
            }

            rowCount++;
        }
        sc.close();

        Solver solver = new Solver(rowCount);
        Matrix.fill(solver, citiesDistances);

        return solver;
    }
}
