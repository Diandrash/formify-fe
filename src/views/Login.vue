<template>
    <div>
  
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        rounded="lg"
        width="30rem"
      >
        <div class="text-h4 text-blue-darken-4 font-weight-bold">Please Login</div>
        
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between mt-8">
          Email
        </div>
        <v-text-field
          density="compact"
          placeholder="Email address"
          variant="outlined"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
        </div>
  
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
  

  
        <v-btn
          class="mb-8 mt-5"
          color="blue"
          size="large"
          variant="tonal"
          
          block
        >
          Log In
        </v-btn>
      </v-card>
    </div>
  </template>
  <script>
    export default {
      data: () => ({
        visible: false,
      }),
    }
  </script>