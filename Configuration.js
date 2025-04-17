function getConfiguration(config)
{
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.
  
  // Dependiendo del significado de la "dirección del dispositivo" en este 
  // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
  // para hacer referencia a la dirección en la interfaz de usuario.
  // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
  // MAC, es posible que desee utilizar el código siguiente.
  
  // config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
 
    var e = endpoints.addEndpoint("_PT_PV_WRAPPER_SPEED", "GPM Proconor 50", endpointType.genericSensor);
    e.variableTypeId = 1018;
    var e = endpoints.addEndpoint("_PT_TOTAL_KG", "Produccion Turno KG", endpointType.genericSensor);
    e.variableTypeId = 1009;


    //Tiempos de parada de turno
    var e = endpoints.addEndpoint("Operacion", "Horas de Operacion LPF 50 Acum. Turno", endpointType.genericSensor);
    e.variableTypeId = 1025;
    var e = endpoints.addEndpoint("Parada", "Horas de Parada LPF 50 Acum. Turno", endpointType.genericSensor);
    e.variableTypeId = 1025;
    var e = endpoints.addEndpoint("extParada", "Horas de Parada Externa LPF 50 Acum. Turno", endpointType.genericSensor);
    e.variableTypeId = 1025;
    //Tiempos de parada de dia
    var e = endpoints.addEndpoint("Operacion24", "Horas de Operacion LPF 50 Acum. Dia", endpointType.genericSensor);
    e.variableTypeId = 1025;
    var e = endpoints.addEndpoint("Parada24", "Horas de Parada LPF 50 Acum. Dia", endpointType.genericSensor);
    e.variableTypeId = 1025;
    var e = endpoints.addEndpoint("extParada24", "Horas de Parada Externa LPF 50 Acum. Dia", endpointType.genericSensor);
    e.variableTypeId = 1025;
    
    var e = endpoints.addEndpoint("_PT_TOTAL_KG_24", "Produccion Turno KG Acum. Dia", endpointType.genericSensor);
    e.variableTypeId = 1009;
     var e = endpoints.addEndpoint("_PT_TOTAL_KG_1st", "Produccion 1er Turno KG", endpointType.genericSensor);
    e.variableTypeId = 1009;
     var e = endpoints.addEndpoint("_PT_TOTAL_KG_2nd", "Produccion 2do Turno KG", endpointType.genericSensor);
    e.variableTypeId = 1009;
     var e = endpoints.addEndpoint("_PT_TOTAL_KG_3rd", "Produccion 3er Turno KG", endpointType.genericSensor);
    e.variableTypeId = 1009;

     //Tiempos de parada de turno 1
    var e = endpoints.addEndpoint("Operacion1", "Horas de Operacion LPF 50 1er Turno", endpointType.genericSensor);
    e.variableTypeId = 1025;
    var e = endpoints.addEndpoint("Parada1", "Horas de Parada LPF 50 1er Turno", endpointType.genericSensor);
    e.variableTypeId = 1025;
    var e = endpoints.addEndpoint("extParada1", "Horas de Parada Externa LPF 50 1er Turno", endpointType.genericSensor);
    e.variableTypeId = 1025;

     //Tiempos de parada de turno 2
    var e = endpoints.addEndpoint("Operacion2", "Horas de Operacion LPF 50 2do Turno", endpointType.genericSensor);
    e.variableTypeId = 1025;
    var e = endpoints.addEndpoint("Parada2", "Horas de Parada LPF 50 2do Turno", endpointType.genericSensor);
    e.variableTypeId = 1025;
    var e = endpoints.addEndpoint("extParada2", "Horas de Parada Externa LPF 50 2do Turno", endpointType.genericSensor);
    e.variableTypeId = 1025;

    //Tiempos de parada de turno 3
    var e = endpoints.addEndpoint("Operacion3", "Horas de Operacion LPF 50 3er Turno", endpointType.genericSensor);
    e.variableTypeId = 1025;
    var e = endpoints.addEndpoint("Parada3", "Horas de Parada LPF 50 3er Turno", endpointType.genericSensor);
    e.variableTypeId = 1025;
    var e = endpoints.addEndpoint("extParada3", "Horas de Parada Externa LPF 50 3er Turno", endpointType.genericSensor);
    e.variableTypeId = 1025;

    endpoints.addEndpoint("Prueba","Prueba Hora", endpointType.textContainer);
   

}

function validateDeviceAddress(address, result)
{
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.
  
  // En el código siguiente, se realiza una validación para asegurarse de que la 
  // dirección tiene exactamente 10 caracteres.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.

  // En el código siguiente, el agregado manual de endpoints está deshabilitada 
  // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
  // endpoints definidos por la función getEndpoints() anterior.
  
  // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.

  // En el código siguiente, se definen las siguientes reglas:
  // - Los endpoints no se pueden eliminar.
  // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.
  
   rules.canDelete = true;
  // rules.canEditSubType = (endpoint.address == "2");
}
