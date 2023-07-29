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
                    <th scope="col-2">ACCEPT RIDES</th>
  

                </tr>
            </thead>
            <tbody>
                <tr v-for="ride in rideindex" :key="ride.id">
                    <td>{{ ride.pickup }}</td>
                    <td>{{ ride.destination}}</td>
                    <td>{{ ride.date }}</td>

                    <td>{{ ride.time}}</td>
                    <td>{{ ride.user }}</td>
                    <!-- <td>
        <button @click="acceptRide(ride.id)">Accept</button>
        <button @click="declineRide(ride.id)">Decline</button>
    </td> -->
    <td>
                        <button @click="acceptRide(ride.id)" :disabled="ride.status === 'accepted'">
                            Accept
                        </button>
                        <!-- <button v-if="ride.status !== 'accepted'" @click="declineRide(ride.id)">
                            Decline
                        </button> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  

<!-- <script>



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
        acceptRide(rideId) {
        const rideToUpdate = this.rideindex.find((ride) => ride.id === rideId);
        if (rideToUpdate) {
            
            rideToUpdate.status = 'accepted';

            
            fetch(`http://localhost:3000/ridedetails/${rideId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: 'accepted' }),
            })
            .then((response) => response.json())
           
        }
    },
    declineRide(rideId) {
       
        this.rideindex = this.rideindex.filter((ride) => ride.id !== rideId);

        // Delete the ride from the backend (JSON data)
        fetch(`http://localhost:3000/ridedetails/${rideId}`, {
            method: 'DELETE',
        })
        .then((response) => response.json())
 
    },
       
    },
    
};
</script> -->

<script>
// import { useStore } from 'vuex';
import { mapGetters } from 'vuex'; 
export default {
    name: 'rideView',
    data() {
        return {
            originalRideData: [],
            rideindex: [],
           
        };
    },
    computed: {
  
    ...mapGetters(['cnum']),
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
                  
                    this.originalRideData = JSON.parse(JSON.stringify(data));
                    this.rideindex = data;
                });
        },
        // acceptRide(rideId) {
        //     const rideToUpdate = this.rideindex.find((ride) => ride.id === rideId);
        //     if (rideToUpdate) {
                
        //         Object.assign(rideToUpdate, { status: 'accepted' });

              
        //         fetch(`http://localhost:3000/ridedetails/${rideId}`, {
        //             method: 'PATCH', 
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({ status: 'accepted' }),
        //         })
        //         .then((response) => response.json());
        //     }
        // },
        acceptRide(rideId) {
            const loggedInUserName = this.$store.getters.userName; 
 
            // Accessing the userName getter from the Vuex store
            const rideToUpdate = this.rideindex.find((ride) => ride.id === rideId);
            if (rideToUpdate) {
                rideToUpdate.fname = loggedInUserName; // Update the fname field with the logged-in user's name
                rideToUpdate.cnum = this.cnum; 
                fetch(`http://localhost:3000/ridedetails/${rideId}`, {
                    method: 'PATCH', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ status: 'accepted', fname: loggedInUserName, cnum: this.cnum}),
                })
                .then((response) => response.json());
            }
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