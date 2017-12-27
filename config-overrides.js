/**
 * Created by lorne on 2017/12/26
 * Function:
 * Desc:
 */
const {injectBabelPlugin} = require('react-app-rewired');
module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', {libraryName: 'antd-mobile', style: 'css'}], config);
    return config;
};