const getActivityHandler = (req, res) => {
  res.status(200).send(`GET | /activities
  Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.
  `);
};
const postActivityHandler = async (req, res) => {
  const {id, name, difficulty, length, season } = await req.body;
  res.status(200).send(` POST | /activities
  Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
  Toda la información debe ser recibida por body.  Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno)
  Este es el req.body id: ${id} name: ${name} diffi: ${difficulty}, length: ${length}, season: ${season}`);

  //ACA VA A VNIR EL REQ.BODY!
  //   ////////////////
  //   //  REQ.BODY  //
  //   ////////////////
};

module.exports = { getActivityHandler, postActivityHandler };