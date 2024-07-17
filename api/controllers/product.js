import { db } from "../db.js";

export const getProducts = (_, res) => {
  const q = "SELECT * FROM produtos";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addProducts = (req, res) => {
  const q =
    "INSERT INTO produtos(`nome`, `id`, `descrição`, `preço`, `data_criação`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.id,
    req.body.descrição,
    req.body.preço,
    req.body.data_nascimento,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produto cadastrado com sucesso.");
  });
};

export const updateProducts = (req, res) => {
  const q =
    "UPDATE produtos SET `nome` = ?, `id` = ?, `descrição` = ?,`preço` = ?, `data_crriação` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.id,
    req.body.descrição,
    req.body.preço,
    req.body.data_nascimento,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produto atualizado com sucesso.");
  });
};

export const deleteProducts = (req, res) => {
  const q = "DELETE FROM produtos WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produto deletado com sucesso.");
  });
};
