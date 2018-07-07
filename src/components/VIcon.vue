<!-- <template lang="html">
  <div class="v-icon" v-html="iconHtml">
  </div>
</template>

<script>
import { library, icon } from "@fortawesome/fontawesome-svg-core";

export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    iconHtml() {
      return icon(this.faIcon).html[0];
    },
    faIcon() {
      const faIcon = require(`@fortawesome/free-solid-svg-icons/${this.icon}`);
      console.log(faIcon);
      return faIcon[this.icon];
    }
  }
};
</script>

<style lang="css">
</style> -->