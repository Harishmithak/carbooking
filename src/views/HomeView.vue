<template>
  <div class="row">
    <div class="col-6"><img src="../assets/home.jpg" alt="home" class="about "></div>

    <div class="col-6 abt">

      <p class="h1">
        Coimbatore: Get a ride. Travel. Explore.</p>
      <p class="h2">
        Planning a trip is easy with Uber. Compare ways to get around, and see what’s happening near you.
Headed somewhere else? See all cities where Uber is available.
      </p>
      <router-link to="/ride">
      <button class="btn n1">
      Request a ride
      </button></router-link>
     
    </div>
  </div>
</template>

<style>
.abt {
  margin-top: 100px;
  
  margin-left: -30px;
  color: rgb(15, 15, 15);

  padding: 30px;

}

.about {
  margin-top: 100px;
  margin-left: 40px;
  height:300px;

}
body{
  overflow-x: hidden;
}
.h1{
  font-size: 60px;
  font-weight: bolder;
}
.n1{
  color: white;
  background-color: black;
}
.h2{
  font-size: 30px;
}
</style>

