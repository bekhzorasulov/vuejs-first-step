import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts-store', {
  // Data
  state() {
    return {
      posts: [
        {
          id: 1,
          title: 'This great book!',
          body: 'sdgsdfkljskdjf sdkfjskdjfh sdkjfskjdfh skdjfksjdhf ksjdfkjhsdjkf',
          author: 'Jon Doe',
          created_on: '11/06/2023',
          is_saved: false,
        },
        {
          id: 2,
          title: 'This great book!',
          body: 'sdgsdfkljskdjf sdkfjskdjfh sdkjfskjdfh skdjfksjdhf ksjdfkjhsdjkf',
          author: 'Jon Doe',
          created_on: '15/04/2023',
          is_saved: false,
        },
        {
          id: 3,
          title: 'This great book!',
          body: 'sdgsdfkljskdjf sdkfjskdjfh sdkjfskjdfh skdjfksjdhf ksjdfkjhsdjkf',
          author: 'Jon Doe',
          created_on: '11/06/2024',
          is_saved: false,
        },
        {
          id: 4,
          title: 'This great book!',
          body: 'sdgsdfkljskdjf sdkfjskdjfh sdkjfskjdfh skdjfksjdhf ksjdfkjhsdjkf',
          author: 'Jon Doe',
          created_on: '25/08/2024',
          is_saved: false,
        },
        {
          id: 5,
          title: 'This great book!',
          body: 'sdgsdfkljskdjf sdkfjskdjfh sdkjfskjdfh skdjfksjdhf ksjdfkjhsdjkf',
          author: 'Jon Doe',
          created_on: '30/06/2022',
          is_saved: false,
        },
      ],
    }
  },

  //   methods
  actions: {
    addPost(post) {
      this.posts.push({
        id: this.post.length + 1,
        title: post.title,
        body: post.body,
        author: 'Bekhzod Rasulov',
        created_on: new Date().toLocaleDateString(),
        is_saved: false,
      })
    },
  },
})
