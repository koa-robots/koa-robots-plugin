import fs from 'fs'
import koa from 'koa'
import mkdirp from 'mkdirp'
import plugin from '../dist'
import request from 'supertest'

describe('plugin', () => {
    it('normal', (done) => {
        var app = koa()
        var plugins = ['test1', 'test2']

        mkdirp.sync('node_modules/koa-robots-plugin-test1')
        mkdirp.sync('node_modules/koa-robots-plugin-test2')
        fs.writeFileSync('node_modules/koa-robots-plugin-test1/index.js', fs.readFileSync('test/test1.js'))
        fs.writeFileSync('node_modules/koa-robots-plugin-test2/index.js', fs.readFileSync('test/test2.js'))

        app.use(function *(next){
            this.body = '1'
            yield next
        })
        app.use(plugin(...plugins))
        app.use(function *(next){
            this.body += '4'
            yield next
        })

        request(app.listen())
            .get('/')
            .expect('1234', done)
    })
})
