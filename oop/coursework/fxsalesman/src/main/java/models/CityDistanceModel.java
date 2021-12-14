package models;

import javafx.beans.property.IntegerProperty;
import javafx.beans.property.SimpleIntegerProperty;


public class CityDistanceModel {

    private final String cityName;
    private final IntegerProperty value = new SimpleIntegerProperty();

    @Override
    public String toString() {
        return Integer.toString(getValue());
    }

    public CityDistanceModel() {
        this.cityName = null;
        this.value.setValue(10);
        this.cityFrom = null;
        this.cityTo = null;
    }

    public CityDistanceModel(Integer value) {
        this.cityName = null;
        this.value.setValue(value);
        this.cityFrom = null;
        this.cityTo = null;
    }

    public CityDistanceModel(String cityName) {
        this.cityName = cityName;
        this.value.setValue(-1);
        this.cityFrom = null;
        this.cityTo = null;
    }

    public final String getCityName() {
        return this.cityName;
    }

    public final int getValue() {
        return this.value.get();
    }

    public final void setValue(int value) {
        this.value.set(value);
    }

    public final IntegerProperty valueProperty() {
        return this.value;
    }
}