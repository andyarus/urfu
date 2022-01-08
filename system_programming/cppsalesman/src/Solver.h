#ifndef SOLVER_H
#define SOLVER_H
#include <vector>
using namespace std;
class Solver {
    private:
        int citiesCount;
        vector<int> way;
        vector<vector<int>> bestWays;
        int bestWaysCount;
        const int bestWaysCountMax = 100;
        vector<bool> visitedCities;
    public:
        Solver(int citiesCount);
        void solve(int currentCityIdx, int processedCitiesCount, int cost, bool verbose);
        std::string getPrintableCities();
        std::string getPrintableBestWay();
        std::string getPrintableBestWays();
        vector<vector<int>> cities;
        vector<vector<int>> citiesSortedIdx;
        vector<int> bestWay;
        int bestCost;
        int solutionsCount;
        const static int passValue = -1;
        const static int processedValue = -2;
};

#endif