package solver.brutforce;

import java.util.Arrays;

public class Solver {
    private int citiesCount;
    public int[][] cities;
    public int[][] citiesSortedIdx;
    private int[] way;

    public int[] bestWay;
    public int bestCost;
    private int[][] bestWays;
    private int bestWaysCount;
    private int bestWaysCountMax = 100;
    private boolean[] visitedCities;
    public int solutionsCount;

    public static int passValue = -1;

    public Solver(int cityCount) {
        this.cities = new int[cityCount][cityCount];
        this.citiesSortedIdx = new int[cityCount][cityCount];

        citiesCount = cityCount;

        way = new int[cityCount+1]; // 1 return to the first city
        bestWay = new int[cityCount+1];
        bestCost = Integer.MAX_VALUE;
        bestWays = new int[bestWaysCountMax][cityCount+1];
        bestWaysCount = 0;

        visitedCities = new boolean[cityCount];
        for (int i = 0; i < cityCount; i++) {
            visitedCities[i] = false;
        }

        solutionsCount = 0;
    }

    public void solve(int currentCityIdx, int processedCitiesCount, int cost, boolean verbose) {
        if (cost > bestCost) {
            return;
        }

        if (processedCitiesCount == citiesCount) {
            cost += cities[currentCityIdx][0]; // add cost to move to the first city [0]

            way[processedCitiesCount-1] = currentCityIdx+1;
            way[citiesCount] = 1;

            if (cost < bestCost) {
                // best way
                bestCost = cost;
                bestWay = Arrays.copyOf(way, way.length);

                // best ways
                bestWaysCount = 0;
                bestWays[bestWaysCount] = Arrays.copyOf(way, way.length);
                bestWaysCount += 1;
            } else if (cost == bestCost) {
                if (bestWaysCount < bestWaysCountMax) {
                    bestWays[bestWaysCount] = Arrays.copyOf(way, way.length);
                    bestWaysCount += 1;
                }
            }

            solutionsCount += 1;

            if (verbose) {
                //System.out.println("way:");
                for (int i = 0; i < citiesCount + 1; i++) {
                    if (i == citiesCount) {
                        System.out.print(way[i]);
                    } else {
                        System.out.print(way[i] + " -> ");
                    }
                }
                System.out.print(" Стоимость:" + cost);
                System.out.println();
            }

            return;
        }

        visitedCities[currentCityIdx] = true;
        way[processedCitiesCount-1] = currentCityIdx+1;

        for (int i = 0; i < citiesCount-1; i++) {
            int nextCityIdx = citiesSortedIdx[currentCityIdx][i];
            if (!visitedCities[nextCityIdx]) {
                int costToNextCity = cities[currentCityIdx][nextCityIdx];
                solve(nextCityIdx, processedCitiesCount + 1, cost + costToNextCity, verbose);
            }
        }

        visitedCities[currentCityIdx] = false;
    }

    public String getPrintableCities() {
        String output = "Города:" + cities.length + "\n";
        for (int i = 0; i < cities.length; i ++) {
            output += i+1 + ":\t";

            for (int j = 0; j < cities[i].length; j ++) {
                output += cities[i][j] + " ";
            }
            output += "\t\t\t";
            for (int j = 0; j < cities[i].length; j ++) {
                output += citiesSortedIdx[i][j] + " ";
            }
            output += "\n";
        }

        return output;
    }

    public String getPrintableBestWay() {
        String output = "\nЛучший путь:" + "\n";
        for (int i = 0; i < citiesCount+1; i++) {
            if (i == citiesCount) {
                output += bestWay[i];
            } else {
                output += bestWay[i] + " -> ";
            }
        }
        output += " Стоимость:" + bestCost;

        return output;
    }

    public String getPrintableBestWays() {
        String output = "\nЛучшие пути:" + bestWaysCount + "\n";
        for (int i = 0; i < bestWaysCount; i++) {
            for (int j = 0; j < bestWays[i].length; j++) {
                if (j == citiesCount) {
                    output += bestWays[i][j];
                } else {
                    output += bestWays[i][j] + " -> ";
                }
            }
            output += " Стоимость:" + bestCost + "\n";
        }

        return output;
    }

    public String result(long startTime) {
        String output;
        long resultTime = System.nanoTime() - startTime;
        long seconds = resultTime / 1000000000;
        long minutes = seconds / 60;
        long hours = minutes / 60;
        output = getPrintableCities();
        output += getPrintableBestWays();
        output += String.format("Решений:%d", solutionsCount);
        output += String.format("\nВремя решения:%dh %dm %ds %dns", hours, minutes, seconds, resultTime);
        return output;
    }
}
