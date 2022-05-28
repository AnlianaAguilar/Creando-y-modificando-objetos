
//Se crea un funcion contructora para paciente, inicia en mayuscula por el concepto de clase
function Paciente (nombre, edad, rut, diagnostico){ // se indicann los datos o parametrso que tendra la funcion
    let _nombre = nombre //la propiedad privada se denota con_
    let _edad = edad
    let _rut = rut
    let _diagnostico = diagnostico || "Esperando Diagnostico"  // se pueden definir valore del default

    //get nombre privado para obtener el valor se debe crear el metodo get
    Object.defineProperty(this,"_getNombre",{
        get:function(){
            return _nombre
        }
    })
    // para poder cambiar el valor se debe crear le metodo set
    Object.defineProperty(this, "_setNombre",{
        set:function(new_nombre){
            return _nombre= new_nombre
        }
    })

    Object.defineProperty(this,"_getEdad",{
        get:function(){
            return _edad
        }
    })

    Object.defineProperty(this, "_setEdad",{
        set: function(new_edad){
            return _edad = new_edad
        }
    })

    Object.defineProperty(this, "_getRut",{
        get:function(){
            return _rut
        }
    })

    Object.defineProperty(this, "_setRut",{
        set:function(new_rut){
            return _rut = new_rut
        }
    })

    Object.defineProperty(this, "_getDiadnostico",{
        get: function(){
            return _diagnostico
        }
    })

    Object.defineProperty(this, "setDiagnostico",{
        set:function(new_diagnostico){
            return _diagnostico = new_diagnostico
        }
    })
}


//propiedad Publica para acceder desde afuera
Paciente.prototype.getNombre = function(){
    return this._getNombre // se da acceso a la propiedad privada
}

Paciente.prototype.setNombre = function(new_nombre){ // Agregar un nuevo método a la función constructora creada, para ello se debeinvocar la función por su nombre, más la propiedad “prototype” y el nombre del método que deseamos agregar, 
    return this._setNombre = new_nombre
}

let paciente1 = new Paciente("Ana", 40, "16.283.265-k", "Exámenes complementarios") //instanciar,  se debe implementar la instrucción “new” seguidamente del nombre de la función constructora, y como argumento el valor que deseamos que almacene el objeto
let paciente2 = new Paciente("Luis", 22, "13.234.532-2", "Análisis de sangre")
let paciente3 = new Paciente("Pedro", 67, "10.477.700-6", "Hipocondriaco")
let paciente4 = new Paciente("Tara", 18, "20.000.002-2", "")

console.log(paciente1.getNombre())


// se crea funcion contructora para consultorio
function Consultorio (nombre, pacientes){ // se ingresan los daton lo los que van a contruir el objeto
    let _nombre = nombre
    let _pacientes = pacientes || []

    Object.defineProperty(this, "_getNombre",{
        get:function(){
            return _nombre
        }
    })

    Object.defineProperty(this, "_setNombre",{
        set:function(new_nombre){
            return _nombre = new_nombre
        }
    })

    Object.defineProperty(this, "_getPacientes",{
        get:function(){
            return _pacientes
        }
    })

    Object.defineProperty(this, "_addPaciente", {
        set: function(paciente){
            return _pacientes.push(paciente)
        }
    })
}

//se definen metodos publicos para podes acceder 
Consultorio.prototype.getNombre = function (){
    return this._getNombre
}

Consultorio.prototype.setNombre = function(new_nombre){
    return this._setNombre = new_nombre
}

Consultorio.prototype.getPacientes = function(){
    return this._getPacientes
}

Consultorio.prototype.addPaciente = function(paciente){
    return this._addPaciente = paciente
}

Consultorio.prototype.buscar = function(nombre_buscar){
    let paciente_buscado = this._getPacientes.find(paciente => paciente.getNombre() == nombre_buscar)
    //console.log(paciente_buscado)
    return paciente_buscado
}

let consultorio1 = new Consultorio("El consultorio")



console.log(consultorio1)
console.log(consultorio1.getNombre())
console.log(consultorio1.getPacientes())
consultorio1.addPaciente(paciente1)
consultorio1.addPaciente(paciente2) //Una vez instanciado los objetos, procedemos a invocar el método creado con el nombre 
consultorio1.addPaciente(paciente3)
consultorio1.addPaciente(paciente4)
console.log(consultorio1.getPacientes())

console.log(consultorio1.buscar("Luis"))



