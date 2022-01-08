#include "Matrix.h"
#include "Solver.h"
#include <iostream>
#include <algorithm>

void Matrix::fill(Solver &solver, std::vector<std::vector<int>> citiesDistances) {
    for (int row = 0; row < (int)citiesDistances.size(); row++) {
        // For sorted array idx
        std::vector<int> columnSorted = citiesDistances[row];
        sort(columnSorted.begin(), columnSorted.end(), [](const int &lhs, const int &rhs) -> bool { 
            if (lhs == Solver::passValue) {
                return false;
            } else if (rhs == Solver::passValue) {
                return true;
            }
            return lhs < rhs; 
        });
        std::vector<int> columnOriginal = citiesDistances[row];
        for (int column = 0; column < (int)citiesDistances[row].size(); column++) {
            int distance = citiesDistances[row][column];
            solver.cities[row][column] = distance;
            // Sorted array idxs
            int sortedValue = columnSorted[column];
            std::vector<int>::iterator itr = std::find(columnOriginal.begin(), columnOriginal.end(), sortedValue);
            int idx = std::distance(columnOriginal.begin(), itr);
            columnOriginal[idx] = Solver::processedValue;
            solver.citiesSortedIdx[row][column] = idx;
        }
    }
}
