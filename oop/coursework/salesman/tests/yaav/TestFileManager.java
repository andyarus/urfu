package yaav;

import org.junit.Test;
import static org.junit.Assert.assertTrue;
import java.io.IOException;

public class TestFileManager {

    @Test
    public void testFileManager() throws IOException {
        String fileName = "tests/yaav/testInput.txt";
        Solver solver = FileManager.parse(fileName);
        //System.out.println(solver.getPrintableCities());

        assertTrue("File must contains matrix for solve", solver.cities.length > 0);
    }

}
