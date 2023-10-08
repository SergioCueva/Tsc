let mensaje: string ="hola mundo" 
mensaje="chanchito feliz"

mensaje="chao mundo"

console.log(mensaje)
console.log(typeof [])
/*
 * tipos de JS
 * 
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 * 
 * tipos de TS
 * any ---no usarlo 
 * unknown
 * never
 * array
 * tuplas
 * Enums
 * 
 * tipos inferidos
 */ 
/*puedes colocar el equipadode tipo de datos o no es necesario*/
let extincionDinosarios=76_000_00
let dinosariosFavoritos="T-Rex"
let extintos=true

function chanchitofeliz(config:any){
    return config
}

/*arreglo*/

let animales:string[]=['chanchito','feliz','felipe']
let nums: number[]=[1,2,3]
let checks:boolean[]=[]
let nums2:Array<Number>=[]

//nums.map(x=> x.)// el autocompletado sugiere metodos de tipo de dato

/*tuplas una variable que contiene un set de datos ordenados */

let tupla:[number,String[]]=[1,['chanchito feliz',"chanchito felipe"]]

const chica='s'
const mediana='m'
const grande='l'
const extragrande='xl'
//pascalcase
enum Talla{Chica='s',Mediana='m',Grande='l',ExtraGrande='xl'}

const variable1 = Talla.Grande

console.log(variable1)
// estados de cargos 
//idle  aun no se carga
//loading esta cargando
// sucess  exito
//error  error

const enum LoadingState{Idle,loading,Succes,Error}

const estado=LoadingState.Succes

// objetos
// definir objetos tipo de persona con sus atributos

type Direccion={
    numero:number,
    calle:string,
    pais:string
}
type Persona ={
    readonly id:number,
    nombre:string,
    talla:Talla,
    direccion:Direccion
       
    }
// puedo llamar a persona
const objeto: Persona={
   id:1,
nombre:'hola mundo',
talla: Talla.Mediana,
direccion: {
    numero:1,
    calle:'siempre viva',
    pais:'chanchito feliz'
   }
}


// funciones 
// se puede poner void para no devolver nada

let intermiami:number=11
let fcdallas: number=11
let messi: number=1
let juegaMessi: boolean= true
let palabras: string='me emocione al verlo a messi'

function jugar(equipo1:number,equipo2:number,juegaMessi:boolean):void{
    let motivo:string =''
    if(juegaMessi) {
        equipo1 += messi
        motivo='porque juega messi'
    }

    if(equipo1>equipo2) console.log(`gana inter miami ${motivo}`)
    if(equipo1==equipo2) console.log('empatan inter miami')
    if(equipo1<equipo2) console.log('pierde fcdalas')
}

jugar(intermiami,fcdallas,juegaMessi)

// todo any cualquier datos curso 
// recomendacion cambiar por el tipado correspondiente number,string,boolean typescript

let disney:any;
disney='Star War y Marvel '
console.log(disney)

disney=150000000
console.log(disney)

disney= true
console.log(disney)


// comenzando con array , para definir el tipo de arreglo entre []

let arregloNumeros:number[]= [1,2,3,4,5,6]
let arregloTexto: string[]= ['html','cs','js']
 
arregloTexto[0].indexOf('html')

// objetos
// definir objetos tipo de programador personalizados tipe y clases van iniciando mayuscula

//type Programador={  //tipado de objetos type

   // nombre:string,
   // tecnologias:string[],
   // tomarMate:boolean|null
//}

//let programador: Programador={
   // nombre:'sergio corde',
   // tecnologias:['react','angular','svelte'],
   // tomarMate:true
//}

//let programador2: Programador={
  //  nombre:'Federico',
  //  tecnologias:['html','cobol'],
   // tomarMate: null
//}

// interfaces programando

interface Programador{
    nombre:string,
    tecnologias:string[],
    tomarMate?:boolean | null
}

let dev: Programador={
    nombre:'sergio corde',
    tecnologias:['react','angular','svelte'],
    tomarMate:true
}

let dev2: Programador={
    nombre:'Federico',
    tecnologias:['html','cobol'],
    tomarMate: null
}

function enviarCurriculum(programador:Programador){
    console.log(`Este curriculum es de ${programador.nombre}`)
}

enviarCurriculum(dev)




 