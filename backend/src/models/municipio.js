module.exports = (sequelize, DataTypes) => {
  const Municipio = sequelize.define('Municipio', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: DataTypes.STRING,
    uf: DataTypes.STRING(2),
    ufIBGE: DataTypes.STRING(2),
    residenciaIBGE: DataTypes.STRING(7),
  });
  Municipio.associate = (models) => {
    Municipio.hasMany(models.Bairro, { foreignKey: 'municipioId' });
    Municipio.hasMany(models.Pessoa, { foreignKey: 'municipioId' });
    Municipio.hasMany(models.UnidadeSaude, { foreignKey: 'municipioId' });
    Municipio.hasMany(models.User, { foreignKey: 'municipioId' });
    Municipio.hasMany(models.TenantConfig, { foreignKey: 'municipioId' });
    Municipio.hasMany(models.TenantMunicipio, { foreignKey: 'municipioId' });
  };
  return Municipio;
};
