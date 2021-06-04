import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import colors from 'vuetify/es5/util/colors'
import '../src/css/style.css'

const vuetifyOptions = {}

Vue.use(Vuetify, {
  theme: {
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  }
})

export const parameters = {
}

export const decorators = [
  () => {
    return (
    { vuetify: new Vuetify(vuetifyOptions), template: '<v-app><story/></v-app>' }
  )}
]