import compose from 'koa-compose'

export default function(...args){
    let plugins = []

    for(let item of args){
        plugins.push(_interopRequireDefault(require(`koa-robots-plugin-${item}`)).default())
    }
    
    return compose(plugins)
}

function _interopRequireDefault(obj){
    return obj && obj.__esModule ? obj : {default: obj}
}
