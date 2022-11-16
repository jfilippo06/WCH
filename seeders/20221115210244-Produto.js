"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Productos",
      [
        {
          producto: "TAZA",
          tipo: "VIDRIO NO SUBLIMABLE",
          color: "",
          cantidad: 9,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "TRADICIONAL",
          color: "BLANCA",
          cantidad: 42,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "FONDO ROJO",
          color: "BLANCA",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "SIMULACION DE PELTRE",
          color: "",
          cantidad: 8,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "PELTRE REAL",
          color: "",
          cantidad: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "CUCHI 6OZ",
          color: "",
          cantidad: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "METALIZADAS",
          color: "DORADA",
          cantidad: 6,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "METALIZADAS",
          color: "PLATEADAS",
          cantidad: 12,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "METALIZADAS",
          color: "AZUL",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "METALIZADAS",
          color: "ROSADA",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "METALIZADAS",
          color: "ROSE GOLD",
          cantidad: 10,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "METALIZADAS",
          color: "VERDE",
          cantidad: 5,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "METALIZADAS",
          color: "PLOMO",
          cantidad: 9,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "PERLADAS",
          color: "ROSADA",
          cantidad: 6,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "PERLADAS",
          color: "BLANCA",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "PERLADAS",
          color: "GRIS",
          cantidad: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "PERLADAS",
          color: "FUCSIA",
          cantidad: 5,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "MÁGICA FONDO BLANCO",
          color: "MATTE",
          cantidad: 12,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "MÁGICA FONDO ROJO",
          color: "MATTE",
          cantidad: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "MÁGICA FONDO AZUL",
          color: "MATTE",
          cantidad: 11,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "MÁGICA FONDO ROSA",
          color: "MATTE",
          cantidad: 12,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "MÁGICA FONDO BLANCO",
          color: "ESCARCHADA",
          cantidad: 14,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto: "TAZA",
          tipo: "MÁGICA",
          color: "",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Productos", null, {});
  },
};
