<template>
  <q-layout>
    <div class="home">
      <BlogPost :post ="welcomeScreen"/>
      <BlogPost :post="post" v-for="(post, index) in sampleBlogPosts" :key="index"/>
    </div>
  </q-layout>
</template>

<script>
import BlogPost from 'src/components/BlogPost.vue'
export default {
  components: { BlogPost },
  data () {
    return {
      welcomeScreen: {
        title: "Welcome to BusyMonk",
        blogPost: "Find your favourite travel blogs here!!",
        welcomeScreen: true,
        photos: "coding"

      },
      sampleBlogPosts: [
        {
          title: "Blog No 1",
          blogContent: "This is an example!",
          blogCoverPhoto: "beautiful-stories"
        },
        {
          title: "Blog No 2",
          blogContent: "This is another example!",
          blogCoverPhoto: "designed-for-everyone"
        },
      ]
        
    }
  }
}
</script>
