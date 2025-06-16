module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('productos', {
      id_produto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome_produto: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      quantidade_produto: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      preco: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false
      },
      fabricante: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      tarja: {
        type: Sequelize.ENUM('vermelha', 'preta', 'sem'),
        allowNull: false
      },
      classificacao: {
        type: Sequelize.ENUM('uso_controlado', 'uso_continuo', 'outros'),
        allowNull: false
      },
      data_fabricacao: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      data_validade: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      entrada: {
        type: Sequelize.DATE,
        allowNull: false
      },
      saida: {
        type: Sequelize.DATE,
        allowNull: true
      },
      usuario_cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'cpf'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface,) {
    await queryInterface.dropTable('productos');
  }
};
