import express from "express";
import { 
    paginaInicio,
     paginaNosotros,
     paginaViajes,
     paginaTestimoniales,
      paginaDetalleViaje } from "../controllers/paginasController.js";

      import{ guardarTestimonial } from '../controllers/testimonialController.js'

const router = express.Router();

router.get('/inicio',paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes',paginaViajes);

router.get('/viajes/:slug',paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial)

 
export default router;




/* 
ejemplo como mostrar variables en la view

const viajes = 'viaje a alemania'// se pueden pasar variables a la view de la pagina
res.render('nosotros',{ 

    viajes// eso se hace usando render y pasandole un objeto dentro del mismo podemos poner variables valores etc
    // obs esto solo "declara" la variable dentro de view pero lo que se desea hacer con el con tenido de la variab se coloca en el archivo de la view
}); */