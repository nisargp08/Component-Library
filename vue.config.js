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
                // Elements
                '@avatars' : path.resolve(__dirname,'src/components/Elements/Avatars/'),
                '@dropdowns' : path.resolve(__dirname,'src/components/Elements/Dropdowns/'),
                '@badges' : path.resolve(__dirname,'src/components/Elements/Badges/'),
                '@buttons' : path.resolve(__dirname,'src/components/Elements/Buttons/'),
                // Overlays
                '@modals' : path.resolve(__dirname,'src/components/Overlays/Modals/'),
                '@notifications' : path.resolve(__dirname,'src/components/Overlays/Notifications/'),
                '@slideOvers' : path.resolve(__dirname,'src/components/Overlays/SlideOvers/'),
                // Navigation
                '@navbars' : path.resolve(__dirname,'src/components/Navigation/Navbars/'),
                '@pagination' : path.resolve(__dirname,'src/components/Navigation/Pagination/'),
            }
        }
    },
}