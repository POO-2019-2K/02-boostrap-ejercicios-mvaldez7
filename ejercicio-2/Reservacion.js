export default class Reservacion{
    constructor(nombre, fechaLlegada, fechaSalida, telefono, numHabitacion, costoNoche = 200){
        this._nombre = nombre.toUpperCase();
        this._fechaLlegada = fechaLlegada;
        this._fechaSalida = fechaSalida;
        this._telefono = telefono;
        this._numHabitacion = numHabitacion;
        this._costoNoche = costoNoche;
    }

    //Metodos de Lectura

    get nombre(){
        return this._nombre;
    }
    get fechaLlegada(){
        return this._fechaLlegada;
    }
    get fechaSalida(){
        return this._fechaSalida;
    }
    get telefono(){
        return this._telefono;
    }
    get numHabitacion(){
        return this._numHabitacion;
    }
    get costoNoche(){
        return this._costoNoche;
    }

    //Metodos de Escritura

    set nombre(nombre){
        this._nombre = nombre.toUpperCase();
    }
    set fechaLlegada(fechaLlegada){
        this._fechaLlegada = fechaLlegada;
    }
    set fechaSalida(fechaSalida){
        this._fechaSalida = fechaSalida;
    }
    set telefono(telefono){
        this._telefono = telefono;
    }
    set numHabitacion(numHabitacion){
        this._numHabitacion = numHabitacion;
    }
    set costoNoche(costoNoche){
        this._costoNoche = costoNoche;
    }

    //Metodos principales

    imprimirValores(){
        console.log(`El señor ${this._nombre} llegara el dia ${this._fechaLlegada} y se ira el dia ${this._fechaSalida}. El telefono es ${this._telefono}, su habitacion será la ${this._numHabitacion} y el costo por noche será de $${this._costoNoche}.00 MXN.`)
    }

    calcularDiasNoches(){
        var fechaInicio = new Date(this._fechaLlegada).getTime();
        var fechaFin = new Date(this._fechaSalida).getTime();
        var diferencia = fechaFin - fechaInicio;
        diferencia = diferencia/(1000*60*60*24);
        var noches = diferencia - 1;
        var costoTotal = noches*this._costoNoche;

        console.log(`EL señor ${this._nombre} se quedará ${diferencia} días y ${noches} noches, con un costo de $${costoTotal}.00 MXN.`);   
    }
}