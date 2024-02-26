package Runnable;

public class MinhaPrimeiraAtividade implements Runnable {
    
    @Override
    public void run (){
       System.out.println("Queremos que seja executado por um Thread diferente");
       System.out.println(Thread.currentThread().getName());
    }
}
