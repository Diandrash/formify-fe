<template>
  <Layout>
    <template #default>
      <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <div class="flex justify-between mb-4">
          <h1 class="font-semibold text-2xl">All Created Forms</h1>
          <div class="group flex gap-3">
            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-400 text-black hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-vertically-centered-modal">
              Make Response Form
            </button>

            <button type="button" class="py-2 self-center px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-focus-management-modal">
              New Form
            </button>
          </div>
          

          <div id="hs-focus-management-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
          <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto :bg-gray-800 :border-gray-700 :shadow-slate-700/[.7]">
              <div class="flex justify-between items-center py-3 px-4 border-b :border-gray-700">
                <h3 class="font-bold text-gray-800 :text-white">
                  Create New Form
                </h3>
                <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none :text-white :hover:bg-gray-700" data-hs-overlay="#hs-focus-management-modal">
                  <span class="sr-only">Close</span>
                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <form action="" method="post" @submit.prevent="createForm">
                <div class="p-4 overflow-y-auto">
                  <label for="input-label" class="block text-sm font-medium mb-2 :text-white">Form Name</label>
                  <input required v-model="formData.name" type="text" id="input-label" class="py-3 px-4 block  my-3 w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 :bg-slate-900 :border-gray-700 :text-gray-400" placeholder="Name here" autofocus>            
                  
                  <label for="input-label" class="block text-sm font-medium mb-2 :text-white">Form Slug</label>
                  <input required v-model="formData.slug" type="text" id="input-label" class="py-3 px-4 my-3  block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 :bg-slate-900 :border-gray-700 :text-gray-400" placeholder="Description Here" autofocus="">
                  
                  <label for="input-label" class="block text-sm font-medium mb-2 :text-white">Form Description</label>
                  <input v-model="formData.description" type="text" id="input-label" class="py-3 px-4 my-3  block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 :bg-slate-900 :border-gray-700 :text-gray-400" placeholder="Description Here" autofocus="">
                  
                  <label for="input-label" class="block text-sm font-medium mb-2 :text-white">Allowed Domains</label>
                  <textarea v-model="allowedDomainsInput" rows="5"></textarea>

                  
                  
                  <label for="input-label" class="block text-sm font-medium mb-2 :text-white">Limit One Response</label>
                  <input required min="0" v-model="formData.limit_one_response" type="number" id="input-label" class="py-3 my-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 :bg-slate-900 :border-gray-700 :text-gray-400" placeholder="Limit One Response" autofocus="">
                </div>
                <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t :border-gray-700">
                  <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none :bg-slate-900 :border-gray-700 :text-white :hover:bg-gray-800" data-hs-overlay="#hs-focus-management-modal">
                    Close
                  </button>
                  <button type="submit" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
          </div>
          
          <div id="hs-vertically-centered-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
            <form @click="getForm" class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
              <div class="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
                <div class="flex justify-between items-center py-3 px-4 border-b">
                  <h3 class="font-bold text-gray-800">
                    Enter Form Link
                  </h3>
                  <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-vertically-centered-modal">
                    <span class="sr-only">Close</span>
                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </div>
                <div class="p-4 overflow-y-auto">
                  <p class="text-gray-800">
                    <input required v-model="formLink" type="text" id="input-label" class="py-3 px-4 block  my-3 w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 :bg-slate-900 :border-gray-700 :text-gray-400" placeholder="http://localhost/example-form/responses" autofocus>
                  </p>
                </div>
                <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                  <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-vertically-centered-modal">
                    Close
                  </button>
                  <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                    Submit Link
                  </button>
                </div>
              </div>
            </form>
          </div>
          
        </div>
        <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200 :divide-gray-700">
                <thead>
                  <tr>
                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">No</th>
                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Link</th>
                    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 :divide-gray-700">
                  <tr v-for="(form, index) in forms" :key="form.id">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 :text-gray-200">{{ index+1 }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 :text-gray-200">{{ form.name }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 :text-gray-200">http://localhost:5173/forms/{{ form.slug }}/responses</td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium flex gap-2">
                      <button @click="redirectForm(form.slug)" type="button" class="inline-flex items-center bg-blue-200 px-5  py-1 gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none :text-blue-500 :hover:text-blue-400">Show</button>
                      <button type="button" class="inline-flex items-center bg-red-200 px-5  py-1 gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none :text-blue-500 :hover:text-blue-400">Show</button>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
      </div>
    </template>
  </Layout>
</template>
<script>
import Layout from "../views/Layout.vue";
import axiosInstance from '../services/axios';
import axios from "axios";
import router from "../router";
export default {
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description' }
      ],
      forms: [],
      allowedDomainsInput: '',
      formData: {
        name: '',
        slug: '',
        description: '',
        allowed_domains: [],
        limit_one_response: 0,
      },
      formLink: '',
    };
  }, 
  components: {
    Layout,
  },
  methods: {
    async getDataForms() {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axiosInstance.get('/forms', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        console.log({FormsData: response.data.forms});
        this.forms = response.data.forms;
      } catch (error) {
        console.error('Error fetching forms:', error);
      }
    },
    async createForm() {
      try {
        const allowedDomains = this.allowedDomainsInput
        .split('\n')
        .map(domain => domain.trim())
        .filter(domain => domain !== ''); // Filter out empty lines

        const formData = {
          name: this.formData.name,
          slug: this.formData.slug,
          allowed_domains: allowedDomains,
          description: this.formData.description,
          limit_one_response: this.formData.limit_one_response
        }
        
        const token = localStorage.getItem('accessToken');
        console.log({formDataInput: formData});
        const response = await axiosInstance.post('/forms', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      console.log(response);
      this.$swal({
        title: 'Success',
        text: 'Create Form Sucess',
        icon: 'success',
      }).then(() => {
        window.location.reload();
      })
      
      } catch (error) {
        console.log(error);
        this.$swal({
        title: 'Error',
        text: error.response.data.message,
        icon: 'error',
      });
      }
    },
    getForm() {
      const inputFormLink = this.formLink;
      console.log({input: inputFormLink});
      window.location.href = inputFormLink
    },
    redirectForm(slug) {
      router.push(`/forms/${slug}`);
    }
  },

  created() {
    this.getDataForms();
  }
};
</script>
