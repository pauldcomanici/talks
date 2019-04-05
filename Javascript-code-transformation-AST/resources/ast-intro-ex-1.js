// code
console.log('Like');


// AST
const ast = {
  "type": "File",
  "start": 0,
  "end": 23,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 4,
      "column": 0
    }
  },
  "program": {
    "type": "Program",
    "start": 0,
    "end": 23,
    "loc": {
      "start": {
        "line": 1,
        "column": 0
      },
      "end": {
        "line": 4,
        "column": 0
      }
    },
    "sourceType": "module",
    "interpreter": null,
    "body": [
      {
        "type": "ExpressionStatement",
        "start": 1,
        "end": 21,
        "loc": {
          "start": {
            "line": 2,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 20
          }
        },
        "expression": {
          "type": "CallExpression",
          "start": 1,
          "end": 20,
          "loc": {
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 2,
              "column": 19
            }
          },
          "callee": {
            "type": "MemberExpression",
            "start": 1,
            "end": 12,
            "loc": {
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 2,
                "column": 11
              }
            },
            "object": {
              "type": "Identifier",
              "start": 1,
              "end": 8,
              "loc": {
                "start": {
                  "line": 2,
                  "column": 0
                },
                "end": {
                  "line": 2,
                  "column": 7
                },
                "identifierName": "console"
              },
              "name": "console"
            },
            "property": {
              "type": "Identifier",
              "start": 9,
              "end": 12,
              "loc": {
                "start": {
                  "line": 2,
                  "column": 8
                },
                "end": {
                  "line": 2,
                  "column": 11
                },
                "identifierName": "log"
              },
              "name": "log"
            },
            "computed": false
          },
          "arguments": [
            {
              "type": "StringLiteral",
              "start": 13,
              "end": 19,
              "loc": {
                "start": {
                  "line": 2,
                  "column": 12
                },
                "end": {
                  "line": 2,
                  "column": 18
                }
              },
              "extra": {
                "rawValue": "Like",
                "raw": "'Like'"
              },
              "value": "Like"
            }
          ]
        }
      }
    ],
    "directives": []
  },
  "comments": []
};