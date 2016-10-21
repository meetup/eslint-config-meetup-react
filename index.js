module.exports = {
  "extends": [
    "meetup-es6"
  ],
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "env": {
    "jest": true
  },
  "rules": {
    "jsx-quotes": [1, "prefer-single"],
    "react/jsx-no-undef": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-deprecated": 2,
    "react/no-string-refs": 1,
    "react/react-in-jsx-scope": 2,
    "react/jsx-wrap-multilines": 2,
    "react/jsx-boolean-value": 2,
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-uses-react": 2
  }
};
