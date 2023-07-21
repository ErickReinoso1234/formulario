import { connect } from "mongoose";
export const conexion = async () =>{
    try {
       const db = await connect('mongodb://localhost/formularios')
       console.log(db.connection.name);
    } catch (error){
        console.error(error);
    }
};
