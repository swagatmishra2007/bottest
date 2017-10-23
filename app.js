const path = require('path');

const Config = {
    root: path.join(__dirname, '.'),
    url: 'http://localhost:3979/',

    /**
     * {
     *   appId:'{{AppId}}',
     *   key:'{{Key}}',
     *   apiUrl:'{{ApiUrl}}',
     *   webApiUrl:'{{WebApiUrl}}',
     *   version:'{{Version}}'
     * }
     * 
     */

    luis: {"webApiUrl":"https://cognitivewuppe.azure-api.net/luis/webapi/v2.0","apiUrl":"https://cognitivewuppe.azure-api.net/luis/api/v2.0","version":"0.1","appId":"94a05322-409b-4e28-9c73-a8f083e23d6b","key":"3b2bdb70007f48699703c8a1815cf509"},

    
    connector: {
        botId: "functiondev-swagatmlocal",
        appId : '', // Bot connector ID goes here
        appPassword : '' // Bot app password
    },

    kudu: { route: '/scm',
        path: path.join(__dirname, '.')
    }
};

//const designer = require('bot-framework-designer');
//designer.listen(Config);

const decompress = require('decompress');
decompress('bot.zip','bot1').then(files => console.log('done'));