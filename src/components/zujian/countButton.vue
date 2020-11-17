<template>
  <div id="firstTemplate">
    <p>{{msg}}</p>
    <button v-on:click="count++">点击了{{count}}</button>
  </div>
</template>

<script>
export default {
  name: 'study_template',
  props: ['msg'],
  data () {
    return {
      count: 0
    }
  }
}
</script>
