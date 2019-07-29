const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
    },
  ],
  "@babel/preset-flow"

];

const plugins = [
  [
    "@babel/plugin-transform-runtime",
    {
      "corejs": 2,
      "helpers": true,
      "regenerator": true,
      "useESModules": false
    }
  ]
];

module.exports = { presets, plugins };