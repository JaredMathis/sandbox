
const u = require("wlj-utilities");


module.exports = test3;

function test3() {
    let result;
    u.scope(test3.name, x => {
        u.args(arguments);
        // TODO
    });
    return result;
}
