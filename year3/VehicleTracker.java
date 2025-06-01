import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.Scanner;
import java.util.Random;

// Class representing a Car with essential properties
class Car {
    private final String type;
    private final String color;
    private double latitude;
    private double longitude;

    public Car(String type, String color, double latitude, double longitude) {
        this.type = type;
        this.color = color;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    // Update car's location
    public synchronized void drive(double newLatitude, double newLongitude) {
        this.latitude = newLatitude;
        this.longitude = newLongitude;
    }

    // Get the current location of the car
    public synchronized String getLocation() {
        return String.format("Latitude: %.6f, Longitude: %.6f", latitude, longitude);
    }

    @Override
    public String toString() {
        return String.format("Car [Type: %s, Color: %s, Location: (%s)]", type, color, getLocation());
    }
}

// Thread-safe Fleet Tracking System
class TrackingFleet {
    private final ConcurrentMap<Integer, Car> fleet = new ConcurrentHashMap<>();
    private final Random random = new Random();

    // Define a car in the fleet
    public void defineCar(int id, String type, String color, double latitude, double longitude) {
        fleet.put(id, new Car(type, color, latitude, longitude));
        System.out.printf("Car %d added: %s\n", id, fleet.get(id));
    }

    // Simulate driving the car to a new location
    public void driveCar(int id) {
        Car car = fleet.get(id);
        if (car != null) {
            double newLatitude = -90 + (90 - (-90)) * random.nextDouble();
            double newLongitude = -180 + (180 - (-180)) * random.nextDouble();
            car.drive(newLatitude, newLongitude);
            System.out.printf("Car %d driven to new location: %s\n", id, car.getLocation());
        } else {
            System.out.println("Car not found!");
        }
    }

    // Track a car's current location
    public void trackCar(int id) {
        Car car = fleet.get(id);
        if (car != null) {
            System.out.printf("Tracking Car %d: %s\n", id, car.getLocation());
        } else {
            System.out.println("Car not found!");
        }
    }
}

public class VehicleTracker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        TrackingFleet fleet = new TrackingFleet();
        Random random = new Random();

        System.out.print("Enter the number of cars in the fleet: ");
        int numberOfCars = scanner.nextInt();
        scanner.nextLine(); // Consume the newline

        // Initialize cars
        for (int i = 1; i <= numberOfCars; i++) {
            System.out.printf("Defining Car %d\n", i);
            System.out.print("Enter car type: ");
            String type = scanner.nextLine();
            System.out.print("Enter car color: ");
            String color = scanner.nextLine();
            double initialLatitude = -90 + (90 - (-90)) * random.nextDouble();
            double initialLongitude = -180 + (180 - (-180)) * random.nextDouble();
            fleet.defineCar(i, type, color, initialLatitude, initialLongitude);
        }

        // Menu-driven system
        while (true) {
            System.out.println("\nMenu:");
            System.out.println("1. Drive a car");
            System.out.println("2. Track a car's location");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter car ID to drive: ");
                    int driveId = scanner.nextInt();
                    fleet.driveCar(driveId);
                    break;
                case 2:
                    System.out.print("Enter car ID to track: ");
                    int trackId = scanner.nextInt();
                    fleet.trackCar(trackId);
                    break;
                case 3:
                    System.out.println("Exiting program.");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid choice. Try again.");
                    break;
            }
        }
    }
}
