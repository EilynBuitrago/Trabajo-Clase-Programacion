var auto ={
    marca: "chevrelet",
    modelo: "unix",
    annio: 2022,
    nombre_completo: function() {
        let nombre= this.marca + this.modelo + this.annio;
        return nombre;
    },
    consumo_gasolina: function(velocidad_promedio, segundo)
    {
        return velocidad_promedio/10;
    },

        
}