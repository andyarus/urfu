#include "FileManager.h"
#include "Solver.h"
#include <fstream>
#include <sstream>
#include <iostream>
#include <regex>

std::vector<std::vector<int>> FileManager::parse(std::string fileName) {
    std::vector<std::vector<int>> citiesDistances;
    int rowsCount = 0;
    int columnsCount = 0;
    std::ifstream infile(fileName);
    std::string line;
    while (std::getline(infile, line)) {
        // Split string
        std::regex rgx("\\s+");
        std::sregex_token_iterator iter(line.begin(), line.end(), rgx, -1);
        std::sregex_token_iterator end;
        if (*iter == line) {
            throw "wrong input data";
        }

        std::vector<int> cityDistances;
        int columnsCountTemp = 0;
        for (; iter != end; ++iter) {
            try {
                int distance = std::stoi(*iter);
                cityDistances.push_back(distance);
            } catch(...) {
                int passValue = Solver::passValue;
                cityDistances.push_back(passValue);
            }
            columnsCountTemp += 1;
        }

        citiesDistances.push_back(cityDistances);

        if (columnsCount == 0) {
            columnsCount = columnsCountTemp;
        } else if (columnsCount != columnsCountTemp) {
            throw  "wrong matrix: different columns lengths!";
        }

        rowsCount += 1;
    }

    return citiesDistances;
}
