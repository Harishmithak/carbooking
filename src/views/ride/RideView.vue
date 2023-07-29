
 
   <template>
    <div>
      <div v-if="shouldDisplayRideDetails">
      <h1>Accepted Ride Details</h1>
      <p>Accepted By: {{ currentUserRide.fname }}</p>
      <p>Car Number: {{ currentUserRide.cnum }}</p>
    </div>
    <div  v-else>
      <h1>Get a Ride</h1>
      <form @submit.prevent="submitForm">
        <label for="pickup">Pickup Location:</label>
        <InputText
          type="text"
          v-model="pickup"
        />
  
        <label for="destination">Destination:</label>
        <InputText type="text" v-model="destination" required />
  
        <label for="date">Date:</label>
        <Calendar id="icon" v-model="date" :showIcon="true" :dateFormat="dateFormatOptions" required/>
       
  
        <label for="time12">Time:</label>
        <Calendar id="time12" v-model="time" :timeOnly="true" :timeFormat="timeFormatOptions" required/>
  
        <Button label="Request Ride" type="submit"> </Button>

      </form>
    </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { ref, reactive, onMounted, computed  } from 'vue';
  import axios from 'axios';
  import Swal from 'sweetalert2';
  import Button from 'primevue/button';
  import InputText from 'primevue/inputtext';
  import Calendar from 'primevue/calendar';
  
  const store = useStore();
  const pickup = ref('');
  const destination = ref('');
  const date = ref('');
  const time = ref('');
  
  const dateFormatOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };
  
  const timeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };


  const rideDetails = reactive({ ridedetails: [] });

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/ridedetails');
    rideDetails.ridedetails = response.data;
  } catch (error) {
    console.error('Error fetching ride details:', error);
  }
});

const currentUser = computed(() => store.state.user.fname);

const shouldDisplayRideDetails = computed(() => {
  return rideDetails.ridedetails.some(
    (ride) => ride.user === currentUser.value && ride.status === 'accepted'
  );
});

const currentUserRide = computed(() => {
  return rideDetails.ridedetails.find(
    (ride) => ride.user === currentUser.value && ride.status === 'accepted'
  );
});


  const submitForm = () => {
    console.log('Form submitted!');
    console.log(pickup.value, destination.value, date.value, time.value);
  
    const currentUser = store.state.user.fname;
    const formattedDate = new Date(date.value).toLocaleDateString('en-GB', dateFormatOptions);
    const formattedTime = new Date(time.value).toLocaleTimeString('en-US', timeFormatOptions);
    const rideDetails = {
      pickup: pickup.value,
      destination: destination.value,
      date: formattedDate,
      time: formattedTime,
      user: currentUser,
      status:'',
      cnum:'',
      fname:'',
    };
  
    axios
      .post('http://localhost:3000/ridedetails', rideDetails)
      .then((response) => {
        Swal.fire('Request sent');
        console.log('Data stored successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error storing data:', error);
      });


  };
  </script>
  
  <style>
  h1 {
    text-align: center;
  }
  
  form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  label {
    display: block;
    margin-top: 10px;
  }
  
  input[type="text"],
  input[type="tel"],
  input[type="date"],
  input[type="time"] {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: black;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #dde2e7;
    color: #131212;
  }
  
  .fa-backward {
    margin-left: 80px;
    margin-top: 20px;
  }
  </style>
  