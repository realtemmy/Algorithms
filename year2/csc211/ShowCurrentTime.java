package year2.csc211;

public class ShowCurrentTime {
    // (Current time) Listing 2.7, ShowCurrentTime.java, gives a program that
    // displays the current time in GMT. Revise the program so that it prompts the
    // user to
    // enter the time zone offset to GMT and displays the time in the specified time
    // zone.

    public static void main(String[] args) {
        long milliseconds = System.currentTimeMillis();
        long totalSeconds = milliseconds / 1000;
        long currentSecond = totalSeconds % 60;
        long totalMinutes = totalSeconds / 60;
        long currentMinute = totalMinutes % 60;
        long totalHours = totalMinutes / 60;
        long currentHour = totalHours % 24;

        System.out.println("Current time is " + currentHour + ": " + currentMinute + ": " + currentSecond);
        // An hour behing
    }
}
