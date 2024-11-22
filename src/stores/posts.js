import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts-store', {
  // Data
  state() {
    return {
      posts: [],
      loading: true,
    }
  },

  // computed
  getters: {
    sorted() {
      return this.posts.sort((a, b) => new Date(b.created_on) - new Date(a.created_on))
    },
    // sorted: (state) => state.posts.sort((a, b) => new Date(b.created_on) - new Date(a.created_on)),
    saved: (state) =>
      state.posts
        .filter((p) => p.is_saved)
        .sort((a, b) => new Date(b.created_on) - new Date(a.created_on)),
  },

  //   methods
  actions: {
    getPosts() {
      fetch(`http://localhost:3000/posts`)
        .then((res) => res.json())
        .then((data) => {
          this.posts = data
          this.loading = false
        })
    },
    addPost(post) {
      const newPost = {
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        author: 'Bekhzod Rasulov',
        created_on: new Date().toLocaleDateString(),
        is_saved: false,
      }
      this.posts.push(newPost)

      fetch(`http://localhost:3000/posts`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newPost),
      }).catch((err) => console.log(err))
    },

    deletePost(id) {
      this.posts = this.posts.filter((p) => p.id !== id)
      console.log(id)
      fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE',
      }).catch((err) => console.log(err))
    },

    savePost(id) {
      const post = this.posts.find((p) => p.id === id)
      post.is_saved = !post.is_saved

      fetch(`http://localhost:3000/posts`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ is_saved: post.is_saved }),
      }).catch((err) => console.log(err))
    },
  },
})
