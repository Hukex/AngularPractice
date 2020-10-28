import { Compania } from '../companias/compania';

export class Juego {
    idJuego: number
    titulo: String
    fechaLanzamiento: String
    precio: number
    pegi: number
    categoria: String
    companies: Compania[]
}