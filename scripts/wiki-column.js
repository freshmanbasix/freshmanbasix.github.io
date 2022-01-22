// Copyright Santiago García da Rosa 2019, redistributed under MIT license
// Original available at https://github.com/SantiagoGdaR/vanilla-spa
//
// Modified by djacob@hjallesoft.com, 2021

'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('welcome', 'welcome.html', true),
            new Route('encryption', 'encryption.html'),
            new Route('servers', 'servers.html'),
            new Route('web', 'web.html'),
            new Route('email', 'email.html'),
            new Route('terminals', 'terminals.html'),
            new Route('linux', 'linux.html'),
            new Route('git', 'git.html'),
            new Route('editors', 'editors.html'),
            new Route('electronics', 'electronics.html'),
            new Route('radio', 'radio.html'),
            new Route('probability-statistics', 'probability-statistics.html'),
            new Route('contribute', 'contribute.html')
        ], 'wiki-column');
    }
    init();
}());
