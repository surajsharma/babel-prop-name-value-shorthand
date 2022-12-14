module.exports=function (babel) {
    const { types: t } = babel;
    return {
      name: "babel-plugin-prop-value-shorthand", 
      visitor: {
        JSXElement(path, state) {
          if (path.node.openingElement.attributes.length) {
            for (let attr in path.node.openingElement.attributes) {
              if (path.node.openingElement.attributes[attr].value == null &&
                  path.node.openingElement.attributes[attr].name) {
                path.node.openingElement.attributes[attr].value = {
                  type: "JSXExpressionContainer",
                  expression: {
                    type: "Identifier",
                    name: path.node.openingElement.attributes[attr].name.name
                  }
                };
              }
            }
          }
        }
      }
    };
  }
