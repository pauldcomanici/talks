// code
function codecamp() {
  const x = 'data';
  // comment
  console.log('member expression', x);
}

// AST
const ast = {
  "type": "File",
  "start": 0,
  "end": 95,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 5,
      "column": 1
    }
  },
  "program": {
    "type": "Program",
    "start": 0,
    "end": 95,
    "loc": {
      "start": {
        "line": 1,
        "column": 0
      },
      "end": {
        "line": 5,
        "column": 1
      }
    },
    "sourceType": "module",
    "interpreter": null,
    "body": [
      {
        "type": "FunctionDeclaration",
        "start": 0,
        "end": 95,
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 1
          }
        },
        "id": {
          "type": "Identifier",
          "start": 9,
          "end": 17,
          "loc": {
            "start": {
              "line": 1,
              "column": 9
            },
            "end": {
              "line": 1,
              "column": 17
            },
            "identifierName": "codecamp"
          },
          "name": "codecamp"
        },
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 20,
          "end": 95,
          "loc": {
            "start": {
              "line": 1,
              "column": 20
            },
            "end": {
              "line": 5,
              "column": 1
            }
          },
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 24,
              "end": 41,
              "loc": {
                "start": {
                  "line": 2,
                  "column": 2
                },
                "end": {
                  "line": 2,
                  "column": 19
                }
              },
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 30,
                  "end": 40,
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 8
                    },
                    "end": {
                      "line": 2,
                      "column": 18
                    }
                  },
                  "id": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 8
                      },
                      "end": {
                        "line": 2,
                        "column": 9
                      },
                      "identifierName": "x"
                    },
                    "name": "x"
                  },
                  "init": {
                    "type": "StringLiteral",
                    "start": 34,
                    "end": 40,
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
                      "rawValue": "data",
                      "raw": "'data'"
                    },
                    "value": "data"
                  }
                }
              ],
              "kind": "const",
              "trailingComments": [
                {
                  "type": "CommentLine",
                  "value": " comment",
                  "start": 44,
                  "end": 54,
                  "loc": {
                    "start": {
                      "line": 3,
                      "column": 2
                    },
                    "end": {
                      "line": 3,
                      "column": 12
                    }
                  }
                }
              ]
            },
            {
              "type": "ExpressionStatement",
              "start": 57,
              "end": 93,
              "loc": {
                "start": {
                  "line": 4,
                  "column": 2
                },
                "end": {
                  "line": 4,
                  "column": 38
                }
              },
              "expression": {
                "type": "CallExpression",
                "start": 57,
                "end": 92,
                "loc": {
                  "start": {
                    "line": 4,
                    "column": 2
                  },
                  "end": {
                    "line": 4,
                    "column": 37
                  }
                },
                "callee": {
                  "type": "MemberExpression",
                  "start": 57,
                  "end": 68,
                  "loc": {
                    "start": {
                      "line": 4,
                      "column": 2
                    },
                    "end": {
                      "line": 4,
                      "column": 13
                    }
                  },
                  "object": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 64,
                    "loc": {
                      "start": {
                        "line": 4,
                        "column": 2
                      },
                      "end": {
                        "line": 4,
                        "column": 9
                      },
                      "identifierName": "console"
                    },
                    "name": "console"
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 68,
                    "loc": {
                      "start": {
                        "line": 4,
                        "column": 10
                      },
                      "end": {
                        "line": 4,
                        "column": 13
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
                    "start": 69,
                    "end": 88,
                    "loc": {
                      "start": {
                        "line": 4,
                        "column": 14
                      },
                      "end": {
                        "line": 4,
                        "column": 33
                      }
                    },
                    "extra": {
                      "rawValue": "member expression",
                      "raw": "'member expression'"
                    },
                    "value": "member expression"
                  },
                  {
                    "type": "Identifier",
                    "start": 90,
                    "end": 91,
                    "loc": {
                      "start": {
                        "line": 4,
                        "column": 35
                      },
                      "end": {
                        "line": 4,
                        "column": 36
                      },
                      "identifierName": "x"
                    },
                    "name": "x"
                  }
                ]
              },
              "leadingComments": [
                {
                  "type": "CommentLine",
                  "value": " comment",
                  "start": 44,
                  "end": 54,
                  "loc": {
                    "start": {
                      "line": 3,
                      "column": 2
                    },
                    "end": {
                      "line": 3,
                      "column": 12
                    }
                  }
                }
              ]
            }
          ],
          "directives": []
        }
      }
    ],
    "directives": []
  },
  "comments": [
    {
      "type": "CommentLine",
      "value": " comment",
      "start": 44,
      "end": 54,
      "loc": {
        "start": {
          "line": 3,
          "column": 2
        },
        "end": {
          "line": 3,
          "column": 12
        }
      }
    }
  ]
};
