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





 

 