const getCountriesHandler = (req, res) => {
  const {name} = req.query;

  if(!name) {
    res.status(200).send(" GET | /countries => Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información");
  }
  res.status(200).send(` GET | /countries/?name=${name} => Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta) Debe poder buscarlo independientemente de mayúsculas o minúsculas Si no existe el país, debe mostrar un mensaje adecuado`);
  
};
const getCountryIdHandler = (req, res) => {
  try {
    const { idPais } = req.params;
    res.status(200).send(`GET | /countries/:idPais id ${idPais  } => Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país. El país es recibido por parámetro (ID de tres letras del país)Tiene que incluir los datos de las actividades turísticas asociadas a este país`);
    
  } catch (error) {
    
  }
};

module.exports = {getCountriesHandler, getCountryIdHandler};