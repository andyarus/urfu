module main.fxsalesman {
    requires javafx.controls;
    requires javafx.fxml;

    opens main to javafx.fxml;
    exports main;
    exports tableCells;
    opens tableCells to javafx.fxml;
}