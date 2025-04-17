function parseUplink(device, payload)
{

     function ExtractTagData(tagValuesObject){
        v = null;
        q = null;
        ts = null;
        return {
            v: (tagValuesObject["v"].toFixed(2)),
            q: tagValuesObject["q"],
            ts: new Date(tagValuesObject["ts"]).toUTCString()
        }
    }
    
    var N3uronData = payload.asJsonObject();
    
    env.log(N3uronData);
 
    var hora_actual = new Date().getHours()-3;//obtengo la fecha actual en ts
    var hora_carga = 12
    
   
    var extdown_hour, extdown_min, extdown_sec;
    var down_hour, down_min, down_sec;
    var operation_hour, operation_min, operation_sec;

    var extdown1_hour, extdown1_min, extdown1_sec;
    var down1_hour, down1_min, down_sec1;
    var operation1_hour, operation1_min, operation1_sec;

    var extdown2_hour, extdown2_min, extdown2_sec;
    var down2_hour, down2_min, down2_sec;
    var operation2_hour, operation2_min, operation2_sec;

    var extdown3_hour, extdown3_min, extdown3_sec;
    var down3_hour, down3_min, down3_sec;
    var operation3_hour, operation3_min, operation3_sec;

    var dia_hour, dia_min, dia_sec;
    var diadown_hour, diadown_min, diadown_sec;
    var diaextdown_hour, diaextdown_min, diadown_sec;

    operation_ts: new Date;
    down_ts: new Date;
    extdown_ts: new Date;

    operation1_ts: new Date;
    down1_ts: new Date;
    extdown1_ts: new Date;

    operation2_ts: new Date;
    down2_ts: new Date;
    extdown2_ts: new Date;


    operation3_ts: new Date;
    down3_ts: new Date;
    extdown3_ts: new Date;

    dia_ts: new Date;
    diadown_ts: new Date;
    diaextdown_ts: new Date;

   //Recorremos cada "tag" del array del json y procesamos lo que nos interesan
   for (let tag in N3uronData) {
    
    switch (tag){
        
        case "/Proconor50/_PT_PV_WRAPPER_SPEED":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("_PT_PV_WRAPPER_SPEED");
                etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);  
            });
            break;
        
        case "/Proconor50/_PT_TOTAL_KG":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("_PT_TOTAL_KG");
                etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);  
            });
            break;

         case "/Proconor50/_PT_TOTAL_KG_24":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("_PT_TOTAL_KG_24");
                etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);  
            });
            break;

            case "/Proconor50/_PT_TOTAL_KG_1st":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("_PT_TOTAL_KG_1st");
                etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);  
            });
            break;

            case "/Proconor50/_PT_TOTAL_KG_2nd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("_PT_TOTAL_KG_2nd");
                etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);  
            });
            break;
        
        case "/Proconor50/_PT_TOTAL_KG_3rd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                if(ValueData.v > 0 && hora_actual < hora_carga){
                    var etv1 = device.endpoints.byAddress("_PT_TOTAL_KG_3rd");
                    etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);  
                }
                if (hora_actual >= hora_carga){
                    var etv1 = device.endpoints.byAddress("_PT_TOTAL_KG_3rd");
                    etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);  
                }
                
            });
            break;


        //TIEMPO DE PARADA DE MAQUINA ACUMULADO TURNO
        case "/Proconor50/_PT_OPERATION_HOUR":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_HOUR");
                //etv1.updateGenericSensorStatus( ValueData.v, ValueData.ts);  
                operation_hour=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_OPERATION_MIN":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_MIN");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                operation_min = ValueData.v;
            });
            break;

        case "/Proconor50/_PT_OPERATION_SEC":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_SEC");
                //etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                operation_sec=ValueData.v;
                operation_ts=ValueData.ts;
            });
            break;

        case "/Proconor50/_PT_DOWN_HOUR":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_DOWN_HOUR");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                down_hour=ValueData.v;
            });
            break;
            
        case "/Proconor50/_PT_DOWN_MIN":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_DOWN_MIN");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                down_min=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_DOWN_SEC":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_DOWN_SEC");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                down_sec=ValueData.v;
                down_ts=ValueData.ts;
            });
            break;

        case "/Proconor50/_PT_extDOWN_HOUR":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_extDOWN_HOUR");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                extdown_hour=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_extDOWN_MIN":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_extDOWN_MIN");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                extdown_min=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_extDOWN_SEC":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_extDOWN_SEC");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                extdown_sec=ValueData.v;
                extdown_ts=ValueData.ts;
            });
            break;

        case "/Proconor50/_PT_OPERATION_HOUR_24":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_HOUR_24");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                dia_hour=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_OPERATION_MIN_24":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_MIN_24");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                dia_min=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_OPERATION_SEC_24":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_SEC_24");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                dia_sec=ValueData.v;
                dia_ts=ValueData.ts;
            });
            break;

        
        case "/Proconor50/_PT_DOWN_HOUR_24":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_DOWN_HOUR_24");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                diadown_hour=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_DOWN_MIN_24":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_DOWN_HOUR_24");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                diadown_min =ValueData.v;
            });
            break;

        case "/Proconor50/_PT_DOWN_SEC_24":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_DOWN_HOUR_24");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                diadown_sec =ValueData.v;
                diadown_ts=ValueData.ts;
            });
            break;

        case "/Proconor50/_PT_extDOWN_HOUR_24":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_extDOWN_MIN_24");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                diaextdown_hour=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_extDOWN_MIN_24":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_extDOWN_MIN_24");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                diaextdown_min=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_extDOWN_SEC_24":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_extDOWN_MIN_24");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                diaextdown_sec=ValueData.v;
                diaextdown_ts=ValueData.ts;
            });
            break;


        //TIEMPO DE PARADA DE MAQUINA 1er TURNO
        case "/Proconor50/_PT_OPERATION_HOUR_1st":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_HOUR");
                //etv1.updateGenericSensorStatus( ValueData.v, ValueData.ts);  
                operation1_hour=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_OPERATION_MIN_1st":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_MIN");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                operation1_min = ValueData.v;
            });
            break;

        case "/Proconor50/_PT_OPERATION_SEC_1st":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_SEC");
                //etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                operation1_sec=ValueData.v;
                operation1_ts=ValueData.ts;
            });
            break;

            case "/Proconor50/_PT_DOWN_HOUR_1st":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_HOUR");
                //etv1.updateGenericSensorStatus( ValueData.v, ValueData.ts);  
                down1_hour=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_DOWN_MIN_1st":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_MIN");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                down1_min = ValueData.v;
            });
            break;

        case "/Proconor50/_PT_DOWN_SEC_1st":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_SEC");
                //etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                down1_sec=ValueData.v;
                down1_ts=ValueData.ts;
            });
            break;


            case "/Proconor50/_PT_extDOWN_HOUR_1st":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_HOUR");
                //etv1.updateGenericSensorStatus( ValueData.v, ValueData.ts);  
                extdown1_hour=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_extDOWN_MIN_1st":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_MIN");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                extdown1_min = ValueData.v;
            });
            break;

        case "/Proconor50/_PT_extDOWN_SEC_1st":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_SEC");
                //etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                extdown1_sec=ValueData.v;
                extdown1_ts=ValueData.ts;
            });
            break;

        //TIEMPO DE PARADA DE MAQUINA 2nd TURNO
        case "/Proconor50/_PT_OPERATION_HOUR_2nd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_HOUR");
                //etv1.updateGenericSensorStatus( ValueData.v, ValueData.ts);  
                operation2_hour=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_OPERATION_MIN_2nd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_MIN");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                operation2_min = ValueData.v;
            });
            break;

        case "/Proconor50/_PT_OPERATION_SEC_2nd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_SEC");
                //etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                operation2_sec=ValueData.v;
                operation2_ts=ValueData.ts;
            });
            break;


            case "/Proconor50/_PT_DOWN_HOUR_2nd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_HOUR");
                //etv1.updateGenericSensorStatus( ValueData.v, ValueData.ts);  
                down2_hour=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_DOWN_MIN_2nd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_MIN");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                down2_min = ValueData.v;
            });
            break;

        case "/Proconor50/_PT_DOWN_SEC_2nd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_SEC");
                //etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                down2_sec=ValueData.v;
                down2_ts=ValueData.ts;
            });
            break;


            case "/Proconor50/_PT_extDOWN_HOUR_2nd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_HOUR");
                //etv1.updateGenericSensorStatus( ValueData.v, ValueData.ts);  
                extdown2_hour=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_extDOWN_MIN_2nd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_MIN");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                extdown2_min = ValueData.v;
            });
            break;

        case "/Proconor50/_PT_extDOWN_SEC_2nd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_SEC");
                //etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                extdown2_sec=ValueData.v;
                extdown2_ts=ValueData.ts;
            });
            break;
    
        //TIEMPO DE PARADA DE MAQUINA 3er TURNO
        case "/Proconor50/_PT_OPERATION_HOUR_3rd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_HOUR");
                //etv1.updateGenericSensorStatus( ValueData.v, ValueData.ts);  
                operation3_hour=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_OPERATION_MIN_3rd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_MIN");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                operation3_min = ValueData.v;
            });
            break;

        case "/Proconor50/_PT_OPERATION_SEC_3rd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_SEC");
                //etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                operation3_sec=ValueData.v;
                operation3_ts=ValueData.ts;
            });
            break;


            case "/Proconor50/_PT_DOWN_HOUR_3rd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_HOUR");
                //etv1.updateGenericSensorStatus( ValueData.v, ValueData.ts);  
                down3_hour=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_DOWN_MIN_3rd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_MIN");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                down3_min = ValueData.v;
            });
            break;

        case "/Proconor50/_PT_DOWN_SEC_3rd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_SEC");
                //etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                down3_sec=ValueData.v;
                down3_ts=ValueData.ts;
            });
            break;


            case "/Proconor50/_PT_extDOWN_HOUR_3rd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_HOUR");
                //etv1.updateGenericSensorStatus( ValueData.v, ValueData.ts);  
                extdown3_hour=ValueData.v;
            });
            break;

        case "/Proconor50/_PT_extDOWN_MIN_3rd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_MIN");
                //etv1.updateGenericSensorStatus(ValueData.v,ValueData.ts); 
                extdown3_min = ValueData.v;
            });
            break;

        case "/Proconor50/_PT_extDOWN_SEC_3rd":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //var etv1 = device.endpoints.byAddress("_PT_OPERATION_SEC");
                //etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                extdown3_sec=ValueData.v;
                extdown3_ts=ValueData.ts;
            });
            break;
        }
   }

    //Tiempo de Operacion
    var operation = parseFloat(operation_hour*3600)+ parseFloat(operation_min*60) + parseFloat(operation_sec);
    var etv1 = device.endpoints.byAddress("Operacion");
    etv1.updateGenericSensorStatus(operation, operation_ts);
    //Tiempo de Parada
    var down = parseFloat(down_hour*3600)+ parseFloat(down_min*60) + parseFloat(down_sec);
    var etv1 = device.endpoints.byAddress("Parada");
    etv1.updateGenericSensorStatus(down, operation_ts);
    //Tiempo de Parada Externa
    var extdown = parseFloat(extdown_hour*3600)+ parseFloat(extdown_min*60) + parseFloat(extdown_sec);
    var etv1 = device.endpoints.byAddress("extParada");
    etv1.updateGenericSensorStatus(extdown, extdown_ts);
    //Tiempo de Operacion 24 hs
    var dia = parseFloat(dia_hour*3600)+ parseFloat(dia_min*60) + parseFloat(dia_sec);
    var etv1 = device.endpoints.byAddress("Operacion24");
    etv1.updateGenericSensorStatus(dia, dia_ts);
    //Tiempo de Parada 24 hs
    var diadown = parseFloat(diadown_hour*3600)+ parseFloat(diadown_min*60) + parseFloat(diadown_sec);
    var etv1 = device.endpoints.byAddress("Parada24");
    etv1.updateGenericSensorStatus(diadown, diadown_ts);
    //Tiempo de Parada Externa 24 hs
    var diaextdown = parseFloat(diaextdown_hour*3600)+ parseFloat(diaextdown_min*60) + parseFloat(diaextdown_sec);
    var etv1 = device.endpoints.byAddress("extParada24");
    etv1.updateGenericSensorStatus(diaextdown, diaextdown_ts);
    
    //Tiempo de Operacion 1er
    var operation1 = parseFloat(operation1_hour*3600)+ parseFloat(operation1_min*60) + parseFloat(operation1_sec);
    var etv1 = device.endpoints.byAddress("Operacion1");
    etv1.updateGenericSensorStatus(operation1, operation1_ts);
    //Tiempo de Parada 1er
    var down1 = parseFloat(down1_hour*3600)+ parseFloat(down1_min*60) + parseFloat(down1_sec);
    var etv1 = device.endpoints.byAddress("Parada1");
    etv1.updateGenericSensorStatus(down1, down1_ts);
    //Tiempo de Parada Externa 1er
    var extdown1 = parseFloat(extdown1_hour*3600)+ parseFloat(extdown1_min*60) + parseFloat(extdown1_sec);
    var etv1 = device.endpoints.byAddress("extParada1");
    etv1.updateGenericSensorStatus(extdown1, extdown1_ts);

    //Tiempo de Operacion 2nd
    var operation2 = parseFloat(operation2_hour*3600)+ parseFloat(operation2_min*60) + parseFloat(operation2_sec);
    var etv1 = device.endpoints.byAddress("Operacion2");
    etv1.updateGenericSensorStatus(operation2, operation2_ts);
    //Tiempo de Parada 2nd
    var down2 = parseFloat(down2_hour*3600)+ parseFloat(down2_min*60) + parseFloat(down2_sec);
    var etv1 = device.endpoints.byAddress("Parada2");
    etv1.updateGenericSensorStatus(down2, down2_ts);
    //Tiempo de Parada Externa 2nd
    var extdown2 = parseFloat(extdown2_hour*3600)+ parseFloat(extdown2_min*60) + parseFloat(extdown2_sec);
    var etv1 = device.endpoints.byAddress("extParada2");
    etv1.updateGenericSensorStatus(extdown2, extdown2_ts);

  

    //Tiempo de Operacion 3rd
    var operation3 = parseFloat(operation3_hour*3600)+ parseFloat(operation3_min*60) + parseFloat(operation3_sec);
    
    if(operation3 > 0 && hora_actual < hora_carga){
        var etv1 = device.endpoints.byAddress("Prueba");
        etv1.updateTextContainerStatus("<>0 y < 12");
        var etv1 = device.endpoints.byAddress("Operacion3");
        etv1.updateGenericSensorStatus(operation3, operation3_ts);
    }
    if(hora_actual >= 12){
        var etv1 = device.endpoints.byAddress("Prueba");
        etv1.updateTextContainerStatus(">12");
        var etv1 = device.endpoints.byAddress("Operacion3");
        etv1.updateGenericSensorStatus(operation3, operation3_ts);
    }
       
    //Tiempo de Parada 3rd
    var down3 = parseFloat(down3_hour*3600)+ parseFloat(down3_min*60) + parseFloat(down3_sec);
    
    if(down3 > 0 && hora_actual < hora_carga){
        var etv1 = device.endpoints.byAddress("Parada3");
        etv1.updateGenericSensorStatus(down3, down3_ts);
    }
    if(hora_actual >= hora_carga){
        var etv1 = device.endpoints.byAddress("Parada3");   
        etv1.updateGenericSensorStatus(down3, down3_ts);
    }
    
    //Tiempo de Parada Externa 3rd
    var extdown3 = parseFloat(extdown3_hour*3600)+ parseFloat(extdown3_min*60) + parseFloat(extdown3_sec);
    
    if(extdown3 >0 && hora_actual < hora_carga ){
        var etv1 = device.endpoints.byAddress("extParada3");
        etv1.updateGenericSensorStatus(extdown3, extdown3_ts);
    }
    if (hora_actual >= hora_carga){
        var etv1 = device.endpoints.byAddress("extParada3");
        etv1.updateGenericSensorStatus(extdown3, extdown3_ts);
    }
    

}

