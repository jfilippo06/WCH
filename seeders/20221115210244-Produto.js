"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Productos",
      [
        {
          codigo: "000001",
          producto: "TAZA",
          tipo: "VIDRIO NO SUBLIMABLE",
          color: "",
          cantidad: 9,
          precio: 4.47,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000002",
          producto: "TAZA",
          tipo: "TRADICIONAL",
          color: "BLANCA",
          cantidad: 42,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000003",
          producto: "TAZA",
          tipo: "FONDO ROJO",
          color: "BLANCA",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000004",
          producto: "TAZA",
          tipo: "SIMULACION DE PELTRE",
          color: "",
          cantidad: 8,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000005",
          producto: "TAZA",
          tipo: "PELTRE REAL",
          color: "",
          cantidad: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000006",
          producto: "TAZA",
          tipo: "CUCHI 6OZ",
          color: "",
          cantidad: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000007",
          producto: "TAZA",
          tipo: "METALIZADAS",
          color: "DORADA",
          cantidad: 6,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000008",
          producto: "TAZA",
          tipo: "METALIZADAS",
          color: "PLATEADAS",
          cantidad: 12,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000009",
          producto: "TAZA",
          tipo: "METALIZADAS",
          color: "AZUL",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000010",
          producto: "TAZA",
          tipo: "METALIZADAS",
          color: "ROSADA",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000011",
          producto: "TAZA",
          tipo: "METALIZADAS",
          color: "ROSE GOLD",
          cantidad: 10,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000012",
          producto: "TAZA",
          tipo: "METALIZADAS",
          color: "VERDE",
          cantidad: 5,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000013",
          producto: "TAZA",
          tipo: "METALIZADAS",
          color: "PLOMO",
          cantidad: 9,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000014",
          producto: "TAZA",
          tipo: "PERLADAS",
          color: "ROSADA",
          cantidad: 6,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000015",
          producto: "TAZA",
          tipo: "PERLADAS",
          color: "BLANCA",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000016",
          producto: "TAZA",
          tipo: "PERLADAS",
          color: "GRIS",
          cantidad: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000017",
          producto: "TAZA",
          tipo: "PERLADAS",
          color: "FUCSIA",
          cantidad: 5,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000018",
          producto: "TAZA",
          tipo: "MÁGICA FONDO BLANCO",
          color: "MATTE",
          cantidad: 12,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000019",
          producto: "TAZA",
          tipo: "MÁGICA FONDO ROJO",
          color: "MATTE",
          cantidad: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000020",
          producto: "TAZA",
          tipo: "MÁGICA FONDO AZUL",
          color: "MATTE",
          cantidad: 11,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000021",
          producto: "TAZA",
          tipo: "MÁGICA FONDO ROSA",
          color: "MATTE",
          cantidad: 12,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000022",
          producto: "TAZA",
          tipo: "MÁGICA FONDO BLANCO",
          color: "ESCARCHADA",
          cantidad: 14,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000023",
          producto: "TAZA",
          tipo: "NEÓN",
          color: "NARANJA",
          cantidad: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000024",
          producto: "TAZA",
          tipo: "NEÓN",
          color: "VERDE",
          cantidad: 5,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000025",
          producto: "TAZA",
          tipo: "NEÓN",
          color: "FUCSIA",
          cantidad: 5,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000026",
          producto: "TAZA",
          tipo: "NEÓN",
          color: "AMARILLO",
          cantidad: 4,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000027",
          producto: "TAZA",
          tipo: "CÓNICA 12 OZ",
          color: "",
          cantidad: 5,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000028",
          producto: "TAZA",
          tipo: "CÓNICA 17 OZ",
          color: "",
          cantidad: 5,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000029",
          producto: "TAZA",
          tipo: "VASO CONICO CON TAPA SILICONE",
          color: "",
          cantidad: 4,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000030",
          producto: "JARRA",
          tipo: "CERVECERA TRANSPARENTE",
          color: "",
          cantidad: 11,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000031",
          producto: "JARRA",
          tipo: "CERVECERA FONDO ROJO",
          color: "",
          cantidad: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000032",
          producto: "JARRA",
          tipo: "CERVECERA FONDO VERDE",
          color: "",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000033",
          producto: "TERMO",
          tipo: "VASO ALUMIONIO C/TAPA NO SUBLIMABLE",
          color: "",
          cantidad: 10,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000034",
          producto: "TERMO",
          tipo: "LECHERO",
          color: "PLATEADO",
          cantidad: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000035",
          producto: "TERMO",
          tipo: "LECHERO",
          color: "BLANCO",
          cantidad: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000036",
          producto: "TERMO",
          tipo: "LATA ALUMINIO TIPO REFRESCO",
          color: "",
          cantidad: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000037",
          producto: "TERMO",
          tipo: "VASO VINERO SUBLIMABLE",
          color: "",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000038",
          producto: "TERMO",
          tipo: "MASON JAR CON TAPA Y PITILLO",
          color: "",
          cantidad: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000039",
          producto: "TERMO",
          tipo: "BOTELLITA ALUMINIO",
          color: "",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000040",
          producto: "TERMO",
          tipo: "DEP. BLANCO C/PILLITO",
          color: "NEGRO",
          cantidad: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000041",
          producto: "TERMO",
          tipo: "C/TAPA ROSCA",
          color: "NARANJA",
          cantidad: 8,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000042",
          producto: "TERMO",
          tipo: "C/TAPA ROSCA",
          color: "GRIS",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000043",
          producto: "TERMO",
          tipo: "DEP. ROSCA CON LAVERO",
          color: "VERDE",
          cantidad: 10,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000044",
          producto: "TERMO",
          tipo: "DEP. ROSCA CON LAVERO",
          color: "AZUL",
          cantidad: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000045",
          producto: "TERMO",
          tipo: "ALUMINIO",
          color: "BLANCA",
          cantidad: 10,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000046",
          producto: "TERMO",
          tipo: "ALUMINIO SUBLIMABLE",
          color: "BLANCA",
          cantidad: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000047",
          producto: "TAZA",
          tipo: "GLASEADA TRANSPARENTE",
          color: "",
          cantidad: 6,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000048",
          producto: "TAZA",
          tipo: "GLASEADA FONDO VERDE",
          color: "",
          cantidad: 6,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000049",
          producto: "TAZA",
          tipo: "GLASEADA FONDO ROJO",
          color: "",
          cantidad: 5,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000050",
          producto: "TAZA",
          tipo: "GLASEADA FONDO ROSADO",
          color: "",
          cantidad: 6,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000051",
          producto: "TAZA",
          tipo: "GLASEADA FONDO AZUL",
          color: "",
          cantidad: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000052",
          producto: "TAZA",
          tipo: "GLASEADA PORTA VASOS SUBLIMABLE",
          color: "",
          cantidad: 9,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000053",
          producto: "LLAVERO",
          tipo: "RECTANGULAR",
          color: "PLATEADO",
          cantidad: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000054",
          producto: "LLAVERO",
          tipo: "RECTANGULAR",
          color: "BLANCO",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000055",
          producto: "LLAVERO",
          tipo: "CUADRADO",
          color: "PLATEADO",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000056",
          producto: "LLAVERO",
          tipo: "REDONDO",
          color: "PLATEADO",
          cantidad: 11,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000057",
          producto: "LLAVERO",
          tipo: "CORAZON",
          color: "BLANCO",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000058",
          producto: "LLAVERO",
          tipo: "CORAZON",
          color: "PLATEADO",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000059",
          producto: "LLAVERO",
          tipo: "HUESO",
          color: "",
          cantidad: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000060",
          producto: "LLAVERO",
          tipo: "TABLA SURF",
          color: "BLANCO",
          cantidad: 32,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000061",
          producto: "LLAVERO",
          tipo: "ARBOL NAVIDAD",
          color: "",
          cantidad: 10,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000062",
          producto: "DESTAPADOR",
          tipo: "BOTELLA",
          color: "PLATEADO",
          cantidad: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000063",
          producto: "DESTAPADOR",
          tipo: "BOTELLA",
          color: "BLANCO",
          cantidad: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000064",
          producto: "DESTAPADOR",
          tipo: "CERVEZA",
          color: "PLATEADO",
          cantidad: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000065",
          producto: "DESTAPADOR",
          tipo: "CERVEZA",
          color: "BLANCO",
          cantidad: 5,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000066",
          producto: "LAPICERO",
          tipo: "REDONDO",
          color: "BLANCO",
          cantidad: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000067",
          producto: "LAPICERO",
          tipo: "CUADRADO",
          color: "BLANCO",
          cantidad: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000068",
          producto: "LAPICERO",
          tipo: "REDONDO",
          color: "PLATEADO",
          cantidad: 6,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000069",
          producto: "ROMPECABEZA",
          tipo: "RECTANGULAR",
          color: "",
          cantidad: 21,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000070",
          producto: "ROMPECABEZA",
          tipo: "CORAZON",
          color: "",
          cantidad: 6,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000071",
          producto: "RELOJ",
          tipo: "3 LADOS SUBLIMABLES",
          color: "",
          cantidad: 3,
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
