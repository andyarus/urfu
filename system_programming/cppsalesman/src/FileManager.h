#ifndef FILEMANAGER_H
#define FILEMANAGER_H

#include <string>
#include <vector>

class FileManager {
    public:
        std::vector<std::vector<int>> parse(std::string fileName);
};

#endif