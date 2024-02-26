package com.mycompany.threads;

public class MinhaPrimeiraThread extends Thread {
    
    @Override
    public void run (){
       System.out.println("Estou sendo executado por outra thread");
       System.out.println(Thread.currentThread().getName());
    }
}
