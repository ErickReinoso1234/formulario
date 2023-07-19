import app from './app';
import { conexion } from './database';

conexion();
app.listen(3000)
console.log('Corriendo el servidor 3000')