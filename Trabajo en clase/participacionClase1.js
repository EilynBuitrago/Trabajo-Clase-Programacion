var animales ={
    animal:"Perrito",
    nombre: "lolita",
    sexo: "Femenino",
    edad: 6,
    nombre_completo: function() {
        let nombre= this.animal+ this.nombre + this.sexo + this.edad;
        return nombre;
    },
    consumo_alimento: function(comida)
    {
        return comida/7;
    },

        
}