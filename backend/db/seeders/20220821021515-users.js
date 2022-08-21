'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('Users', [
      { fullName: 'Pixta Demo', userName: 'demo', email: 'demo@aa.io', hashedPassword: 'password', profilePicUrl: '', bio: 'This is a demo user profile', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'Marnie Friend', userName: 'marnie', email: 'marnie@aa.io', hashedPassword: 'password', profilePicUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'Beyonce', userName: 'bey', email: 'bey@aa.io', hashedPassword: 'queenB', profilePicUrl: '', bio: 'All the single ladies!', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'Maica Santos', userName: 'maicaS', email: 'maica@maica.io', hashedPassword: 'pixtagram', profilePicUrl: '', verified: true, bio: '!false: its funny because its true', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'Briana Robinson', userName: 'brianaR', email: 'briana@bri.io', hashedPassword: 'pixtagrambri', profilePicUrl: '', verified: true, bio: 'Atlanta, music, TA at AA', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'Anthony Bronca', userName: 'anthonybronca', email: 'abronca@admin.io', profilePicUrl: '', verified: true, hashedPassword: 'pixtagram', bio: 'Creator of this mobile app!', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'Agustin Zucca', userName: 'agustinZ', email: 'agustin@agus.io', hashedPassword: 'pixtagramagus', profilePicUrl: '', verified: true, bio: 'Argentine in Texas', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'Leah Stern', userName: 'leahS', email: 'leah@leah.io', hashedPassword: 'LeahIsTheBest', profilePicUrl: '', verified: true, bio: 'I like python(s), farms, and I am a Mod Lead Extraodinaire', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'Stee', userName: 'stee301', email: 'stee@stee.io', profilePicUrl: '', hashedPassword: 'stee301', bio: 'DIT traveling everywhere, Where should I go next?', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'Chere-Anne Luscina', userName: 'coco_cherry', profilePicUrl: '', email: 'chere@chere.io', hashedPassword: 'CaptainAmerica', bio: 'making my way downtown...', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
