package com.mycompany.threads;

public class Teste {
    public static void main (String [] args) {
        MinhaPrimeiraThread thread1 =
                new MinhaPrimeiraThread();
        
        MinhaPrimeiraThread thread2 =
                new MinhaPrimeiraThread();
        
        thread1.start ();
        thread2.start ();
        
        System.out.println (Thread.currentThread().getName());
    }
}
