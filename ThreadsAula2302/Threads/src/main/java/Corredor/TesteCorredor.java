package Corredor;

public class TesteCorredor {
    
    public static void main(String[] args){
    Thread corredor1 = new Thread(new Corredor(), "Brendon");
    Thread corredor2 = new Thread(new Corredor(), "Freddie");
    Thread corredor3 = new Thread(new Corredor(), "Glaubio");
    Thread corredor4 = new Thread(new Corredor(), "Xurumela");
    Thread corredor5 = new Thread(new Corredor(), "Tobias");
    
    corredor1.start();
    corredor2.start();
    corredor3.start();
    corredor4.start();
    corredor5.start();
    }
}
