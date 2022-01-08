#include "FileManager.h"
#include "Matrix.h"
#include <iostream>
#include <chrono>

int main(int argc, char *argv[]) {
	if (argc < 2 || argv[1] != std::string("-f")) {
		std::cout << "You must specify fileName with -f argument" << std::endl;
		return -1;
	}
	std::string fileName = argv[2];

	try {
		std::chrono::steady_clock::time_point startTime = std::chrono::steady_clock::now();
		// Parse source file
		std::vector<std::vector<int>> citiesDistances = FileManager().parse(fileName);
		Solver solver = Solver(citiesDistances.size());
		// Fill solver with cities distances
		Matrix::fill(solver, citiesDistances);
		// Solve salesman task
		solver.solve(0, 1, 0, false);

		std::cout << solver.getPrintableCities() << std::endl;
		std::cout << solver.getPrintableBestWays() << std::endl;
		std::cout << "Solutions count:" << solver.solutionsCount << std::endl;

		std::chrono::steady_clock::time_point endTime = std::chrono::steady_clock::now();
		long long ns = std::chrono::duration_cast<std::chrono::nanoseconds>(endTime - startTime).count();
		long seconds = ns / 1000000000;
		long minutes = seconds / 60;
		long hours = minutes / 60;
		std::cout << "\nProcessing time: " << hours << "h " << minutes << "m " << seconds << "s" << " " << ns << "ns" << std::endl;
	} catch (const char *e) {
		std::cerr << "Source file parse error:" << e << std::endl;
	}
}