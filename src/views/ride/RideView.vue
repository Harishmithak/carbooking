<!-- 
<template>
    <div>
   
      <h1>Get a Ride</h1>
      <form @submit.prevent="submitForm">
 
        <label for="pickup">Pickup Location:</label>
        <input type="text" v-model="pickup" required>
  
        <label for="destination">Destination:</label>
        <input type="text" v-model="destination" required>

  
        <label for="date">Date:</label>
        <input type="date" v-model="date" required>
  
        <label for="time">Time:</label>
        <input type="time" v-model="time" required>
       
      
 <InputText type="text" v-model="value" /> -->
  
        <!-- <button type="submit">Request Ride</button>
     
      </form>
    </div>

  </template>
<script>
import { useStore} from 'vuex';
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';


export default {
  setup() {
    const store = useStore(); 
    const pickup = ref('');
    const destination = ref('');
    const date = ref('');
    const time = ref('');

    const submitForm = () => {
      console.log('Form submitted!');
      console.log(pickup.value, destination.value, date.value, time.value);

      const currentUser = store.state.user.fname;


      const rideDetails = {
        pickup: pickup.value,
        destination: destination.value,
        date: date.value,
        time: time.value,
        user: currentUser,
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

    return {
      pickup,
      destination,
      date,
      time,
      submitForm,
    };
  },
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
  .fa-backward{
    margin-left: 80px;
    margin-top: 20px;
  }
  </style> --> 

  <template>
    <div>
      <h1>Get a Ride</h1>
      <form @submit.prevent="submitForm">
        <label for="pickup">Pickup Location:</label>
        <InputText type="text" v-model="pickup" required/>
  
        <label for="destination">Destination:</label>
        <InputText type="text" v-model="destination" required />
  
        <label for="date">Date:</label>
     
        <Calendar id="icon" v-model="date" :showIcon="true" />
 
  
        <label for="time12">Time:</label>
        <Calendar id="time12" v-model="time" :timeOnly="true" hourFormat="12" />
      
   
        <Button label="Request Ride" type="submit"> </Button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { ref } from 'vue';
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
  
  const submitForm = () => {
    console.log('Form submitted!');
    console.log(pickup.value, destination.value, date.value, time.value);
  
    const currentUser = store.state.user.fname;
  
    const rideDetails = {
      pickup: pickup.value,
      destination: destination.value,
      date: date.value,
      time: time.value,
      user: currentUser,
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
  