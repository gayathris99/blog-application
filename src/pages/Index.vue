<template>
  <q-layout>
    <div class="home">
      <BlogPost :post ="welcomeScreen"/>
      <BlogPost :post="post" v-for="(post, index) in sampleBlogPosts" :key="index"/>
      <div class="blog-card-wrap">
        <div class="container">
          <h3>View More Recent Blogs</h3>
          <div class="blog-cards">
              <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
          </div>
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h4>
          NEVER MISS AN UPDATE.
          <br>
          REGISTER AT BUSYMONK FOR FREE
        </h4>
        <router-link class="button" to="/register">Register Here</router-link>
      </div>
    </div>
  </q-layout>
</template>

<script>
import BlogPost from 'src/components/BlogPost.vue'
import BlogCard from 'src/components/BlogCard.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { BlogPost, BlogCard },
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
      ],
      sampleBlogCards: []
        
    }
  },
  methods :{
    // ...mapActions('blogs', ['exampleAction']),
    
  },

  created() {
    this.sampleBlogCards = this.blogCards
  },
  computed: {
    ...mapGetters('blogs', ['blogCards']),
    
  }

}
</script>

<style lang="scss" scoped>
  .blog-card-wrap {
    h3 {
      font-weight: 300;
      font-size: 20px;
      margin-bottom: 32px;
    }
  }

  .updates {
    .container {
      padding: 100px 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      

      @media(min-width: 800px) {
        flex-direction: row;
        padding: 125px 25px;
      }

      h4 {
        font-weight: 300;
        text-align: center;
      }

      .button {
        display: flex;
        position: relative;
        cursor: pointer;
        background-color: #303030;
        color: white;
        border-radius: 20px;
        text-decoration: none;
        padding: 15px 10px;
        margin-top: 25px;

      }
    }
  }
</style>