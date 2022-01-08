#include "Solver.h"
#include <iostream>

Solver::Solver(int citiesCount) {
    cities = vector<vector<int>>(citiesCount, vector<int>(citiesCount));
    citiesSortedIdx = vector<vector<int>>(citiesCount, vector<int>(citiesCount));

    this->citiesCount = citiesCount;

    way = vector<int>(citiesCount+1); // 1 return to the first city
    bestWay = vector<int>(citiesCount+1);
    bestCost = INT_MAX;

    bestWays = vector<vector<int>>(bestWaysCountMax, vector<int>(citiesCount+1));
    bestWaysCount = 0;
    visitedCities = vector<bool>(citiesCount, false);
    solutionsCount = 0;
}

void Solver::solve(int currentCityIdx, int processedCitiesCount, int cost, bool verbose) {
    if (cost > bestCost) {
        return;
    }

    if (processedCitiesCount == citiesCount) {
        cost += cities[currentCityIdx][0]; // add cost to move to the first city [0]

        way[processedCitiesCount-1] = currentCityIdx+1;
        way[citiesCount] = 1;

        if (cost < bestCost) {
            // Best way
            bestCost = cost;
            bestWay = way;
            // Best ways
            bestWaysCount = 0;
            bestWays[bestWaysCount] = way;
            bestWaysCount += 1;
        } else if (cost == bestCost) {
            if (bestWaysCount < bestWaysCountMax) {
                bestWays[bestWaysCount] = way;
                bestWaysCount += 1;
            }
        }
        solutionsCount += 1;
        if (verbose) {
            for (int i = 0; i < citiesCount + 1; i++) {
                if (i == citiesCount) {
                    std::cout << way[i];
                } else {
                    std::cout << way[i] << " -> ";
                }
            }
            std::cout << " cost:" << cost << std::endl;
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

std::string Solver::getPrintableCities() {
    std::string output = "\nCities:" + std::to_string(cities.size()) + "\n";
    for (int i = 0; i < (int)cities.size(); i ++) {
        output += std::to_string(i+1) + ":\t";

        for (int j = 0; j < (int)cities[i].size(); j ++) {
            output += std::to_string(cities[i][j]) + " ";
        }
        output += "\t\t\t";
        for (int j = 0; j < (int)cities[i].size(); j ++) {
            output += std::to_string(citiesSortedIdx[i][j]) + " ";
        }
        output += "\n";
    }

    return output;
}

std::string Solver::getPrintableBestWay() {
    std::string output = "\nBest way:\n";
    for (int i = 0; i < citiesCount+1; i++) {
        if (i == citiesCount) {
            output += std::to_string(bestWay[i]);
        } else {
            output += std::to_string(bestWay[i]) + " -> ";
        }
    }
    output += " cost:" + std::to_string(bestCost);

    return output;
}

std::string Solver::getPrintableBestWays() {
    std::string output = "\nBest ways:" + std::to_string(bestWaysCount) + "\n";
    for (int i = 0; i < bestWaysCount; i++) {
        for (int j = 0; j < (int)bestWays[i].size(); j++) {
            if (j == citiesCount) {
                output += std::to_string(bestWays[i][j]);
            } else {
                output += std::to_string(bestWays[i][j]) + " -> ";
            }
        }
        output += " cost:" + std::to_string(bestCost) + "\n";
    }

    return output;
}
