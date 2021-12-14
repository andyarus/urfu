package main;

import javafx.beans.binding.Bindings;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.geometry.Insets;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.VBox;
import javafx.stage.*;
import javafx.util.Callback;
import tableCells.SpinnerCell;
import models.CityDistanceModel;
import solver.FileManager;
import solver.Matrix;
import solver.Solver;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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
        long startTime = System.nanoTime();
        // Solve salesman task
        Solver solver = Matrix.random();
        solver.solve(0, 1, 0, false);
        String result = solver.result(startTime);
        textArea.appendText(result);
    }

    @FXML
    protected void onManualButtonClick() {
        Integer citiesCount = openCitiesCountController();
        if (citiesCount == null) {
            showAlert("Необходимо выбрать количество городов!");
            return;
        }
        openCitiesDistances(citiesCount);
    }

    @FXML
    protected void onClearLogClick() {
        textArea.setText("");
    }

    // Show Alert
    private void showAlert(String errorMessage) {
        Alert alert = new Alert(Alert.AlertType.ERROR);
        alert.setTitle("Ошибка");
        alert.setHeaderText("Ошибка");
        alert.setContentText(errorMessage);
        alert.showAndWait();
    }

    // Open CitiesCountController
    private Integer openCitiesCountController() {
        try {
            FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("citiesCountView.fxml"));
            Parent root = (Parent) fxmlLoader.load();
            ReturnableStage stage = new ReturnableStage();
            stage.initModality(Modality.APPLICATION_MODAL);
            stage.initStyle(StageStyle.UNDECORATED);
            //stage.setTitle("Выберите количество городов");
            stage.setScene(new Scene(root));
            CitiesCountController controller = fxmlLoader.getController();
            Integer result = stage.showAndWait(controller);
            return result;
        } catch (IOException e) {
            System.out.println(e);
            showAlert(e.getMessage());
            return null;
        }
    }

    // Open Cities Distances Manual Input Scene
    private void openCitiesDistances(Integer citiesCount) {
        CityDistanceModel[][] citiesMatrix = new CityDistanceModel[citiesCount][citiesCount+1];
        for(int x = 0; x < citiesCount; x++) {
            for (int y = 0; y < citiesCount+1; y++) {
                if (y == 0) {
                    switch (x) {
                        case 0: citiesMatrix[x][y] = new CityDistanceModel("A"); break;
                        case 1: citiesMatrix[x][y] = new CityDistanceModel("B"); break;
                        case 2: citiesMatrix[x][y] = new CityDistanceModel("C"); break;
                        case 3: citiesMatrix[x][y] = new CityDistanceModel("D"); break;
                        case 4: citiesMatrix[x][y] = new CityDistanceModel("E"); break;
                        case 5: citiesMatrix[x][y] = new CityDistanceModel("F"); break;
                        case 6: citiesMatrix[x][y] = new CityDistanceModel("G"); break;
                        case 7: citiesMatrix[x][y] = new CityDistanceModel("H"); break;
                        case 8: citiesMatrix[x][y] = new CityDistanceModel("I"); break;
                        case 9: citiesMatrix[x][y] = new CityDistanceModel("G"); break;
                        default: citiesMatrix[x][y] = new CityDistanceModel(); break;
                    }
                } else {
                    if (x == y-1) {
                        citiesMatrix[x][y] = new CityDistanceModel(-1);
                    } else {
                        citiesMatrix[x][y] = new CityDistanceModel();
                    }
                }
            }
        }

        ObservableList<CityDistanceModel[]> citiesMatrixObservable = FXCollections.observableArrayList();
        citiesMatrixObservable.addAll(Arrays.asList(citiesMatrix));

        TableView<CityDistanceModel[]> tableView = new TableView<>(citiesMatrixObservable);

        final Double cityNamesColumnWidth = 25.0;
        final Double spinnerColumnWidth = 90.0;

        // Cities Row Titles
        TableColumn<CityDistanceModel[], CityDistanceModel> cityNamesColumn = new TableColumn<>();
        cityNamesColumn.setCellValueFactory(cellData -> Bindings.createObjectBinding(() -> cellData.getValue()[0]));
        cityNamesColumn.setCellFactory((column) -> {
            TableCell<CityDistanceModel[], CityDistanceModel> tableCell = new TableCell<CityDistanceModel[], CityDistanceModel>() {
                @Override
                protected void updateItem(CityDistanceModel item, boolean empty) {
                    super.updateItem(item, empty);
                    if (empty || item == null) {
                        this.setText(null);
                    } else {
                        this.setText(item.getCityName());
                    }
                }
            };
            return tableCell;
        });
        cityNamesColumn.prefWidthProperty().setValue(cityNamesColumnWidth);
        cityNamesColumn.setResizable(false);
        tableView.getColumns().add(cityNamesColumn);

        // Spinner Cells
        for (int i = 0; i < citiesCount; i++) {
            String cityName = citiesMatrixObservable.get(i)[0].getCityName();
            TableColumn<CityDistanceModel[], CityDistanceModel> spinnerColumn = new TableColumn<>(cityName);
            final int columnIndex = i+1;
            spinnerColumn.setCellValueFactory(cellData -> Bindings.createObjectBinding(() -> cellData.getValue()[columnIndex]));
            spinnerColumn.setCellFactory(new Callback<TableColumn<CityDistanceModel[], CityDistanceModel>, TableCell<CityDistanceModel[], CityDistanceModel>>() {
                @Override
                public TableCell<CityDistanceModel[], CityDistanceModel> call(TableColumn<CityDistanceModel[], CityDistanceModel> param) {
                    return new SpinnerCell<>();
                }
            });
            spinnerColumn.prefWidthProperty().setValue(spinnerColumnWidth);
            spinnerColumn.setResizable(false);
            tableView.getColumns().add(spinnerColumn);
        }

        Button doneButton = new Button("Готово");
        doneButton.setOnAction((ActionEvent event) -> {
            List<List<Integer>> citiesDistances = new ArrayList<List<Integer>>();
            Integer rowCount = tableView.getItems().size();
            for (int x = 0; x < rowCount; x++) {
                CityDistanceModel[] rowItems = tableView.getItems().get(x);
                citiesDistances.add(new ArrayList<Integer>());
                for (int y = 1; y < rowItems.length; y++) {
                    CityDistanceModel item = rowItems[y];
                    if (item != null) {
                        citiesDistances.get(x).add(item.getDistance());
                    }
                }
            }

            // Solve salesman task
            Solver solver = new Solver(rowCount);
            Matrix.fill(solver, citiesDistances);
            long startTime = System.nanoTime();
            solver.solve(0, 1, 0, false);
            String result = solver.result(startTime);
            textArea.appendText(result);

            Stage stage = (Stage) doneButton.getScene().getWindow();
            stage.close();
        });

        final Double sceneWidth = cityNamesColumnWidth + spinnerColumnWidth * citiesCount + 50.0;
        final Double sceneHeight = 50.0 + 30.0 * citiesCount + 50.0;

        VBox vbox = new VBox(tableView, doneButton);
        vbox.setMargin(doneButton, new Insets(10, 10, 10, sceneWidth/2 - 29.5));
        Scene scene = new Scene(vbox, sceneWidth, sceneHeight);
        Stage stage = new Stage();
        stage.initModality(Modality.APPLICATION_MODAL);
        //stage.initStyle(StageStyle.UNDECORATED);
        stage.setScene(scene);
        stage.show();
    }
}
