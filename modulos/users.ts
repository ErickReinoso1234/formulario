import { Schema, model } from "mongoose";

const formulario = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido:{
        type:String,
        requerid:true,
        trim:true
    },
    direccion:{
        type:String,
        required:true,
        trim:true
    },
    correo: {
        type: String,
        required: true,
        trim:true
    },
    done: {
        type: Boolean,
        default: false
    }
})

export default model ("form", formulario);
