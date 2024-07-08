import PromptSync from "prompt-sync";

export function enterNumbers (){
    let anadir_numero = "";
    let pri_NumbOK=0;
    let seg_NumbOK=0;
    let salir_validacion;
    const prompt = PromptSync();

    console.warn ("Introduce 2 numeros uno para Timmy y otro para Sarah");
    for (let index = 1; index < 3; index++) {
        salir_validacion = "NOK";        
        do{     
            // anadir_numero = parseInt(prompt("El angulo numero " + index + " es = "));
            // cambiamos parseInt, ya que lo convertia directamente a ENTERO y no ingresaba a la validacion
            anadir_numero = Number(prompt("El numero " + index + " es = "));
            if (isNaN(anadir_numero)) 
                {
                console.error("NO TEXTO - Ingrese solo numeros");
                } else 
                     {
                      if (Number.isInteger(anadir_numero) == false)
                         {
                          console.info("Ingrese solo numeros Enteros");
                         } else 
                              {
                                salir_validacion = "OK";
                                if (index==1){
                                             pri_NumbOK = anadir_numero;
                                   } else {
                                             seg_NumbOK = anadir_numero;
                                          }    
                               }            
                     }
          }while(salir_validacion != "OK") 
    }
    console.info("Timmy : " + pri_NumbOK + " / Sarah : " + seg_NumbOK);
    return [pri_NumbOK, seg_NumbOK];
    }