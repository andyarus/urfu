module main.fxsalesman {
    requires javafx.controls;
    requires javafx.fxml;


    opens main.fxsalesman to javafx.fxml;
    exports main.fxsalesman;
}