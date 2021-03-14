// This file is used for getting the raw code of the vue component files
const ctx = require.context('../src/components', true, /\.vue$/);
const IterableCtx = ctx.keys().map(ctx);
// To get source code
const ctxraw = require.context('!!raw-loader!../src/components', true,/\.vue$/);
const components_source = ctxraw.keys().map(ctxraw);
// Object array to store only name and source code
const componentList = [];

// Looping through ctx to get name
IterableCtx.forEach(element => {
    if(element.default){
        let filePath = element.default.__file.split("/");
        let fileName = filePath[filePath.length - 1].split(".")[0];
        // Push component name in the new array
        componentList.push({name : fileName});
    }
});
// Push source code of all components
for(let i = 0 ; i < componentList.length ; i++){
    componentList[i].source = components_source[i].default;
}

// Function returns the component details by name
function getComponentByName(name){
    for(let component of componentList){
        if(component.name == name){
            return component;
        }
    }
}

export default {
    getComponentByName
}