const path = require('path');

module.exports = {
    css : {
        loaderOptions : {
            scss : {
                prependData : `
                    @import "@/assets/scss/variables.scss";
                `
            }
        }
    },
    configureWebpack : {
        resolve:{
            alias:{
                '@general' : path.resolve(__dirname,'src/components/General/'),
                '@avatars' : path.resolve(__dirname,'src/components/Elements/Avatars/'),
            }
        }
    },
}