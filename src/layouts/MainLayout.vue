<template>

<header>
  <nav class="container">
        <div class="branding">
          <router-link class="header" to="/home">BusyMonk</router-link>
           <div class="nav-links">
             <ul v-if="!mobile">
                <router-link class="link" to="/home" :style="$route.path.includes('home') ? 'color:#1eb8b8' : ''" >Home</router-link>
                <router-link class="link" to="/blogs" :style="$route.path.includes('blogs') ? 'color:#1eb8b8' : ''">Blogs</router-link>
                <router-link class="link" to="/">Create Post</router-link>
                <router-link class="link" to="/login" :style="$route.path.includes('login') || $route.path.includes('register') ? 'color:#1eb8b8' : ''">Login/Register</router-link>
             </ul>
             
           </div>
           <q-icon name="menu" class="menu-icon" style="font-size: 2em;" v-if="mobile" @click="toggleMobileNav"/>
        </div>
    </nav>
    
    <transition name="mobile-nav" @click="toggleMobileNav"> 
              <ul v-if="mobileNav" class="mobile-nav">
                <router-link class="link" to="/home" :style="$route.path.includes('home') ? 'color:#1eb8b8' : ''" >Home</router-link>
                <router-link class="link" to="/blogs" :style="$route.path.includes('blogs') ? 'color:#1eb8b8' : ''">Blogs</router-link>
                <router-link class="link" to="/">Create Post</router-link>
                <router-link class="link" to="/login" :style="$route.path.includes('login') || $route.path.includes('register') ? 'color:#1eb8b8' : ''">Login/Register</router-link>
             </ul>
    </transition>
  </header>
  <router-view></router-view>
  <footer v-if="$route.path.includes('home')">
    <div class="footer-container">
       <h4>BusyMonk</h4>
     <ul>
      <router-link class="link" to="/home" :style="$route.path.includes('home') ? 'color:#1eb8b8' : ''" >Home</router-link>
      <router-link class="link" to="/blogs" :style="$route.path.includes('blogs') ? 'color:#1eb8b8' : ''">Blogs</router-link>
      <router-link class="link" to="/login" :style="$route.path.includes('login') || $route.path.includes('register') ? 'color:#1eb8b8' : ''">Login/Register</router-link>
    </ul>
    </div>

  </footer>

</template>
<script>
export default {
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth:null,
    }
  },
  created() {
    window.addEventListener('resize', this.checkWindowWidth);
    this.checkWindowWidth()
  },
  methods: {
    checkWindowWidth() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <=750) {
        this.mobile = true
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    }
  }
}
</script>

<style lang="scss" scoped>

header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;
}


  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;
    &:hover {
      color: #1eb8b8;
    }
  }

  nav {
    padding: 25px 0;
  }

  .branding {
      display: flex;
      align-items: center;
  }

       .header {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;
      }
      .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: flex-end;
      justify-content: flex-end;
      

      }

  .mobile-nav {
      padding: 20px ;
      width: 70%;
      max-width: 250px;
      display:flex;
      flex-direction: column;
      position: fixed;
      height: 100%;
      background-color: #303030;
      top: 0;
      left:0;
      z-index: 100;

      .link {
        padding: 15px 0;
        color: #ffff;
      }
    }


  .mobile-nav-leave-active,
  .mobile-nav-enter-active{
    transition: all 1s ease;
  }

  .mobile-nav-enter-from {
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to {
    transform: translateX(0px);
  }
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }


  .footer-container {
 
  display:flex;
  color:white;
  background-color: #303030;

  ul {
    display: flex;
    flex-direction: column;
    padding: 50px 25px
  }

  .link {
    color:white;
  }

  h4 {
    padding: 50px 20px;
  }


}
      
</style>