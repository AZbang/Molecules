const Model = require('./Model');

var model = new Model(window.innerWidth, window.innerHeight);
model.addMolecule({
  "PC_Compounds": [
    {
      "id": {
        "id": {
          "cid": 2244
        }
      },
      "atoms": {
        "aid": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21
        ],
        "element": [
          8,
          8,
          8,
          8,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ]
      },
      "bonds": {
        "aid1": [
          1,
          1,
          2,
          2,
          3,
          4,
          5,
          5,
          6,
          6,
          7,
          7,
          8,
          8,
          9,
          9,
          10,
          12,
          13,
          13,
          13
        ],
        "aid2": [
          5,
          12,
          11,
          21,
          11,
          12,
          6,
          7,
          8,
          11,
          9,
          14,
          10,
          15,
          10,
          16,
          17,
          13,
          18,
          19,
          20
        ],
        "order": [
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          2,
          2,
          1,
          1,
          1,
          1,
          1,
          2,
          1,
          1,
          1,
          1,
          1,
          1
        ]
      },
      "coords": [
        {
          "type": [
            2,
            5,
            10
          ],
          "aid": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21
          ],
          "conformers": [
            {
              "x": [
                1.2333,
                -0.6952,
                0.7958,
                1.7813,
                -0.0857,
                -0.7927,
                -0.7288,
                -2.1426,
                -2.0787,
                -2.7855,
                -0.1409,
                2.1094,
                3.5305,
                -0.1851,
                -2.7247,
                -2.5797,
                -3.8374,
                3.729,
                4.2045,
                3.7105,
                -0.2555
              ],
              "y": [
                0.554,
                -2.7148,
                -2.1843,
                0.8105,
                0.6088,
                -0.5515,
                1.8464,
                -0.4741,
                1.9238,
                0.7636,
                -1.8536,
                0.6715,
                0.5996,
                2.7545,
                -1.3605,
                2.8872,
                0.8238,
                1.4184,
                0.6969,
                -0.3659,
                -3.5916
              ],
              "z": [
                0.7792,
                -0.7502,
                0.8685,
                -1.4821,
                0.4403,
                0.1244,
                0.4133,
                -0.2184,
                0.0706,
                -0.2453,
                0.1477,
                -0.3113,
                0.1635,
                0.6593,
                -0.4564,
                0.0506,
                -0.509,
                0.8593,
                -0.6924,
                0.6426,
                -0.7337
              ],
              "data": [
                {
                  "urn": {
                    "label": "Conformer",
                    "name": "ID",
                    "datatype": 11,
                    "version": "2.1",
                    "software": "PubChem",
                    "source": "ncbi.nlm.nih.gov",
                    "release": "2009.12.11"
                  },
                  "value": {
                    "sval": "000008C400000001"
                  }
                },
                {
                  "urn": {
                    "label": "Energy",
                    "name": "MMFF94 NoEstat",
                    "datatype": 7,
                    "version": "1.6.0",
                    "software": "Szybki",
                    "source": "openeye.com",
                    "release": "2012.01.18"
                  },
                  "value": {
                    "fval": 39.5952
                  }
                },
                {
                  "urn": {
                    "label": "Feature",
                    "name": "Self Overlap",
                    "datatype": 7,
                    "version": "2.1",
                    "software": "PubChem",
                    "source": "ncbi.nlm.nih.gov",
                    "release": "2012.01.18"
                  },
                  "value": {
                    "fval": 25.432
                  }
                },
                {
                  "urn": {
                    "label": "Fingerprint",
                    "name": "Shape",
                    "datatype": 2,
                    "version": "2.1",
                    "software": "PubChem",
                    "source": "ncbi.nlm.nih.gov",
                    "release": "2012.11.26"
                  },
                  "value": {
                    "slist": [
                      "1 1 18265615372930943622",
                      "100427 49 16967750034970055351",
                      "12138202 97 18271247217817981012",
                      "12423570 1 16692715976000295083",
                      "12524768 44 16753525617747228747",
                      "12716758 59 18341332292274886536",
                      "13024252 1 17968377969333732145",
                      "14181834 199 17830728755827362645",
                      "14614273 12 18262232214645093005",
                      "15207287 21 17703787037639964108",
                      "15775835 57 18340488876329928641",
                      "16945 1 18271533103414939405",
                      "193761 8 17907860604865584321",
                      "20645476 183 17677348215414174190",
                      "20871998 184 18198632231250704846",
                      "21040471 1 18411412921197846465",
                      "21501502 16 18123463883164380929",
                      "23402539 116 18271795865171824860",
                      "23419403 2 13539898140662769886",
                      "23552423 10 18048876295495619569",
                      "23559900 14 18272369794190581304",
                      "241688 4 16179044415907240795",
                      "257057 1 17478316999871287486",
                      "2748010 2 18339085878070479087",
                      "305870 269 18263645056784260212",
                      "528862 383 18117272558388284091",
                      "53812653 8 18410289211719108569",
                      "7364860 26 17910392788380644719",
                      "81228 2 18050568744116491203"
                    ]
                  }
                },
                {
                  "urn": {
                    "label": "Shape",
                    "name": "Multipoles",
                    "datatype": 8,
                    "version": "1.8.1",
                    "software": "OEShape",
                    "source": "openeye.com",
                    "release": "2012.01.18"
                  },
                  "value": {
                    "fvec": [
                      244.06,
                      3.86,
                      2.45,
                      0.89,
                      1.95,
                      1.58,
                      0.15,
                      -1.85,
                      0.38,
                      -0.61,
                      -0.02,
                      0.29,
                      0.01,
                      -0.33
                    ]
                  }
                },
                {
                  "urn": {
                    "label": "Shape",
                    "name": "Self Overlap",
                    "datatype": 7,
                    "version": "2.1",
                    "software": "PubChem",
                    "source": "ncbi.nlm.nih.gov",
                    "release": "2012.01.18"
                  },
                  "value": {
                    "fval": 513.037
                  }
                },
                {
                  "urn": {
                    "label": "Shape",
                    "name": "Volume",
                    "datatype": 7,
                    "version": "1.8.1",
                    "software": "OEShape",
                    "source": "openeye.com",
                    "release": "2012.01.18"
                  },
                  "value": {
                    "fval": 136
                  }
                }
              ]
            }
          ],
          "data": [
            {
              "urn": {
                "label": "Conformer",
                "name": "RMSD",
                "datatype": 7,
                "release": "2009.12.11"
              },
              "value": {
                "fval": 0.6
              }
            },
            {
              "urn": {
                "label": "Diverse Conformer",
                "name": "ID List",
                "datatype": 6,
                "release": "2012.02.08"
              },
              "value": {
                "ivec": [
                  1,
                  11,
                  10,
                  3,
                  15,
                  17,
                  13,
                  5,
                  16,
                  7,
                  14,
                  9,
                  8,
                  4,
                  18,
                  6,
                  12,
                  2
                ]
              }
            }
          ]
        }
      ],
      "props": [
        {
          "urn": {
            "label": "Charge",
            "name": "MMFF94 Partial",
            "datatype": 2,
            "version": "1.7.6",
            "software": "OEChem",
            "source": "openeye.com",
            "release": "2012.02.08"
          },
          "value": {
            "slist": [
              "18",
              "1 -0.23",
              "10 -0.15",
              "11 0.63",
              "12 0.66",
              "13 0.06",
              "14 0.15",
              "15 0.15",
              "16 0.15",
              "17 0.15",
              "2 -0.65",
              "21 0.5",
              "3 -0.57",
              "4 -0.57",
              "5 0.08",
              "6 0.09",
              "7 -0.15",
              "8 -0.15",
              "9 -0.15"
            ]
          }
        },
        {
          "urn": {
            "label": "Count",
            "name": "Effective Rotor",
            "datatype": 7,
            "version": "1.7.6",
            "software": "OEChem",
            "source": "ncbi.nlm.nih.gov",
            "release": "2012.01.18"
          },
          "value": {
            "fval": 3
          }
        },
        {
          "urn": {
            "label": "Features",
            "name": "Pharmacophore",
            "datatype": 2,
            "parameters": "ImplicitMillsDean merged",
            "version": "1.8.1",
            "software": "OEShape",
            "source": "openeye.com",
            "release": "2012.02.08"
          },
          "value": {
            "slist": [
              "5",
              "1 2 acceptor",
              "1 3 acceptor",
              "1 4 acceptor",
              "3 2 3 11 anion",
              "6 5 6 7 8 9 10 rings"
            ]
          }
        }
      ],
      "count": {
        "heavy_atom": 13,
        "atom_chiral": 0,
        "atom_chiral_def": 0,
        "atom_chiral_undef": 0,
        "bond_chiral": 0,
        "bond_chiral_def": 0,
        "bond_chiral_undef": 0,
        "isotope_atom": 0,
        "covalent_unit": 1,
        "tautomers": 1
      }
    }
  ]
});

model.start();

window.onresize = () => {
	model.resize(window.innerWidth, window.innerHeight);
}
