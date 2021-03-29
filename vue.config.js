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
                // Root
                '@root' : path.resolve(__dirname,'/'),
                // Views
                '@v-includes' : path.resolve(__dirname,'src/views/Includes/'),
                // Components
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
                '@tabs' : path.resolve(__dirname,'src/components/Navigation/Tabs/'),
                '@verticalNavigation' : path.resolve(__dirname,'src/components/Navigation/VerticalNavigation/'),
                '@sidebarNavigation' : path.resolve(__dirname,'src/components/Navigation/SidebarNavigation/'),
                '@breadcrumbs' : path.resolve(__dirname,'src/components/Navigation/Breadcrumbs/'),
                '@steps' : path.resolve(__dirname,'src/components/Navigation/Steps/'),
                // Feedback
                '@alerts' : path.resolve(__dirname,'src/components/Feedback/Alerts/'),
                // Forms
                '@formLayouts' : path.resolve(__dirname,'src/components/Forms/FormLayouts/'),
                '@selectMenus' : path.resolve(__dirname,'src/components/Forms/SelectMenus/'),
                '@signInForms' : path.resolve(__dirname,'src/components/Forms/SignInForms/'),
                '@radioGroups' : path.resolve(__dirname,'src/components/Forms/RadioGroups/'),
                '@toggles' : path.resolve(__dirname,'src/components/Forms/Toggles/'),
                '@actionPanels' : path.resolve(__dirname,'src/components/Forms/ActionPanels/'),
                // Lists
                '@tables' : path.resolve(__dirname,'src/components/Lists/Tables/'),
                '@stackedLists' : path.resolve(__dirname,'src/components/Lists/StackedLists/'),
            }
        }
    },
}