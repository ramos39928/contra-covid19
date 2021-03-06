const uuidv4 = require('uuid/v4');
const Sequelize = require('sequelize');

const { Op } = Sequelize;

module.exports = {
  up: (queryInterface) => queryInterface
    .bulkInsert('Exame', [
      {
        id: uuidv4(),
        nome: '2019-nCoV IgG/IgM DEVICE ( TESTE RÁPIDO )',
        codigo: '104',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: '2019-nCOV AB TEST (COLLOIDAL GOLD) IgM/IgG (WHOLE BLOOD / SERUM / PLASMA)',
        codigo: '105',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: '2019-nCOV IgG (CLIA)',
        codigo: '106',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: '2019-nCoV IgG/IgM COMBO TEST CARD',
        codigo: '107',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: '2019-nCoV IgG/IgM RAPID TEST',
        codigo: '108',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: '2019-nCOV IgM (CLIA)',
        codigo: '109',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'ADVIA CENTAUR SARS-CoV-2 TOTAL (COV2T)',
        codigo: '110',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'ANTI-SARS-CoV-2 IgG REAGENT PACK',
        codigo: '111',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'STANDARD Q COVID-19 IgM/IgG DUO',
        codigo: '112',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'ARTRON ONE STEP TESTE RÁPIDO CORONAVÍRUS',
        codigo: '113',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'ATELLICA IM SARS-CoV-2 TOTAL (COV2T)',
        codigo: '114',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'COBAS SARS-CoV-2',
        codigo: '115',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'CORONAVIRUS 2019 ANTIBODY (IgM/IgG) COMBINED TEST KIT',
        codigo: '116',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'COVID-19 IgM/IgG DUO (SD BIOSENSOR)',
        codigo: '117',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'COVID-19 (2019-nCoV) CORONAVIRUS IgG / IgM RAPID TEST KIT',
        codigo: '118',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'COVID-19 (SARS-CoV-2) IgM/IgG ANTIBODY TEST KIT',
        codigo: '119',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'COVID-19 (2019-nCoV) CORONAVÍRUS IgG/IgM RAPID TEST KIT',
        codigo: '120',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'COVID-19 (SARS-CoV-2) IgM ELISA',
        codigo: '121',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'COVID-19 (SARS-CoV-2) IgM/IgG ANTIBODY TEST KIT',
        codigo: '122',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'COVID-19 IgG',
        codigo: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'COVID-19 IgG/IgM DUO (NANOENTEK)',
        codigo: '124',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'COVID-19 IgG/IgM ECO',
        codigo: '125',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'COVID-19 IgG/IgM RAPID TEST (COLLOIDAL GOLD)',
        codigo: '126',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'COVID-19 IgM ANTIBODY RAPID TEST KIT',
        codigo: '127',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'COVID-19 IgM/IgG ANTIBODY TEST',
        codigo: '128',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'COVID-19 IgM/IgG ANTIBODY TEST (COLLOIDAL GOLD)',
        codigo: '129',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'EDI NOVEL CORONAVÍRUS COVID-19 IgG ELISA KIT',
        codigo: '130',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'ELECSYS ANTI-SARS-CoV-2',
        codigo: '131',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'ERBALISA COVID-19 IgG',
        codigo: '132',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'HECIN COVID-19 IgM ANTIBODY RAPID TEST KIT',
        codigo: '133',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'IgM/IgG DIAGNOSTIC KIT FOR IgM/IgG ANTIBODY TO CORONAVÍRUS (SARS-CoV-2) [LATERAL FLOW]',
        codigo: '134',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'KIT COVID-19 IgG/IgM',
        codigo: '135',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'KIT DE DETECÇÃO 2019-nCoV IgG/IgM (Baseado em couro coloidal)',
        codigo: '136',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'KIT ELISA SARS-CoV-2 IgG',
        codigo: '137',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'KIT XGEN MASTER COVID-19',
        codigo: '138',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'NEWSCEN - COVID-19 IgG/IgM RAPID TEST CASSETTE',
        codigo: '139',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'NOVALISA SARS-CoV-2 (COVID-19) IgG',
        codigo: '140',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'NOVEL CORONAVÍRUS (2019-nCoV) IgM/IgG ANTIBODY COMBO TEST KIT (COLLOIDAL GOLD)',
        codigo: '141',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'ONE STEP TEST FOR NOVEL CORONAVÍRUS (2019-nCoV) IgM/IgG ANTIBODY',
        codigo: '142',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'RENDER COVID-19 IgM & IgG TEST',
        codigo: '143',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'SARS-CoV-2 ANTIBODY TEST STRIP',
        codigo: '144',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'SARS-CoV-2 ELISA IgG',
        codigo: '145',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'SARS-CoV-2 IgM/IgG (MACCURA)',
        codigo: '146',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'SARS-CoV-2 IgM/IgG AB RAPID TEST',
        codigo: '147',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'SARS-CoV-2 IgM/IgG ANTIBODY ASSAY KIT',
        codigo: '148',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'SARS-CoV-2 IgM/IgG ANTIBODY TEST (COLLOIDAL GOLD)',
        codigo: '149',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'SARS-CoV-2 IgM/IgG COMBO RAPID TEST KIT',
        codigo: '150',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'ARTRON COVID-19 IgM/IgG ANTIBODY TEST',
        codigo: '151',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'SARS-CoV-2 Antibody Test (Lateral  Flow Method)',
        codigo: '152',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'ELISA in house SARS-COV-2 IgM (UNILA)',
        codigo: '153',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'ELISA in house SARS CoV-2 IgM/IgG (UNILA)',
        codigo: '154',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'ELISA in house SARS CoV-2 IgA (UNILA)',
        codigo: '155',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'ELISA in house SARS CoV-2 - IgG (UNILA)',
        codigo: '156',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'COVID-19 IgG/IgM Rapid TESTE DEVICE',
        codigo: '157',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'One Step Rapid Teste - Innovita',
        codigo: '158',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Exame', { createdAt: { [Op.gte]: '2020-08-20' } }, {}),
};
