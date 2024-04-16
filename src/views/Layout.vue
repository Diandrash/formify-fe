<template>
<header class="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 :bg-gray-800 :border-gray-700">
  <nav class="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8" aria-label="Global">
    <div class="me-5 lg:me-0 lg:hidden">
      <a class="flex-none text-xl font-semibold :text-white" href="#" aria-label="Formify">Formify</a>
    </div>

    <div class="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">

      <div class="group flex gap-4">
        <img class="inline-block size-[38px] rounded-full ring-2 ring-white :ring-gray-800 object-cover" src="https://i.stack.imgur.com/l60Hf.png" alt="Image Description">
        <h1 class="username self-center font-semibold text-base pr-3">{{ username }}</h1>
      </div>

      <button @click.prevent="logout" class="logout text-white bg-red-600 hover:bg-red-800 py-2 px-5 rounded-md font-bold text-sm">Logout</button>

    </div>
  </nav>
</header>
<!-- ========== END HEADER ========== -->

<!-- ========== MAIN CONTENT ========== -->
<!-- Sidebar Toggle -->
<div class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden :bg-gray-800 :border-gray-700">
  <div class="flex items-center py-4">
    <!-- Navigation Toggle -->
    <button type="button" class="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
      <span class="sr-only">Toggle Navigation</span>
      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
    </button>
    <!-- End Navigation Toggle -->

  </div>
</div>
<!-- End Sidebar Toggle -->

<!-- Sidebar -->
<div id="application-sidebar" class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 :[&::-webkit-scrollbar-track]:bg-slate-700 :[&::-webkit-scrollbar-thumb]:bg-slate-500 :bg-gray-800 :border-gray-700">
  <div class="px-6">
    <a class="flex-none text-xl font-semibold :text-white" href="#" aria-label="Formify">Formify</a>
  </div>

  <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
    <ul class="space-y-1.5">
      <li>
        <a class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-900 :text-white" href="/home">
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Home
        </a>
      </li>

      <li class="hs-accordion" id="users-accordion">
        <button type="button" class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-800 :hover:bg-gray-900 :text-slate-400 :hover:text-slate-300 :hs-accordion-active:text-white">
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Users

          <svg class="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>

          <svg class="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>

        <div id="users-accordion-child" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
          <ul class="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
            <li class="hs-accordion" id="users-accordion-sub-1">
              <button type="button" class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-800 :hover:bg-gray-900 :text-slate-400 :hover:text-slate-300 :hs-accordion-active:text-white">
                Sub Menu 1

                <svg class="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>

                <svg class="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>

              <div id="users-accordion-sub-1-child" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                <ul class="pt-2 ps-2">
                  <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-800 :text-slate-400 :hover:text-slate-300" href="#">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-800 :text-slate-400 :hover:text-slate-300" href="#">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-800 :text-slate-400 :hover:text-slate-300" href="#">
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="hs-accordion" id="users-accordion-sub-2">
              <button type="button" class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-800 :hover:bg-gray-900 :text-slate-400 :hover:text-slate-300 :hs-accordion-active:text-white">
                Sub Menu 2

                <svg class="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>

                <svg class="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>

              <div id="users-accordion-sub-2-child" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden ps-2">
                <ul class="pt-2 ps-2">
                  <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-800 :text-slate-400 :hover:text-slate-300" href="#">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-800 :text-slate-400 :hover:text-slate-300" href="#">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-800 :text-slate-400 :hover:text-slate-300" href="#">
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>

      <li class="hs-accordion" id="account-accordion">
        <button type="button" class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-800 :hover:bg-gray-900 :text-slate-400 :hover:text-slate-300 :hs-accordion-active:text-white">
          <svg class="flex-shrink-0 mt-0.5 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>
          Account

          <svg class="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>

          <svg class="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>

        <div id="account-accordion-child" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
          <ul class="pt-2 ps-2">
            <li>
              <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-800 :text-slate-400 :hover:text-slate-300" href="#">
                Link 1
              </a>
            </li>
            <li>
              <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-800 :text-slate-400 :hover:text-slate-300" href="#">
                Link 2
              </a>
            </li>
            <li>
              <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-800 :text-slate-400 :hover:text-slate-300" href="#">
                Link 3
              </a>
            </li>
          </ul>
        </div>
      </li>

      <li class="hs-accordion" id="projects-accordion">
        <button type="button" class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-800 :hover:bg-gray-900 :text-slate-400 :hover:text-slate-300 :hs-accordion-active:text-white">
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          Projects

          <svg class="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>

          <svg class="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>

        <div id="projects-accordion-child" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
          <ul class="pt-2 ps-2">
            <li>
              <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-800 :text-slate-400 :hover:text-slate-300" href="#">
                Link 1
              </a>
            </li>
            <li>
              <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-800 :text-slate-400 :hover:text-slate-300" href="#">
                Link 2
              </a>
            </li>
            <li>
              <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 :bg-gray-800 :text-slate-400 :hover:text-slate-300" href="#">
                Link 3
              </a>
            </li>
          </ul>
        </div>
      </li>

      <li><a class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 :hover:bg-gray-900 :text-slate-400 :hover:text-slate-300" href="#">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
        Calendar
      </a></li>
      <li><a class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 :hover:bg-gray-900 :text-slate-400 :hover:text-slate-300" href="#">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        Documentation
      </a></li>
    </ul>
  </nav>
</div>
<!-- End Sidebar -->

<!-- Content -->
<div id="content">
  <slot></slot>
</div>


</template>

<script>
import axiosInstance from '../services/axios';
import axios from "axios";
import router from "../router";
export default {
  data() {
    return {
      username: '',
    };
    },
    methods: {
        async fetchUser() {
        try {
            const token = localStorage.getItem('accessToken');
            const responseUser = await axios.get('http://localhost:8000/api/user', {
            headers: {
            Authorization: `Bearer ${token}`,
            }
        })
        this.username = responseUser.data.name;
        } catch (error) {
            console.error('Error fetching forms:', error);
        }
        },
        async logout() {
          try {
            const slug = this.$route.params.slug;
                    const token = localStorage.getItem('accessToken')
                    const confirmed = await this.$swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, Logout"
                    })
                    if (confirmed.isConfirmed) {
                            const response = await axios.post('http://localhost:8000/api/v1/auth/logout', null, {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        })
                        localStorage.removeItem('accessToken');
                        this.$swal({
                            title: 'Success',
                            text: `${response.data.message}`,
                            icon: 'success',
                        }).then(() => {
                            localStorage.removeItem('accessToken');
                            router.push('/login')
                            console.log({DeleteResponse: response});
                        })
                      }
          } catch (error) {
            console.log(error);
          }
        }
    },
        created() {
          
        this.fetchUser();
    }
    };
</script>