const presets = [
    [
      "@babel/env",
      {
        targets: {
          esmodules: true,
        },
        useBuiltIns: "usage",
      },
    ], [
        "@babel/preset-react",
            {
                "pragma": "dom", // default pragma is React.createElement
                "pragmaFrag": "DomFrag", // default is React.Fragment
                "throwIfNamespace": false // defaults to true
            }
    ]
  ];
  
  module.exports = { presets };