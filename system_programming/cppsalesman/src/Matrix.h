#ifndef MATRIX_H
#define MATRIX_H

#include "Solver.h"
#include <vector>

class Matrix {
    public:
        static void fill(Solver &solver, std::vector<std::vector<int>> citiesDistances);

};

#endif