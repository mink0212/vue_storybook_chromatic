<template>
  <div>
    <v-row>
      <v-col>
        axios通信内容:{{ info }}
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <simple-button type="primary" text="プライマリーボタン"/>
      </v-col>
      <v-col>
        <simple-button color="error" text="太字ボタン" bold/>
      </v-col>
      <v-col>
        <simple-button type="inversion" color="success" text="反転色付きボタン"/>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SimpleButton from '../components/Button/SimpleButton.vue'
import axiosInstance from '../utils/axios'

@Component({
  components: {
    SimpleButton
  }
})
export default class MyPage extends Vue {
  info = null
  mounted () {
    axiosInstance
      .get('http://localhost/v1/apt/test')
      .then(response => (this.info = response.data))
  }
}
</script>
