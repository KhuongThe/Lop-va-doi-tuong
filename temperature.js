class Temperature{
    temperature_C;
    constructor(temperature_C){
            this.temperature_C = temperature_C;
    }
    getTemperature_C(){
        return this.temperature_C;
    }
    setTemperature_C(newTemperature_C){
        this.temperature_C = newTemperature_C;
    }
    convertTemperature_F(){
        if(this.temperature_C >= -273){
            let temperature_F = this.getTemperature_C() * 1.8 + 32;
            return temperature_F;
        }
        
    }
    convertTemperature_Kevin(){
        if(this.temperature_C >= -273){
            let temperature_Kevin = this.getTemperature_C() + 273.15;
            return temperature_Kevin;
        }
        
    }
}