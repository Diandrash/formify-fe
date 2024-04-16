<template>
    <Layout>
        <template #default>
            <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
                <h1 class="font-semibold text-2xl">{{ formData.name }}</h1>
                <h4 class="text-base">{{ formData.description }}</h4>
                <form  @submit.prevent="createResponse" action="" method="post">
                    <div v-for="(question, questionIndex) in questionData" class="questions-lists">

                        <div v-if="question.choice_type == 'short answer'" class="my-5">
                            <label for="input-label-with-helper-text" class="block text-sm font-medium mb-2">{{ question.name }} <span v-if="question.is_required === 1" class="text-red-600 ml-2">*</span></label>
                            <input v-model="responseData[question.name]" :required="question.is_required === 1" type="text" id="input-label-with-helper-text" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Answer Here" aria-describedby="hs-input-helper-text">
                        </div>

                        <div v-if="question.choice_type == 'paragraph'" class="my-5">
                            <label for="textarea-label" class="block text-sm font-medium mb-2">{{ question.name }}<span v-if="question.is_required === 1" class="text-red-600 ml-2">*</span></label>
                            <textarea v-model="responseData[question.name]" :required="question.is_required === 1"  id="textarea-label" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows="3" placeholder="answer here"></textarea>
                        </div>

                        <div v-if="question.choice_type == 'date'" class="my-5">
                            <label for="textarea-label" class="block text-sm font-medium mb-2">{{ question.name }}<span v-if="question.is_required === 1" class="text-red-600 ml-2">*</span></label>
                            <input v-model="responseData[question.name]" :required="question.is_required === 1" type="date" class="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                        </div>


                        <div v-if="question.choice_type == 'dropdown'" class="my-5">
                            <label for="textarea-label" class="block text-base font-medium mb-2">{{ question.name }}<span v-if="question.is_required === 1" class="text-red-600 ml-2">*</span></label>
                            <select v-model="responseData[question.name]" :required="question.is_required === 1" class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                            <option disabled value="" selected>Open this select menu</option>
                                    <option v-for="(choice, choiceIndex) in question.choices" :key="choiceIndex" :value="choice.label">{{ choice.label }}</option>
                            </select>
                        </div>

                        <div v-if="question.choice_type == 'multiple choice'" class="my-5">
                            <label for="textarea-label" class="block text-base font-medium mb-2">{{ question.name }}<span v-if="question.is_required === 1" class="text-red-600 ml-2">*</span></label>
                            <div v-for="(choice, choiceIndex) in question.choices" :key="choiceIndex">
                                <div class="flex">
                                    <input 
                                    :id="`choice-${questionIndex}-${choiceIndex}`"
                                    v-model="responseData[question.name]" :value="choice.label" :required="question.is_required === 1" type="radio" name="hs-default-radio" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" checked="">
                                    <label :for="`choice-${questionIndex}-${choiceIndex}`" class="text-sm text-gray-500 ms-2">{{ choice.label }}</label>
                                </div>
                            </div>
                        </div>

                        <div v-if="question.choice_type == 'checkboxes'" class="my-5">
                            <label for="textarea-label" class="block text-base font-medium mb-2">{{ question.name }}<span v-if="question.is_required === 1" class="text-red-600 ml-2">*</span></label>
                            <div v-for="(choice, choiceIndex) in question.choices" :key="choiceIndex">
                                <div class="flex">
                                    <input v-model="responseData[question.name]" 
                                    @change="updateCheckbox(question.name, choice.label)"
                                    :required="question.is_required === 1"
                                    :value="choice.label"  type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500">
                                    <label class="text-base  ms-3">{{ choice.label }}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="py-2 self-center px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-500">
                            Submit
                    </button>
                </form>
            </div>
        </template>
    </Layout>
</template>
<script>
    import Layout from "../views/Layout.vue";
    import axiosInstance from "../services/axios.js";
    import router from "../router/index.js";

    export default {
        components: {
          Layout
        },
        data() {
            return {
                formData: [],
                questionData: [],
                responseData: {},
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
                        question.choices = question.choices.map(choice => {
                            return {
                                label: choice,
                                selected: false,
                            }
                        })
                    }
                })
                console.log( this.formData);   
                console.log({Question: this.questionData});   
                } catch (error) {
                    console.log({status: error.response.status});
                    if (error.response.status === 401) {
                        router.push('/forbidden');
                    }
                    this.$swal({
                        title: 'Failed',
                        text: `${response.data.message}`,
                        icon: 'error',
                    })
                    
                }
            },
            updateCheckbox(questionName, choiceLabel) {
                if (!Array.isArray(this.responseData[questionName])) {
                    this.$set(this.responseData, questionName, []); // Membuat array jika belum ada
                }

                const index = this.responseData[questionName].indexOf(choiceLabel);

                if (index === -1) {
                    this.responseData[questionName].push(choiceLabel);
                } else {
                    this.responseData[questionName].splice(index, 1);
                }
            },
            async createResponse() {
                try {
                    const slug = this.$route.params.slug;
                    const token = localStorage.getItem('accessToken')
                    const answers = [];

                    this.questionData.forEach(question => {
                        let value = this.responseData[question.name];
                        if (this.responseData[question.name] !== undefined) {
                            if (Array.isArray(value)) {
                                value = value.join(',')
                            }
                            answers.push({
                                question_id: question.id,
                                value
                            })
                        }
                    })

                    const dataToSend = { answers }
                    console.log({responseData: dataToSend});  

                    const response = await axiosInstance.post(`/forms/${slug}/responses`, dataToSend, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    this.$swal({
                        title: 'Success',
                        text: `${response.data.message}`,
                        icon: 'success',
                    }).then(() => {
                        router.push('/home')
                    })
                    console.log({SubmitData: response.data});                    
                } catch (error) {
                    this.$swal({
                        title: 'Failed',
                        text: `${response.data.message}`,
                        icon: 'error',
                    })
                    console.log(error);
                }
            }
        },

        created() {
            this.getDetailForm();
        }
    }
</script>