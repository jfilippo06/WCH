"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Franelas",
      [
        {
          codigo: "000001",
          tela: "MICRODURAZNO",
          talla: "6",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 3,
          precio: 15.67,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000002",
          tela: "MICRODURAZNO",
          talla: "8",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 5,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000003",
          tela: "MICRODURAZNO",
          talla: "10",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000004",
          tela: "MICRODURAZNO",
          talla: "12",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 10,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000005",
          tela: "MICRODURAZNO",
          talla: "14",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000006",
          tela: "MICRODURAZNO",
          talla: "16",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000007",
          tela: "MICRODURAZNO",
          talla: "1",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000008",
          tela: "MICRODURAZNO",
          talla: "6",
          color: "VERDE",
          cuello: "REDONDO",
          manga: "FARALADO",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000009",
          tela: "MICRODURAZNO",
          talla: "U",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000010",
          tela: "MICRODURAZNO",
          talla: "U",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "SISA LARGA",
          marca: "",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000011",
          tela: "MICRODURAZNO",
          talla: "U",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "FARALADO",
          marca: "",
          stock: 4,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000012",
          tela: "MICRODURAZNO",
          talla: "M",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 6,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000013",
          tela: "MICRODURAZNO",
          talla: "L",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000014",
          tela: "MICRODURAZNO",
          talla: "L",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "FARALADO",
          marca: "",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000015",
          tela: "MICRODURAZNO",
          talla: "U",
          color: "ROSADA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000016",
          tela: "MICRODURAZNO",
          talla: "S",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 4,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000017",
          tela: "MICRODURAZNO",
          talla: "M",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000018",
          tela: "MICRODURAZNO",
          talla: "L",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000019",
          tela: "MICRODURAZNO",
          talla: "XL",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000020",
          tela: "MICRODURAZNO",
          talla: "2XL",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000021",
          tela: "MICRODURAZNO",
          talla: "3XL",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000022",
          tela: "MICRODURAZNO",
          talla: "XL",
          color: "NEGRO",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000023",
          tela: "MICRODURAZNO",
          talla: "S",
          color: "NEGRO",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000024",
          tela: "MICRODURAZNO",
          talla: "XL",
          color: "NEGRO",
          cuello: "V",
          manga: "NORMAL",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000025",
          tela: "MICRODURAZNO",
          talla: "M",
          color: "BLANCA",
          cuello: "REDONDO",
          manga: "LARGA",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000026",
          tela: "MICRODURAZNO",
          talla: "6",
          color: "TYDY",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 4,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000027",
          tela: "MICRODURAZNO",
          talla: "U",
          color: "VARIADAS",
          cuello: "REDONDO",
          manga: "SISA LARGA",
          marca: "",
          stock: 4,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000028",
          tela: "MICRODURAZNO",
          talla: "PLUS",
          color: "NEGRO",
          cuello: "S/MANGA",
          manga: "NORMAL",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000029",
          tela: "MICRODURAZNO",
          talla: "PLUS",
          color: "VERDE",
          cuello: "REDONDO",
          manga: "S/MANGA",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000030",
          tela: "MICRODURAZNO",
          talla: "S",
          color: "LILA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000031",
          tela: "MICRODURAZNO",
          talla: "U",
          color: "MORADA",
          cuello: "V",
          manga: "NORMAL",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000032",
          tela: "MICRODURAZNO",
          talla: "PLUS",
          color: "BEIGE",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000033",
          tela: "MICRODURAZNO",
          talla: "PLUS",
          color: "MORADA",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000034",
          tela: "MICRODURAZNO",
          talla: "PLUS RECTA",
          color: "NEGRO",
          cuello: "V",
          manga: "NORMAL",
          marca: "",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000035",
          tela: "MICRODURAZNO",
          talla: "PLUS RECTA",
          color: "MORADA",
          cuello: "V",
          manga: "NORMAL",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000036",
          tela: "MICRODURAZNO",
          talla: "U",
          color: "AZUL",
          cuello: "V",
          manga: "NORMAL",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000037",
          tela: "MICRODURAZNO",
          talla: "U",
          color: "NEGRO",
          cuello: "V",
          manga: "NORMAL",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000038",
          tela: "MICRODURAZNO",
          talla: "U",
          color: "AMARILLO",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000039",
          tela: "MICRODURAZNO",
          talla: "M",
          color: "TURQUESA",
          cuello: "REDONDO",
          manga: "FARALADO",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000040",
          tela: "MICRODURAZNO",
          talla: "U",
          color: "ROJO",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000041",
          tela: "MICRODURAZNO",
          talla: "M",
          color: "GRIS",
          cuello: "REDONDO",
          manga: "NORMAL",
          marca: "",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000042",
          tela: "ALGODON",
          talla: "000",
          color: "BLANCA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000043",
          tela: "ALGODON",
          talla: "2",
          color: "BLANCA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000044",
          tela: "ALGODON",
          talla: "4",
          color: "BLANCA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000045",
          tela: "ALGODON",
          talla: "6",
          color: "BLANCA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000046",
          tela: "ALGODON",
          talla: "8",
          color: "BLANCA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000047",
          tela: "ALGODON",
          talla: "10",
          color: "BLANCA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000048",
          tela: "ALGODON",
          talla: "12",
          color: "BLANCA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000049",
          tela: "ALGODON",
          talla: "14",
          color: "BLANCA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 4,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000050",
          tela: "ALGODON",
          talla: "16",
          color: "BLANCA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 4,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000051",
          tela: "ALGODON",
          talla: "18",
          color: "BLANCA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000052",
          tela: "ALGODON",
          talla: "S",
          color: "BLANCA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000053",
          tela: "ALGODON",
          talla: "M",
          color: "BLANCA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000054",
          tela: "ALGODON",
          talla: "L",
          color: "BLANCA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000055",
          tela: "ALGODON",
          talla: "XL",
          color: "BLANCA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000056",
          tela: "ALGODON",
          talla: "2XL",
          color: "BLANCA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 6,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000057",
          tela: "ALGODON",
          talla: "3XL",
          color: "BLANCA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 5,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000058",
          tela: "ALGODON",
          talla: "000",
          color: "NEGRO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000059",
          tela: "ALGODON",
          talla: "2",
          color: "NEGRO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000060",
          tela: "ALGODON",
          talla: "4",
          color: "NEGRO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000061",
          tela: "ALGODON",
          talla: "6",
          color: "NEGRO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000062",
          tela: "ALGODON",
          talla: "8",
          color: "NEGRO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000063",
          tela: "ALGODON",
          talla: "10",
          color: "NEGRO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000064",
          tela: "ALGODON",
          talla: "12",
          color: "NEGRO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000065",
          tela: "ALGODON",
          talla: "14",
          color: "NEGRO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000066",
          tela: "ALGODON",
          talla: "16",
          color: "NEGRO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000067",
          tela: "ALGODON",
          talla: "18",
          color: "NEGRO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000068",
          tela: "ALGODON",
          talla: "S",
          color: "NEGRO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 14,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000069",
          tela: "ALGODON",
          talla: "M",
          color: "NEGRO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000070",
          tela: "ALGODON",
          talla: "L",
          color: "NEGRO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 6,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000071",
          tela: "ALGODON",
          talla: "XL",
          color: "NEGRO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 4,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000072",
          tela: "ALGODON",
          talla: "2XL",
          color: "NEGRO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 5,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000073",
          tela: "ALGODON",
          talla: "3XL",
          color: "NEGRO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000074",
          tela: "ALGODON",
          talla: "S",
          color: "VERDE",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000075",
          tela: "ALGODON",
          talla: "M",
          color: "VERDE",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000076",
          tela: "ALGODON",
          talla: "L",
          color: "VERDE",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000077",
          tela: "ALGODON",
          talla: "XL",
          color: "VERDE",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000078",
          tela: "ALGODON",
          talla: "2XL",
          color: "VERDE",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 6,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000079",
          tela: "ALGODON",
          talla: "3XL",
          color: "VERDE",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000080",
          tela: "ALGODON",
          talla: "18",
          color: "AZUL REY",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 6,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000081",
          tela: "ALGODON",
          talla: "S",
          color: "AZUL REY",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 7,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000082",
          tela: "ALGODON",
          talla: "M",
          color: "AZUL REY",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 7,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000083",
          tela: "ALGODON",
          talla: "L",
          color: "AZUL REY",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 4,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000084",
          tela: "ALGODON",
          talla: "XL",
          color: "AZUL REY",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000085",
          tela: "ALGODON",
          talla: "2XL",
          color: "AZUL REY",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000086",
          tela: "ALGODON",
          talla: "3XL",
          color: "AZUL REY",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000087",
          tela: "ALGODON",
          talla: "S",
          color: "ROJO",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000088",
          tela: "ALGODON",
          talla: "M",
          color: "ROJO",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 5,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000089",
          tela: "ALGODON",
          talla: "L",
          color: "ROJO",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000090",
          tela: "ALGODON",
          talla: "XL",
          color: "ROJO",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 6,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000091",
          tela: "ALGODON",
          talla: "2XL",
          color: "ROJO",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000092",
          tela: "ALGODON",
          talla: "3XL",
          color: "ROJO",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000093",
          tela: "ALGODON",
          talla: "S",
          color: "AMARILLO",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000094",
          tela: "ALGODON",
          talla: "M",
          color: "AMARILLO",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 5,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000095",
          tela: "ALGODON",
          talla: "L",
          color: "AMARILLO",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000096",
          tela: "ALGODON",
          talla: "XL",
          color: "AMARILLO",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000097",
          tela: "ALGODON",
          talla: "2XL",
          color: "AMARILLO",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000098",
          tela: "ALGODON",
          talla: "3XL",
          color: "AMARILLO",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000099",
          tela: "ALGODON",
          talla: "S",
          color: "AZUL NAV",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000100",
          tela: "ALGODON",
          talla: "M",
          color: "AZUL NAV",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000101",
          tela: "ALGODON",
          talla: "L",
          color: "AZUL NAV",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000102",
          tela: "ALGODON",
          talla: "XL",
          color: "AZUL NAV",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000103",
          tela: "ALGODON",
          talla: "2XL",
          color: "AZUL NAV",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000104",
          tela: "ALGODON",
          talla: "3XL",
          color: "AZUL NAV",
          cuello: "",
          manga: "",
          marca: "CLASSIC",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000105",
          tela: "ALGODON",
          talla: "6",
          color: "GRIS CLARO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000106",
          tela: "ALGODON",
          talla: "8",
          color: "GRIS CLARO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000107",
          tela: "ALGODON",
          talla: "10",
          color: "GRIS CLARO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000108",
          tela: "ALGODON",
          talla: "12",
          color: "GRIS CLARO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000109",
          tela: "ALGODON",
          talla: "14",
          color: "GRIS CLARO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000110",
          tela: "ALGODON",
          talla: "16",
          color: "GRIS CLARO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000111",
          tela: "ALGODON",
          talla: "18",
          color: "GRIS CLARO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 3,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000112",
          tela: "ALGODON",
          talla: "S",
          color: "GRIS CLARO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 10,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000113",
          tela: "ALGODON",
          talla: "M",
          color: "GRIS CLARO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000114",
          tela: "ALGODON",
          talla: "L",
          color: "GRIS CLARO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000115",
          tela: "ALGODON",
          talla: "XL",
          color: "GRIS CLARO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 0,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000116",
          tela: "ALGODON",
          talla: "2XL",
          color: "GRIS CLARO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 4,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000117",
          tela: "ALGODON",
          talla: "3XL",
          color: "GRIS CLARO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000118",
          tela: "ALGODON",
          talla: "XL",
          color: "GRIS MAS OSCURO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000119",
          tela: "ALGODON",
          talla: "XL",
          color: "GRIS OSCURO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000120",
          tela: "ALGODON",
          talla: "M",
          color: "ROSA VIEJA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000121",
          tela: "ALGODON",
          talla: "XL",
          color: "BLANCA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000122",
          tela: "ALGODON",
          talla: "4",
          color: "ROSADA TY",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000123",
          tela: "ALGODON",
          talla: "6",
          color: "ROSADA TY",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000124",
          tela: "ALGODON",
          talla: "12",
          color: "ROSADA TY",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 2,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000125",
          tela: "ALGODON",
          talla: "4",
          color: "ROSA CLARA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000126",
          tela: "ALGODON",
          talla: "10",
          color: "AZUL MARINO",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          codigo: "000127",
          tela: "ALGODON",
          talla: "10",
          color: "FUCSIA",
          cuello: "",
          manga: "",
          marca: "KLASIKO",
          stock: 1,
          precio: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Franelas", null, {});
  },
};
