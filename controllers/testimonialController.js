import { Testimonial } from '../models/Testimoniales.js'

const guardarTestimonial = async (req, res) => {
    // validar los datos que se reciben desde el formulario
   
    const { nombre, correo, mensaje } = req.body;
    const errores = [];
   
    if (nombre.trim() === "") {
      errores.push({ mensaje: "el nombre esta vacio" });
    }
   
    if (correo.trim() === "") {
      
      errores.push({ mensaje: "el correo esta vacio" });
    }
    if (mensaje.trim() === "") {
      errores.push({ mensaje: "el mensaje esta vacio" });
    }
    
    if (errores.length > 0) {

        //consultar testimoniales existentes
        const testimonialesGuardados = await Testimonial.findAll();

        
      // mostrar la vista con errores
   
      res.render("testimoniales", {
        pagina: "Testimoniales",
        errores,
        nombre,
        correo,
        mensaje,
        testimonialesGuardados
      });
    }else{
        // Almacenar los datos del testimonial en la BD
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            //se redirige al usuario a la vista de testimoniales luego de validar la info del formulario y guardarla en la BD
             res.redirect('/testimoniales');
            
        } catch (error) {
            console.log(error);
            
            
        }

    }
  };
   
  export { guardarTestimonial 

  };