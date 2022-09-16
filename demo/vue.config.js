const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      "/lejuAdmin":{
        target:'http://leju.bufan.cloud',
        changeorigin:true
      }
    },
    proxy:{
      "/admin":{
        target:'http://leju.bufan.cloud',
        changeorigin:true
      }
    }
  }
})
