
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Profissao',
    [
      {
        id: '28da7c76-d068-4d31-9013-358bed063b5d',
        nome: 'Desenvolvedor de Sistemas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Profissao', null, {}),
};
