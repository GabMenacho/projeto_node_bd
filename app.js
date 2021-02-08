const express = require("express");
const app = express();
/*aqui o servidor está criado
usar callback é pra receber msg se o servidor está rodando*/

const connect = require("./bd/connect");
app.use(express.json());


/*pegando dados do banco como json*/
app.get("/produtos", (req,res)=>{
    connect.query("SELECT * FROM produtos",(error, result) => {
        res.json(result);
    });
});

app.post("/produtos", (req,res)=> {
    let dados = [];

    dados.push({
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        nomeImagem: req.body.nomeImagem,
        categoria: req.body.categoria,
        material: req.body.material,
        fk_id_artista: req.body.fk_id_artista
    })
    
    connect.query("INSERT INTO produtos SET ?", dados, () => {
        dados = []
        res.json({mensagem: "Dados enviados com sucesso"})
    })
})

app.listen(3333)
console.log("Servidor subiuuuu");
