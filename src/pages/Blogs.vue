<template>
    <div class="blog-card-wrap">
        <h6>Checkout our blogs here!</h6>
        <div class="toggle-edit">
                 <q-toggle
                    v-model="editToggle"
                    color="light-green"
                    left-label
                    label="Edit/Delete Blog"
                />
            </div>
        
        <div class="blog-cards container">
            
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" :editPost="this.editToggle"/>
        </div>
    </div>
</template>

<script>
import BlogCard from 'src/components/BlogCard.vue'
import { mapGetters } from 'vuex'
export default {
  
    name: "Blogs",
    components: { BlogCard },
    data() {
        return {
            editToggle: false,
            sampleBlogCards: []
        }
    },
     computed: {
    ...mapGetters('blogs', ['blogCards']), 
    },
    created() {
        this.sampleBlogCards = this.blogCards
    }

}
</script>

<style lang="scss" scoped>
    .blog-card-wrap{
       padding: 30px;
    }
    .toggle-edit {
        display: flex;
        justify-content: flex-end;
        padding-bottom: 20px;
    }
</style>