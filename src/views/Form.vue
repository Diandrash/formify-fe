<template>
    <Layout>
        <template #default>
            <div v-if="detailsFormPage && formData" class="w-full pt-4 px-4 sm:px-6 md:px-8 lg:ps-72">
            <h1 class="font-semibold text-lg mb-3">Form Details</h1>
            <div class="">
                <div class="mb-8">
                <h2 class="text-xl font-bold text-gray-800 :text-gray-200">
                    {{ formData.name }}
                </h2>
                <p class="text-sm text-gray-600 :text-gray-400">
                    {{ formData.description }}
                </p>
                </div>

                <div class="head-title flex justify-between">
                    <h1 class="font-semibold text-lg">All Questions</h1>
                    <div class="group-button-tight flex gap-3">
                        <button @click.prevent="showResponses" type="button" class="py-2 self-center px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-500">
                            Responses
                        </button>
                        <button @click.prevent="createForm" type="button" class="py-2 self-center px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-500">
                            Add Question
                        </button>
                    </div>
                </div>
                <div v-if="showForm" class="questions-area">
                    <div class="form-question">
                        <div v-for="(form, formIndex) in formsCreate" :key="formIndex" class="question my-3">
                            <form action="" method="post" class="bg-white rounded-xl shadow px-2 py-1 sm:p-4 :bg-slate-900">
                                <h4 class="font-semibold mb-2">New Question {{ formIndex + 1 }}</h4>
                                <input v-model="form.name" type="text" class="font-semibold my-2 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Question Name">
                                <select v-model="form.choice_type" class="my-2 py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    <option selected hidden value="">Question Type</option>
                                    <option value="short answer">Short Answer</option>
                                    <option value="paragraph">Paragraph</option>
                                    <option value="date">Date</option>
                                    <option value="multiple choice">Multiple Choice</option>
                                    <option value="dropdown">Dropdown</option>
                                    <option value="checkboxes">Checkboxes</option>
                                </select>
                                <div v-if="form.choice_type == 'multiple choice' || form.choice_type == 'dropdown' || form.choice_type == 'checkboxes'">
                                    <div v-for="(choice, choiceIndex) in form.choices" :key="choiceIndex">
                                        <input
                                            v-model="form.choices[choiceIndex]"
                                            type="text"
                                            class="py-3 px-4 block ml-5 my-1 w-[80%] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                                            placeholder="Input Choice Option"
                                        >
                                    </div>
                                    <button @click.prevent="addChoice(formIndex)" type="button" class="ml-5 py-2 self-center px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-sky-600 text-white hover:bg-sky-500">
                                        Add Choice
                                    </button>
                                </div>
                                <select v-model="form.is_required" class="my-2 py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    <option selected value="1">Required Answer</option>
                                    <option value="0">Optional</option>
                                </select>
                            </form>
                        </div>
                        <button @click.prevent="saveAllQuestions" type="button" class="py-2 self-center px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-500">
                                Save Changes
                        </button>
                    </div>
                </div>
                
            <!-- Show Questions Data -->
                <div v-for="(question, questionIndex) in questionData" :key="questionIndex" class="questions-data">
                    <form method="post" class="bg-white rounded-xl shadow-lg px-2 py-1 sm:p-4 :bg-slate-900 my-5">
                                <h4 class="font-semibold mb-2">Question {{ questionIndex + 1 }}</h4>
                                <input v-model="question.name" type="text" class="font-semibold my-2 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Question Name">
                                <select v-model="question.choice_type" class="my-2 py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    <option selected hidden value="">Question Type</option>
                                    <option value="short answer">Short Answer</option>
                                    <option value="paragraph">Paragraph</option>
                                    <option value="date">Date</option>
                                    <option value="multiple choice">Multiple Choice</option>
                                    <option value="dropdown">Dropdown</option>
                                    <option value="checkboxes">Checkboxes</option>
                                </select>
                                <div v-if="question.choice_type == 'multiple choice' || question.choice_type == 'dropdown' || question.choice_type == 'checkboxes'">
                                    <div v-for="(choice, choiceIndex) in question.choices" :key="choiceIndex">
                                        <input
                                            v-model="question.choices[choiceIndex]"
                                            type="text"
                                            class="py-3 px-4 block ml-5 my-1 w-[80%] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                                            placeholder="Input Choice Option"
                                        >
                                    </div>
                                    <button @click.prevent="addChoice(formIndex)" type="button" class="ml-5 my-3 py-2 self-center px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-sky-600 text-white hover:bg-sky-500">
                                        Add Choice
                                    </button>
                                </div>
                                <select v-model="question.is_required" class="my-2 py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    <option selected value="1">Required Answer</option>
                                    <option value="0">Optional</option>
                                </select>
                                <div class="delete-area flex w-full justify-end">
                                    <button @click="deleteQuestion(question.id)" type="button" class="ml-5 my-3 py-2 self-center px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-500">
                                        Delete Question
                                    </button>
                                </div>
                    </form>
                </div>
            <!-- End Show Questions Data -->

            </div>
            <!-- End Card -->
            </div>

            <div v-if="showFormResponse"  class="w-full pt-4 px-4 sm:px-6 md:px-8 lg:ps-72">
                <div class="head-title flex justify-between">
                    <h1 class="font-semibold text-lg"> <span class="text-blue-600"> {{ formData.name }} </span> Response</h1>
                    <div class="group-button-tight flex gap-3">
                        <button @click.prevent="showDetailsForm" type="button" class="py-2 self-center px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-600 text-white hover:bg-yellow-500">
                            Back to Form
                        </button>
                    </div>
                </div>
                <div class="content-area">
                    <div class="flex flex-col">
                    <div class="-m-1.5 overflow-x-auto">
                        <div class="p-1.5 min-w-full inline-block align-middle">
                        <div class="overflow-hidden">
                            <table class="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr >
                                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Username</th>
                                    <th v-for="(question, questionIndex) in questionData" :id="questionIndex" scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">{{ question.name }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(response, responseIndex) in responsesData" :id="responseIndex" class="odd:bg-white even:bg-gray-100">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{{ response.user.name }}</td>
                                    <td v-for="(answer, answerIndex) in response.answers" class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{{ answer }}</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
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
    import axiosInstance from "../services/axios.js";
    export default {
        components: {
            Layout
        },
        data() {
            return {
                headers: [
                    { text: 'Name', value: 'name' },
                    { text: 'Description', value: 'description' }
                ], 
                detailsFormPage: true,
                showFormResponse: false,
                formData: null,
                showForm: false,
                questionData: [],
                formsCreate: [],
                responsesData: [],
                answerData: [],

            }
        },
        methods: {
            async getDetailForm() {
                try {
                const slug = this.$route.params.slug;
                const token = localStorage.getItem('accessToken')
                const response = await axiosInstance.get(`/forms/${slug}`, {
                    headers: {
                        'Authorization' : `Bearer ${token}`
                    }
                })
                this.formData = response.data.form;
                this.questionData = response.data.form.questions;
                this.questionData.forEach(question => {
                    if (question.choices) {
                        question.choices = question.choices.split(',')
                    }
                })
                console.log( this.formData);   
                console.log({Question: this.questionData});   
                } catch (error) {
                    console.log(error.message);    
                }
            },
            createForm() {
                this.showForm = true;
                this.formsCreate.push({
                    name: '',
                    choice_type: '',
                    choices: ['Default Choice'],
                    is_required: 1,
                });
            },
            addChoice(formIndex) {
                this.formsCreate[formIndex].choices.push('');
            },
            async saveQuestion(singleFormData) {
                console.log({Input: this.formsCreate});
                try {
                    const slug = this.$route.params.slug;   
                    const token = localStorage.getItem('accessToken')
                    const response = await axiosInstance.post(`/forms/${slug}/questions`,
                        singleFormData, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    })  
                    this.$swal({
                    title: 'Success',
                    text: `${response.data.message}`,
                    icon: 'success',
                }).then(() => {
                    this.getDetailForm();
                })
                    console.log({response: response});
                } catch (error) {
                    console.log(error);
                }
            },
            async saveAllQuestions() {
                for (let singleFormData of this.formsCreate) {
                    if (singleFormData.choices) {
                        singleFormData.choices = singleFormData.choices.join(',')
                    }
                    await this.saveQuestion(singleFormData)                    
                }
            },
            async deleteQuestion(questionId) {
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
                        confirmButtonText: "Yes, delete it!"
                    })
                    if (confirmed.isConfirmed) {
                        const response = await axiosInstance.delete(`/forms/${slug}/questions/${questionId}`, {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        })
                        this.$swal({
                            title: 'Success',
                            text: `${response.data.message}`,
                            icon: 'success',
                        }).then(() => {
                            this.getDetailForm();
                        })
                        console.log({DeleteResponse: response});
                    }
                } catch (error) {
                    this.$swal({
                        title: 'Failed',
                        text: `${response.data.message}`,
                        icon: 'error',
                    })
                    console.log(error.message);
                }
            },
            async getFormResponses() {
                try {
                    const slug = this.$route.params.slug;
                    const token = localStorage.getItem('accessToken')
                    const response = await axiosInstance.get(`/forms/${slug}/responses`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    const responseData = response.data.responses;
                    responseData.forEach(response => {
                        response.answers = Object.values(response.answers);
                    });
                    this.responsesData = responseData;
                    
                    console.log({FormResponses: this.responsesData});
                } catch (error) {
                    
                }
            },
            showResponses() {
                this.detailsFormPage = false;
                this.showFormResponse = true;
            },
            showDetailsForm() {
                this.detailsFormPage = true;
                this.showFormResponse = false;
            }
        },
        created() {
            this.getDetailForm();
            this.getFormResponses();
        }
    }
</script>