function buildDownlink(device, endpoint, command, payload) 
{ 
    // Esta función permite convertir un comando de la plataforma en un
    // payload que pueda enviarse al dispositivo.
    // Más información en https://wiki.cloud.studio/page/200

    // Los parámetros de esta función, son:
    // - device: objeto representando el dispositivo al cual se enviará el comando.
    // - endpoint: objeto endpoint representando el endpoint al que se enviará el 
    //   comando. Puede ser null si el comando se envía al dispositivo, y no a 
    //   un endpoint individual dentro del dispositivo.
    // - command: objeto que contiene el comando que se debe enviar. Más
    //   información en https://wiki.cloud.studio/page/1195.

    // Este ejemplo está escrito asumiendo un dispositivo que contiene un único 
    // endpoint, de tipo appliance, que se puede encender, apagar y alternar. 
    // Se asume que se debe enviar un solo byte en el payload, que indica el tipo 
    // de operación.

/*
     payload.port = 25;          // Este dispositivo recibe comandos en el puerto LoRaWAN 25 
     payload.buildResult = downlinkBuildResult.ok; 

     switch (command.type) { 
         case commandType.onOff: 
             switch (command.onOff.type) { 
                 case onOffCommandType.turnOn: 
                     payload.setAsBytes([30]);       // El comando 30 indica "encender" 
                     break; 
                 case onOffCommandType.turnOff: 
                     payload.setAsBytes([31]);       // El comando 31 indica "apagar" 
                     break; 
                 case onOffCommandType.toggle: 
                     payload.setAsBytes([32]);       // El comando 32 indica "alternar" 
                     break; 
                 default: 
                     payload.buildResult = downlinkBuildResult.unsupported; 
                     break; 
             } 
             break; 
         default: 
             payload.buildResult = downlinkBuildResult.unsupported; 
             break; 
     }
*/

}

