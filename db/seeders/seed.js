'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          first_name: 'Олег',
          last_name: 'Монгол',
        },
        {
          first_name: 'Константин',
          last_name: 'Цескаридзе',
        },
        {
          first_name: 'Николай',
          last_name: 'Нидворай',
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'Posts',
      [
        {
          title: 'First Post by Oleg',
          body: 'Short body 1',
          user_id: 1,
        },
        {
          title: 'Second Post by Oleg',
          body: 'Short body 2',
          user_id: 1,
        },
        {
          title: 'First Post by Nikolay',
          body: 'Short body 3',
          user_id: 2,
        },
        {
          title: 'Second Post by Nikolay',
          body: 'Short body 4',
          user_id: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  },
};
