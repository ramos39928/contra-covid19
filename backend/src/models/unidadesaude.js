const { normalizarTexto } = require('../lib/normalizar-texto');

const normalizarTextoUnidade = (unidade) => {
  // eslint-disable-next-line no-param-reassign
  unidade.nome = normalizarTexto(unidade.nome);
};

module.exports = (sequelize, DataTypes) => {
  const UnidadeSaude = sequelize.define('UnidadeSaude', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: DataTypes.STRING(60),
    municipioId: DataTypes.UUID,
    cnes: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    qtEnfermariaCovid: DataTypes.INTEGER,
    qtUTIAdultaCovid: DataTypes.INTEGER,
    qtUTIPedCovid: DataTypes.INTEGER,
    qtUTINeoCovid: DataTypes.INTEGER,
    qtEnfermariaNormal: DataTypes.INTEGER,
    qtUTIAdultaNormal: DataTypes.INTEGER,
    qtUTIPedNormal: DataTypes.INTEGER,
    qtUTINeoNormal: DataTypes.INTEGER,
    qtEnfermariaPrivado: DataTypes.INTEGER,
    qtUTIAdultaPrivado: DataTypes.INTEGER,
    qtUTIPedPrivado: DataTypes.INTEGER,
    qtUTINeoPrivado: DataTypes.INTEGER,
    tokenSecretaria: DataTypes.STRING(1000),
    tpUnidade:
    {
      type: DataTypes.ENUM('OUTRO', 'HOSPITAL', 'LABORATORIO'),
      defaultValue: 'OUTRO',
    },
  });
  UnidadeSaude.associate = (models) => {
    UnidadeSaude.belongsTo(models.Municipio, { foreignKey: 'municipioId' });
    UnidadeSaude.hasMany(models.UserUnidadeSaude, { foreignKey: 'unidadeSaudeId' });
    UnidadeSaude.belongsToMany(models.User, { through: models.UserUnidadeSaude, foreignKey: 'userId' });
  };
  UnidadeSaude.beforeSave((unidade, _options) => {
    normalizarTextoUnidade(unidade);
  });
  return UnidadeSaude;
};
