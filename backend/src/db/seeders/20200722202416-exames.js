const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Exame', [
    {
      id: uuidv4(),
      nome: 'Vírus Respiratório',
      codigo: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Influenza',
      codigo: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Anti COVID-19 IgG/IgM Rapid Test',
      codigo: '5',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'BasePoint COVID-19 IgG/IgM',
      codigo: '6',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'BIOSYNEX COVID-19 BSS',
      codigo: '7',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'CORONAVÍRUS IgG/IgM (COVID-19)',
      codigo: '8',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'CORONAVÍRUS RAPID TEST',
      codigo: '9',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 Ag ECO Teste',
      codigo: '10',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 IgG/IgM',
      codigo: '11',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 IgG/IgM BIO',
      codigo: '12',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 IgG/IgM ECO Teste',
      codigo: '13',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 IgG/IgM LF',
      codigo: '14',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 igG/IgM test',
      codigo: '15',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'DPP® COVID-19 IgM/IgG System',
      codigo: '16',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Família COVID-19 IgG/IgM Teste Rápido ( Sangue total/ Soro/Plasma)',
      codigo: '17',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Família Teste Rápido em Cassete 2019-nCoV IgG/IgM (sangue total/soro/plasma)',
      codigo: '18',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'MedTeste Coronavírus (COVID-19) IgG/IgM (TESTE RAPIDO)',
      codigo: '20',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'One Step COVID-2019 Test',
      codigo: '21',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'QuickProfile COVID-19 IgG/IgM Combo Test Card',
      codigo: '22',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Smart Test Covid-19 Vyttra',
      codigo: '23',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Teste Rápido Covid-19 15 minutos Nutriex',
      codigo: '24',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Teste Rápido OnSite™ COVID-19 IgG/IgM',
      codigo: '25',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'TR DPP® COVID-19 IGM/IGG - Bio-Manguinhos',
      codigo: '26',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19, Biologia Molecular',
      codigo: '27',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'AFIAS COVID-19 Ab',
      codigo: '28',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'ALLSERUM EIA COVID19 IGG',
      codigo: '29',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'ALLSERUM EIA COVID19 IGM',
      codigo: '30',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Anti-SARS-CoV-2 ELISA IgA',
      codigo: '31',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Anti-SARS-CoV-2 IgG ELISA',
      codigo: '32',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Asan Easy Teste Covid-19 IgG/IgM',
      codigo: '33',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Casete Diagnóstico Teste de Anticorpos para SARS-CoV-2',
      codigo: '34',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Celer Sansure Kit de Detecção por PCR em Tempo Real para SARS-CoV-2',
      codigo: '35',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Cellex qSARS-CoV-2 IgG/IgM Cassette Rapid Test',
      codigo: '36',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'CORONAVÍRUS COVID-19 IgG/IgM TESTE RÁPIDO',
      codigo: '37',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 ELISA IgG',
      codigo: '38',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 ELISA IgM+IgA',
      codigo: '39',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 IgG/IgM Assure Test',
      codigo: '40',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 IgG/IgM RAPID Combo ECO Teste',
      codigo: '41',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 IgG/IgM KIT DE TESTE RÁPIDO',
      codigo: '42',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 IgG/IgM Rapid Test',
      codigo: '43',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 IgG/IgM Rapid Test Cassette (WB/S/P)',
      codigo: '44',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 IgG/IgM Rapid Test Device (WB/S/P)',
      codigo: '45',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 IgG/IgM Rapid Test Kit',
      codigo: '46',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 IgG/IgM Teste Rápido em Tira',
      codigo: '47',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 Real-Time PCR Kit',
      codigo: '48',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'COVID-19 VIRCLIA IgM/IgA MONOTEST',
      codigo: '49',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'DETECT SARS-CoV-2 RT-PCR',
      codigo: '50',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Diagnostic Kit for IgM/IgG Antibody to Coronavirus (SAR S-CoV-2)',
      codigo: '51',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Diagnostic Kit for Novel-Coronavirus(2019-nCoV) RNA',
      codigo: '52',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'ECO F COVID-19 Ag',
      codigo: '53',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'EURORealTime SARS-CoV-2 RT-PCR',
      codigo: '54',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Família Abbott RealTime SARS-CoV-2',
      codigo: '55',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Família Abbott RealTime SARS-CoV-2 EUA',
      codigo: '56',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'FAMÍLIA BIO GENE COVID-19 PCR',
      codigo: '57',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Família cobas SARS-CoV-2',
      codigo: '58',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Família Kit de Detecção por PCR em Tempo Real VIASURE SARS-CoV-2',
      codigo: '59',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'FAMÍLIA KIT XGEN MASTER COVID-19',
      codigo: '60',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Família SARS-CoV-2 IgG',
      codigo: '61',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'GeneFinderTM COVID-19 PLUS RealAmp Kit',
      codigo: '62',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'ichroma COVID-19 Ab Imunofluorescência',
      codigo: '63',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Imuno-Rápido COVID-19 IgG/IgM',
      codigo: '64',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Imunotest COVID-19',
      codigo: '65',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'KIT DE TESTE RAPIDO PARA COVID-19',
      codigo: '66',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Kit MOLECULAR SARS-CoV2 (E/P1)',
      codigo: '67',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Kit Molecular SARS-CoV2 (E/RP)',
      codigo: '68',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'KOVID Ab (COVID-19 IgG/IgM)',
      codigo: '69',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'LANG SARS-CoV-2 Antibody Test',
      codigo: '70',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Leccurate - SARS-CoV-2 Antibody Test (colloidal gold immunochromatography)',
      codigo: '71',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'LUMIRATEK COVID-19 (IgG/IgM)',
      codigo: '72',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'MAGLUMI IgG de 2019-nCoV',
      codigo: '73',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'MAGLUMI IgM de 2019-nCoV',
      codigo: '74',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Medf1rst covid-19 teste rapido',
      codigo: '75',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'NEW CORONAVIRUS IGG/IGM RAPID TEST KIT (COVID-19 IgG/ IgM)',
      codigo: '76',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'NL qSARS-CoV-2 IgG/IgM Cassette Rapid Test',
      codigo: '77',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Novel Coronavirus (2019-nCoV) Nucleic Acid Detection Kit PCR-Fluorescence Probing',
      codigo: '78',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Novo kit de teste de anticorpos IgM / IgG para coronavírus (2019-nCoV)',
      codigo: '79',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Panbio COVID-19 IgG/IgM Rapid Test Device',
      codigo: '80',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Quick PROFILE COVID-19 IgG/IgM Test Card',
      codigo: '81',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'RealStar® SARS-CoV-2 RT-PCR Kit 1.0',
      codigo: '82',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'SARS CoV-2 ECO Detect',
      codigo: '83',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'SARS-CoV-2 Antibody Test',
      codigo: '84',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'SARS-CoV-2 Antibody Test (colloidal gold immunochromatography)',
      codigo: '85',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'SARS-CoV-2 IgG & IgM Ab Diagnostic Test kit (Colloidal Gold)',
      codigo: '86',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'SARS-COV-2 RT-PCR KIT',
      codigo: '87',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'SARS-CoV-2 S gene for BD Max',
      codigo: '88',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'SARS-CoV-2 TESTE DE ANTICORPO (IMUNOCROMATOGRAFIA EM OURO COLOIDAL)',
      codigo: '89',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'TaqPath™ COVID-19 CE-IVD RT PCR Kit',
      codigo: '90',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Teste de anticorpo SARS-CoV-2 (imunocromatografia - ouro coloidal)',
      codigo: '91',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Teste para anticorpos de SARS-CoV-2 (imunocromatografia com ouro coloidal)',
      codigo: '92',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Teste Rápido COVID-19 IgG / IgM Bahiafarma',
      codigo: '93',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Xpert Xpress SARS-CoV-2',
      codigo: '94',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'SARS-CoV-2 Antibody Test (homologado)',
      codigo: '95',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Teste Rápido CORONAVÍRUS REALY TECH',
      codigo: '96',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Elecsys Anti SARS-CoV2',
      codigo: '98',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'CORONAVÍRUS 2019 - SARS-COV-2- IMUNOGLOBULINA TOTAL',
      codigo: '99',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: ' SOROLOGIA COVID-19 (Anticorpos anti-SARS-CoV-2 IgG)',
      codigo: '100',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Covid-19 ELISA IgG+IgA',
      codigo: '101',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'Medix -Teste coronavírus -IgG/IgM',
      codigo: '102',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'ACRO BIOTECH (ACRO Rapid Test)',
      codigo: '103',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

  ]),

  down: (queryInterface) => queryInterface.bulkDelete('Exame', null, {}),
};
