<!-- task page  -->
<template>
    <div class="container col-12" style="padding: 0">
        <h1 style="color: black; margin-top: 20px" class="blogs text-center">RIDES</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col-2">pickup</th>
                    <th scope="col-2">destination</th>
                    <th scope="col-2">Date</th>
                    <th scope="col-2">Time</th>
                    <th scope="col-2">User</th>
                    

                </tr>
            </thead>
            <tbody>
                <tr v-for="ride in rideindex" :key="ride.id">
                    <td>{{ ride.pickup }}</td>
                    <td>{{ ride.destination}}</td>
                    <td>{{ ride.date }}</td>

                    <td>{{ ride.time}}</td>
                    <td>{{ ride.user }}</td>
                  
                </tr>
            </tbody>
        </table>
    </div>
</template>
  

<script>
// import Swal from 'sweetalert2';


export default {
    name: 'rideView',
    data() {
        return {
           rideindex: [],


        };
    },
    mounted() {
        this.fetchData();
        setInterval(() => {
            this.fetchData();
        }, 2000);
    },

    methods: {
        fetchData() {


            fetch(`http://localhost:3000/ridedetails`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.rideindex = data;
                });
        },

       
    },
    
};
</script>
    
<style scoped>
.cards {

    background-color: rgb(17, 16, 16);
    margin-left: -50px;
    padding-left: 23px;
    width: 565px;
    color: white;
    margin-top: 50px;
    height: 100px;
    display: inline-flex;
    box-shadow: 1px 2px 4px rgb(165, 162, 162);


}


.blogs {
    color: black;
    font-weight: 700;
    font-family: logo;
}

#update {
    background-color: black;
    color: white;
    margin-top: 40px;
}
</style>