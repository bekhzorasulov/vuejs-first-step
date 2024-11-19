<!-- <script>
import { ref, reactive } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const myClass = 'my-class'
    return { count, myClass }
  },
}
const state = reactive({
  count: 5,
})
console.log(count.value)
</script>

<template>
  We can use @ instead v-on:
  <button :class="false && myClass" @click="count++">Number is {{ count }}</button>
</template>

<style>
.my-class {
  color: blue;
}
</style> -->

<script setup>
import PostItem from '@/components/PostItem.vue'
import MyWrapper from '@/components/MyWrapper.vue'
import { usePostsStore } from '@/stores/posts'

const postStore = usePostsStore()
</script>

<template>
  <div v-for="post in postStore.posts" :key="post.id">
    <MyWrapper>
      <PostItem :post="post" />
    </MyWrapper>
  </div>
</template>
