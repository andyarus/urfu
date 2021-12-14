package main.fxsalesman;

import javafx.stage.Stage;

public class ReturnableStage extends Stage {
    public Integer showAndWait(CitiesCountController c) {
        super.showAndWait();
        return c.citiesCount;
    }
}
