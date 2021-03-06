module.exports = (sequelize, DataTypes) => {
  const Notificacao = sequelize.define(
    'Notificacao',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
      },
      unidadeSaudeId: {
        type: DataTypes.UUID,
      },
      notificadorId: {
        type: DataTypes.UUID,
      },
      pessoaId: {
        type: DataTypes.UUID,
      },
      profissaoId: {
        type: DataTypes.UUID,
      },
      nomeNotificador: {
        type: DataTypes.STRING(80),
      },
      status: {
        type: DataTypes.ENUM('ABERTA', 'ENCERRADA', 'EXCLUIDA'),
      },
      municipioId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      dtSuspeito: DataTypes.DATE,
      dtConfirmado: DataTypes.DATE,
      dtDescartado: DataTypes.DATE,
      dtCurado: DataTypes.DATE,
      dtEncerrado: DataTypes.DATE,
      dtObito: DataTypes.DATE,
      dtEncerramento: DataTypes.DATEONLY,
    },
    {},
  );
  Notificacao.associate = (models) => {
    Notificacao.belongsTo(models.UnidadeSaude, {
      foreignKey: 'unidadeSaudeId',
    });
    Notificacao.belongsTo(models.User, {
      foreignKey: 'userId',
    });
    Notificacao.belongsTo(models.ProfissionalSaude, {
      foreignKey: 'notificadorId',
    });
    Notificacao.belongsTo(models.Municipio, {
      foreignKey: 'municipioId',
    });
    Notificacao.belongsTo(models.Pessoa, {
      foreignKey: 'pessoaId',
    });
    Notificacao.hasOne(models.NotificacaoCovid19, {
      foreignKey: 'notificacaoId',
    });
    Notificacao.belongsTo(models.Profissao, {
      foreignKey: 'profissaoId',
    });
    Notificacao.hasMany(models.NotificacaoEvolucao, {
      foreignKey: 'notificacaoId',
    });
  };
  return Notificacao;
};
