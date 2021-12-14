package tableCells;

import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.scene.control.Spinner;
import javafx.scene.control.SpinnerValueFactory;
import javafx.scene.control.TableCell;
import models.CityDistanceModel;
import solver.brutforce.Solver;

public class SpinnerCell<T> extends TableCell<T, CityDistanceModel> {
    @Override
    protected void updateItem(CityDistanceModel item, boolean empty) {
        super.updateItem(item, empty);
        if (empty || item == null) {
            this.setText(null);
            this.setGraphic(null);
        } else {
            SpinnerValueFactory.IntegerSpinnerValueFactory valueFactory = new SpinnerValueFactory.IntegerSpinnerValueFactory(10, 1000);
            Spinner<Integer> spinner = new Spinner<>(valueFactory);
            Integer itemValue = item.getValue();
            if (itemValue == Solver.passValue) {
                valueFactory.minProperty().setValue(itemValue);
                valueFactory.maxProperty().setValue(itemValue);
                spinner.setEditable(false);
            } else {
                spinner.setEditable(true);
            }
            valueFactory.setValue(itemValue);
            this.setGraphic(spinner);
            ChangeListener<Number> valueChangeListener = (ObservableValue<? extends Number> observable, Number oldValue, Number newValue) -> {
                valueFactory.setValue(newValue.intValue());
            };
            spinner.valueProperty().addListener((obs, oldValue, newValue) -> {
                CityDistanceModel model = getItem();
                if (model != null) {
                    model.setValue(newValue);
                }
            });
        }
    }
};
