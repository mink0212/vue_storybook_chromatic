<template>
    <v-btn :class="getStyle()" depressed rounded :outlined="outlined" :size=size :color="color" :dark="dark">{{text}}</v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SimpleButton extends Vue {
    @Prop({ type: String, default: ""}) text!: string
    @Prop({ type: String, default: "primary"}) color!: string
    @Prop({ type: String, default: "primary"}) type!: string
    @Prop({ type: String, default: "" }) size!: string
    @Prop({ type: Boolean }) bold!: boolean

    outlined = false
    dark = false

    created() {
        switch(this.type){
            case "primary":
                this.outlined = false
                this.dark = true
                break
            case "inversion":
                this.outlined = true
                this.dark = false
                break
            case "emphasize":
                this.outlined = false
                this.dark = false
                this.color="primary"
        }
    }
    getStyle() {
        let style = "my-button"
        switch(this.type){
            case "inversion":
                style += " inversion"
                break
            case "emphasize":
                style += " emphasize"
                break
        }

        style += " bgcolor fontcolor"

        style += this.bold ? " bold": ""
        return style

    }
}
</script>
