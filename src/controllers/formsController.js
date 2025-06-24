const knex = require('../database/knex');

class FormsController {
    // Form 1 - Dados do turista
    async form1(req, res) {
        try {
            const { name, age, state, city, destination, interest, phone } = req.body;

            if (!name || !age || !state || !city || !destination || !phone) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios, exceto interesse.' });
            }

            const turistId = await knex('turist').insert({
                name,
                age,
                state,
                city,
                destination,
                interest,
                phone
            });

            return res.status(201).json({ 
                success: true, 
                message: 'Dados do turista salvos com sucesso',
                turistId
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao salvar os dados do turista.' });
        }
    }
    
    // Form 2 - Dados do evento
    async form2(req, res) {
        try {
            const { 
                howIMet, 
                motivation, 
                position, 
                companyName, 
                acting 
            } = req.body;

            console.log(howIMet, motivation, position, companyName, acting);

            if (!howIMet || !motivation || !position || !companyName || !acting) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
            }

            const eventId = await knex('event').insert({
                howIMet,
                motivation,
                position,
                companyName,
                acting
            });

            return res.status(201).json({ 
                success: true, 
                message: 'Dados do evento salvos com sucesso',
                eventId
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao salvar os dados do evento.' });
        }
    }
    
    // Form 3 - Avaliação do evento
    async form3(req, res) {
        try {
            const { avaliation, comment, improvements } = req.body;

            if (!avaliation || !comment || !improvements) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
            }

            const avaliationId = await knex('avaliationEvent').insert({
                avaliation,
                comment,
                improvements
            });

            return res.status(201).json({ 
                success: true, 
                message: 'Avaliação do evento salva com sucesso',
                avaliationId
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao salvar a avaliação do evento.' });
        }
    }
    
    // Método para liberar o acesso à internet após todos os formulários
    async releaseAccess(req, res) {
        try {
            // Aqui você implementaria a lógica para liberar o acesso à internet
            // Por exemplo, interagir com sua API de hotspot
            
            return res.status(200).json({ 
                success: true, 
                message: 'Acesso à internet liberado com sucesso',
                accessGranted: true
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao liberar o acesso à internet.' });
        }
    }
}

module.exports = new FormsController()
