const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Importamos o Mongoose

const app = express();
const port = 3001;

// URI de Conexão do MongoDB
const MONGO_URI = "mongodb+srv://lpmragi_db_user:rf6TDrOqWUkr8wYx@clusterragi.52gfa2y.mongodb.net/?retryWrites=true&w=majority&appName=ClusterRagi";

app.use(cors());
app.use(express.json());

// Conexão com o Banco de Dados
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso!');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });


app.get('/', (req, res) => {
  res.send('Olá! O servidor da barbearia está funcionando!');
});

// ROTA PARA CRIAR UM NOVO SERVIÇO
app.post('/api/servicos', async (req, res) => {
  try {
    const novoServico = new Servico({
      nome: req.body.nome,
      preco: req.body.preco,
      duracao_minutos: req.body.duracao_minutos,
    });

    const servicoSalvo = await novoServico.save();
    res.status(201).json(servicoSalvo); // 201 significa "Created" (Criado com sucesso)
  } catch (err) {
    res.status(400).json({ message: err.message }); // 400 significa "Bad Request" (Requisição inválida)
  }
});

// --- ROTAS PARA PROFISSIONAIS ---

// ROTA PARA BUSCAR TODOS OS PROFISSIONAIS
app.get('/api/profissionais', async (req, res) => {
  try {
    const profissionais = await Profissional.find();
    res.json(profissionais);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ROTA PARA CRIAR UM NOVO PROFISSIONAL
app.post('/api/profissionais', async (req, res) => {
  try {
    const novoProfissional = new Profissional({
      nome: req.body.nome,
      descricao: req.body.descricao,
      horariosTrabalho: req.body.horariosTrabalho
    });

    const profissionalSalvo = await novoProfissional.save();
    res.status(201).json(profissionalSalvo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});

const Servico = require('./models/Servico'); 
const Profissional = require('./models/Profissional');

app.use(cors());
app.use(express.json());

// ... (código de conexão do mongoose)

// ROTA PRINCIPAL
app.get('/', (req, res) => {
  res.send('Olá! O servidor da barbearia está funcionando!');
});

// ROTA PARA BUSCAR SERVIÇOS - NOSSA PRIMEIRA API DE VERDADE!
app.get('/api/servicos', async (req, res) => {
  try {
    const servicos = await Servico.find(); // .find() busca todos os documentos no banco
    res.json(servicos); // Retorna os serviços encontrados como JSON
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


