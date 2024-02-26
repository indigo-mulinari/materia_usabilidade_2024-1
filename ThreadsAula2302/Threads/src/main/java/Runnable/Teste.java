package Runnable;

public class Teste {
    public static void main(String[] args) {
        Thread thread1 =
                new Thread(new MinhaPrimeiraAtividade()); 
        
        Thread thread2 =
                new Thread(new MinhaPrimeiraAtividade());
        
        thread1.start();
        thread2.start();
        
        System.out.println(Thread.currentThread().getName());
    }
    
}
