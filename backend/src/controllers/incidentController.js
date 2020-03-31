const connection = require('../database/connection')

module.exports = {
   //cria um caso da ong logada
   async create(req, res) {
      const { title, description, value } = req.body
      //recupera o id da ong para validacao da secao
      const ong_id = req.headers.authorization;

      const [ id ] = await connection('incidents').insert({
         title,
         description,
         value,
         ong_id
      });

      return res.json({ id })
   },
   //lista os casos
   async listIncidents(req, res) {

      const [ numIncidents ] = await connection('incidents').count()
      console.log(numIncidents)

      const { page=1 } = req.query; 
      const incidents = await connection('incidents')
         .join('ongs', 'ong_id', '=', 'incidents.ong_id')
         .limit(5).offset((page - 1) * 5).select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.city', 'ongs.uf']);

      res.header('X-Total-Count', numIncidents['count(*)'])
      return res.json(incidents)
   },
   
   //deleta um caso
   async deleteIncident(req, res) {
      const { id } = req.params;
      const ong_id = req.headers.authorization;

      const incident = await connection('incidents').where('id', id).select('ong_id').first();

      if (incident.ong_id !=ong_id) {
         return res.status(401).json({ error: 'operarion not permitted' })
      }

      await connection('incidents').where('id', id).delete()
      return res.status(204).send()
   }
}