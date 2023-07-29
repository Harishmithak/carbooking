<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">UBER</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <li class="nav-item">
          <router-link to="/"><a class="nav-link active" aria-current="page" href="#">Home</a> </router-link>
        </li>

        <li class="nav-item">
            <router-link to="/login"><a class="nav-link" href="#">login</a></router-link>
        </li>
        <li class="nav-item">
            <router-link to="/dlogin"><a class="nav-link" href="#"> DRIVER login</a></router-link>
        </li>
        <div v-if="isLoggedIn && userType ==='driver'">
                <router-link class="nav-link" id="admin" to="/driver">Driver</router-link>
              </div>
        <li class="nav-item">
          
        <router-link to="/signup"><a class="nav-link" href="#">signup</a></router-link>
        </li>
        <div v-if="isLoggedIn && userName === 'admin'">
                <router-link class="nav-link" id="admin" to="/admin">ADMIN</router-link>
              </div>
         
      </ul>
    </div>
  </div>
</nav>
    </template>
    <script>
    import { mapActions } from 'vuex';
    import { mapState } from 'vuex';
    import { mapGetters } from 'vuex';
    export default {
      computed: {
    
        ...mapState(['isLoggedIn', 'userType', 'user']),
        ...mapGetters(['userName']),
      },
      methods: {
    
        ...mapActions(['logout']),
        handleLogout() {
    
          this.logout()
            .then(() => {
    
              this.$router.push('/signin');
            })
            .catch(error => {
              console.error('Logout error:', error);
    
            });
        }
    
    

    
      }
    }
    </script>