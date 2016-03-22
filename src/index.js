import compose from 'koa-compose'

export default function(...args){
    let plugins = []

    if(args.length === 0){
        return noop
    }

    for(let item of args){
        plugins.push(_interopRequireDefault(require(`koa-robots-plugin-${item}`)).default())
    }

    return compose(plugins)
}

function _interopRequireDefault(obj){
    return obj && obj.__esModule ? obj : {default: obj}
}

function *noop(next){
    yield next
}
