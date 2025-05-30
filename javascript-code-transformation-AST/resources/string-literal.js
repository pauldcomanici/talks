export default function (babel) {
  const { types: t } = babel;
  
  return {
    name: "ast-transform", // not required
    visitor: {
      CallExpression(path) {
        path.node.arguments
        const x = t.StringLiteral('CodeCamp');
        path.node.arguments.push(x);
      }
    }
  };
}
