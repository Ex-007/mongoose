<template>
    <div>
        <h1>this is the vue template</h1>

        <div>
            <input type="text" placeholder="name" v-model="nameValue"><br>
            <input type="email" placeholder="email" v-model="emailValue"><br>
            <button @click="sendd">Send</button>
        </div>

        <div>
            <h1>All users</h1>
            <div v-for="(users, index) in allUsers" :key="index" class="perUser">
                <p>{{ users.name }}</p>
                <p>{{ users.email }}</p>
                <p>{{ users.createdAt }}</p>
                <p>{{ users._id }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const nameValue = ref('')
    const emailValue = ref('')
    const allUsers = ref([])

    const sendd = async () => {
        const namei = nameValue.value
        const emaili = emailValue.value


        const created = await $fetch('/api/users', {
            method : 'POST',
            body : {
                name: namei,
                email : emaili
            }
        })

        nameValue.value = ''
        emailValue.value = ''
        await fetchAll()
        // console.log(created)
    }

    const fetchAll = async() => {
        const allUser = await $fetch('/api/users')
        allUsers.value = allUser
        // console.log(allUser)
    }

    onMounted(() => {
        fetchAll()
    })
</script>

<style scoped>
    .perUser{
        margin-bottom: 10px;
        background-color: black;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
    }
</style>