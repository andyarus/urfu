package models;

import javafx.beans.property.IntegerProperty;
import javafx.beans.property.SimpleIntegerProperty;

public class CityDistanceModel {

    // Private Properties
    private final String cityName;
    private final IntegerProperty distance = new SimpleIntegerProperty();

    @Override
    public String toString() {
        return Integer.toString(getDistance());
    }

    // Init
    public CityDistanceModel() {
        this.cityName = null;
        this.distance.setValue(10);
    }

    public CityDistanceModel(Integer value) {
        this.cityName = null;
        this.distance.setValue(value);
    }

    public CityDistanceModel(String cityName) {
        this.cityName = cityName;
        this.distance.setValue(-1);
    }

    // Get/Set Methods
    public final String getCityName() {
        return this.cityName;
    }

    public final int getDistance() {
        return this.distance.get();
    }

    public final void setDistance(int value) {
        this.distance.set(value);
    }
}