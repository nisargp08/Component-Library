// This file is used for getting the raw code of the vue component files
const ctx = require.context("../src/components", true, /\.vue$/);
const IterableCtx = ctx.keys().map(ctx);
// To get source code
const ctxraw = require.context(
  "!!raw-loader!../src/components",
  true,
  /\.vue$/
);
const components_source = ctxraw.keys().map(ctxraw);
// Object array to store only name and source code
const componentList = [];
// Looping through ctx to get name
IterableCtx.forEach((element, index) => {
  if (element.default) {
    // Commenting as '__file' property is not available on production build
    // let filePath = element.default.__file.split("/");
    // let fileName = filePath[filePath.length - 1].split(".")[0];
    let fileScopeId = element.default._scopeId;
    // Push component name in the new array
    componentList.push({
      scopeId: fileScopeId,
      source: components_source[index].default,
    });
  }
});

// Function returns the component details by scopeId
function getComponentByScopeId(id) {
  for (let component of componentList) {
    if (component.scopeId == id) {
      return component;
    }
  }
}

export default {
  getComponentByScopeId,
};
