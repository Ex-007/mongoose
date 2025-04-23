<template>
    <div>
        <h1>this is the vue template</h1>

        <!-- SAVE A USER -->
        <div>
            <h1>Save a user</h1>
            <input type="text" placeholder="name" v-model="nameValue"><br>
            <input type="email" placeholder="email" v-model="emailValue"><br>
            <button @click="sendd">Send</button>
        </div>
        <!-- SEARCH A USER -->
        <div>
            <h1>search a user</h1>
            <input type="text" placeholder="Input name" v-model="searchName">
            <button @click="search">search</button>
        </div>

        <!-- RETURNED SEARCH USERS -->
         <div>
            <div v-for="(result, index) in searchedUSer" :key="index">
                <p>{{ result.name }}</p>
                <p>{{ result.email }}</p>
                <p>{{ result.createdAt }}</p>
                <p>{{ result._id }}</p>
            </div>
         </div>

        <!-- ALL USERS -->
        <div>
            <h1>All users</h1>
            <div v-for="(users, index) in allUsers" :key="index" class="perUser">
                <p>{{ users.name }}</p>
                <p>{{ users.email }}</p>
                <p>{{ users.createdAt }}</p>
                <p>{{ users._id }}</p>

                <div class="upDel">
                    <button @click="updateDet(users._id)">Update</button>
                    <button @click="deleteDet(users._id)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const nameValue = ref('')
    const emailValue = ref('')
    const allUsers = ref([])
    const searchName = ref('')
    const searchedUSer = ref([])

    // POST A USER
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


    // FETCH ALL USERS
    const fetchAll = async() => {
        const allUser = await $fetch('/api/users')
        allUsers.value = allUser
        // console.log(allUser)
    }


    // SEARCHING FOR A USER
    const search = async () => {
        const fetchedUSer = await $fetch(`/api/users/search?name=${searchName.value}`)
        searchedUSer.value = fetchedUSer
        // console.log(fetchedUSer)
    }

    // UPDATE A USER
    const updateDet = async (id) => {
        const updated = await $fetch(`/api/users/${id}`, {
            method: 'PUT',
            body: {
                name: 'Agbebi Bidemi'
            }
        })
        console.log(updated)
        await fetchAll()
    }


    // DELETE A USER
    const deleteDet = (id) => {
        console.log(id)
    }


    // ONMOUNTED
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
    .upDel{
        display: flex;
        gap: 10px;
    }
</style>