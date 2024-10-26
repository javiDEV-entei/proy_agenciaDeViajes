import {Viaje} from '../models/Viaje.js'
import { Testimonial} from '../models/Testimoniales.js'

const paginaInicio = async (req, res)=>{

    // consultar 3 viajes del modelo viaje para mostrarlos en inicio
    const promiseDB =[];

    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimonial.findAll({limit: 3}));

    try {
        const resultado = await Promise.all(promiseDB);

        res.render('inicio',{
            pagina:'inicio',
            clase : 'home',
            viajes: resultado[0],
            testimonialesGuardados : resultado[1]
        });
        
    } catch (error) {
        console.log(error);
        
        
    }
       
}

const paginaNosotros = (req, res)=>{
    res.render('nosotros',{
        pagina : 'Nosotros'
    });


}
const paginaViajes = async (req, res)=>{
    //consultar la BD
        const viajes = await Viaje.findAll();
        console.log(viajes)

    res.render('viajes',{
        pagina : ' Proximos Viajes',
        viajes,
    });
}

const paginaTestimoniales = async (req, res)=>{
    try {
        const testimonialesGuardados = await Testimonial.findAll();
        res.render('testimoniales',{
            pagina : 'Testimoniales',
            testimonialesGuardados
        });
        
    } catch (error) {
        console.log(error);
        
        
    }   

}

// Muestra un viaje segun su slug
const paginaDetalleViaje = async (req, res) =>{
    const {slug} = req.params;

    try {
        const viaje = await Viaje.findOne( { where : { slug :slug }});
        res.render("viaje", {
            pagina: "informacion Viaje",
            viaje
        })
        
    } catch (error) {
        console.log(error);
        
    }
    
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}