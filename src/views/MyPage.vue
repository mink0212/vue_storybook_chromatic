<template>
    <v-row>
        <v-col>
            <simple-button type="primary" text="プライマリーボタン"/>
        </v-col>
        <v-col>
            <simple-button type="inversion" color="success" text="反転色付きボタン"/>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SimpleButton from '../components/Button/SimpleButton.vue'

@Component
@Component({
  components: {
    SimpleButton
  }
})
export default class MyPage extends Vue {
}
</script>
