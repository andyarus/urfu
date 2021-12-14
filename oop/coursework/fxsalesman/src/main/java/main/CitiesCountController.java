package main;

import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Spinner;
import javafx.stage.Stage;

public class CitiesCountController {
    @FXML
    private Spinner<Integer> spinner;

    @FXML
    private Button okButton;

    public Integer citiesCount;

    @FXML
    protected void onOkButtonClick() {
        this.citiesCount = spinner.getValue();
        Stage stage = (Stage) okButton.getScene().getWindow();
        stage.close();
    }
}