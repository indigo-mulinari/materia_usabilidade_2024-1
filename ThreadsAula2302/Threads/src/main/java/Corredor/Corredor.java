package Corredor;

public class Corredor implements Runnable{
    private static double totalDaCorrida = 500;
    private double distanciaTotalPercorrida = 0;
    
    @Override
    public void run(){
        while(distanciaTotalPercorrida <= totalDaCorrida){
            distanciaTotalPercorrida += Math.random() * 50;
            System.out.println(Thread.currentThread().getName() + ":"
            + String.format("%.2f", distanciaTotalPercorrida) + "m");
            
            if(distanciaTotalPercorrida >= totalDaCorrida){
                System.out.println(Thread.currentThread().getName() + "Acabou");
            }
            
            try{
                Thread.sleep(2000 + (int)Math.random() * 1500);
            }
            
            catch(InterruptedException e){
                e.printStackTrace();
            }
        }
    }
}
