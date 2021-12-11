package main.fxsalesman;

import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.Label;
import javafx.scene.control.TextArea;
import javafx.stage.FileChooser;
import javafx.stage.Window;
import solver.brutforce.FileManager;
import solver.brutforce.Solver;

import java.io.File;
import java.io.IOException;

public class MainController {
    @FXML
    private Label titleLabel;

    @FXML
    private TextArea textArea;

    @FXML
    protected void onOpenFileButtonClick() {
        FileChooser chooser = new FileChooser();
        chooser.setTitle("Выберите файл");
        Window window = titleLabel.getScene().getWindow();
        File file = chooser.showOpenDialog(window);
        if (file == null) return;
        String filePath = file.getPath();
        if (filePath.trim().isEmpty()) return;
        try {
            long startTime = System.nanoTime();
            // Solve salesman task
            Solver solver = FileManager.parse(filePath);
            solver.solve(0, 1, 0, false);
            String result = solver.result(startTime);
            textArea.appendText(result);
        } catch (IOException e) {
            System.out.println(e);
            showAlert(e.getMessage());
        }
    }

    @FXML
    protected void onRandomButtonClick() {
    }

    @FXML
    protected void onManualButtonClick() {
    }

    @FXML
    protected void onClearLogClick() {
        textArea.setText("");
    }

    // Private Methods
    private void showAlert(String errorMessage) {
        Alert alert = new Alert(Alert.AlertType.ERROR);
        alert.setTitle("Ошибка");
        alert.setHeaderText("Ошибка");
        alert.setContentText(errorMessage);
        alert.showAndWait();
    }
}