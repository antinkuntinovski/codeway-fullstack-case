<template>
  <div id="app"> <!-- Added ID "app" for the container div -->
    <!-- Desktop View -->
    <div v-if="isDesktop">
      <!-- Navbar section -->
      <div id="navbar" v-if="$store.state.user">
        <div class="logo">
          <img src="../../public/icon.png" height="50" width="80">
        </div>
        <!-- Dropdown menu for the logout button -->
        <div class="dropdown">
          <button class="dropdown-toggle" @click="toggleDropdown"><img src="../../public/dropdown.png" width="50" height="50"></button>
          <div v-if="showDropdown" class="dropdown-menu">
            <button class="logout" @click="$store.dispatch('logout')">Logout</button>
          </div>
        </div>
      </div>
      <div>
        <!-- Table section -->
        <table v-for="item in items" :key="item.id">
          <!-- Column headings -->
          <thead>
            <th>ParameterKey</th>
            <th>Value</th>
            <th>Actions</th>
          </thead>
          <!-- Rows -->
          <tbody>
            <tr v-for="(value, field) in item" :key="field">
              <td class="key" v-if="field !== 'id'"> {{ field }} </td>
              <td v-if="field !== 'id'"> 
                <input type="text" v-model="item[field]"/>
              </td>
              <!-- Edit and delete buttons -->
              <td v-if="field !== 'id'">
                <button class="edit" @click="editProperty(item, field)">Save</button>
                <button class="delete" @click="deleteProperty(item, field)">Delete</button>
              </td>
            </tr>
            <tr>
              <!-- Add new property row -->
              <td>
                <input type="text" v-model="newParameter" placeholder="New Parameter">
              </td>
              <td>
                <input type="text" v-model="newValue" placeholder="New Value">
              </td>
              <!-- Add button -->
              <td>
                <button class="add" @click="addProperty(item, newParameter, newValue)">Add</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Mobile View -->
    <div v-else>
      <!-- Navbar section -->
      <div id="navbar" v-if="$store.state.user">
        <div class="logo">
          <img src="../../public/icon.png" height="50" width="80">
        </div>
        <div class="dropdown">
          <button class="dropdown-toggle" @click="toggleDropdown"><img src="../../public/dropdown.png" width="50" height="50"></button>
          <div v-if="showDropdown" class="dropdown-menu">
            <button class="logout" @click="$store.dispatch('logout')">Logout</button>
          </div>
        </div>
      </div>
      <!-- ... (Mobile item content) ... -->
      <div v-for="item in items" :key="item">
        <div  v-for="(value, field) in item" :key="field">
          <div class="mobile-container" v-if="field !== 'id'">
            <div class="mobile-row"> <b>ParameterKey:</b> {{ field }}</div>
            <div class="mobile-row"><b>Value:</b> <input class="mobile-input" type="text" v-model="item[field]"></div>
            <div class="mobile-row-buttons">
              <button class="mobile-edit" @click="editProperty(item, field)">Save</button>
              <button class="mobile-delete" @click="deleteProperty(item, field)">Delete</button>
            </div>
          </div>
        </div>
        <div class="mobile-container">
            <div class="mobile-row-newparameter">
              <input class="mobile-input-newparameter" type="text" v-model="newParameter" placeholder="New Parameter">
              <input class="mobile-input-newparameter" type="text" v-model="newValue" placeholder="New Value">
            </div>
            <div class="mobile-row-add"><button class="mobile-add" @click="addProperty(item, newParameter, newValue)">Add</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const items = ref([]); 
    const showDropdown = ref(false); 
    const newParameter = ref(''); 
    const newValue = ref(''); 

    const sendAuthorizedRequest = async (method, url, data) => {
      const config = {
        method,
        url,
        headers: {
          Authorization: `Bearer ${user.value.getIdToken()}`, // Include the Firebase ID token
        },
        data,
      };

      try {
        const response = await axios(config);
        return response.data;
      } catch (error) {
        console.error('API Request Error:', error);
        throw error;
      }
    };

    const fetchItems = async () => {
      try {
        items.value = await sendAuthorizedRequest('get', 'http://localhost:3000/api/files');
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value;
    };
    const isDesktop = computed(() => {
      return window.innerWidth >= 768; // Adjust the threshold as needed
    });

    const editProperty = async (item, field) => {
      const updatedValue = item[field];
      try {
        await sendAuthorizedRequest('patch', `http://localhost:3000/api/files/${item.id}`, {[field]: updatedValue})
      } catch (error) {
        console.error('Error updating item:', error);
      }
    
    };
    const addProperty = async (item, parameter, value) => {
      if (parameter === '' || value === '') {
        return;
      }
      try {
        await sendAuthorizedRequest('patch', `http://localhost:3000/api/files/${item.id}`, {[parameter]: value});
        newParameter.value = '';
        newValue.value = '';
        await fetchItems();
      } catch (error) {
        console.error('Error updating item:', error);
      }
    };
    const deleteProperty = async (item, field) => {
      try {
        await sendAuthorizedRequest('patch', `http://localhost:3000/api/files/${item.id}`, {[field]: null});
        await fetchItems();
        } catch (error) {
        console.error('Error deleting property:', error);
      }
    };
    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/files');
        items.value = response.data;
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    });

    return {
      isDesktop,
      items,
      showDropdown,
      toggleDropdown,
      editProperty,
      addProperty,
      newParameter,
      newValue,
      deleteProperty,
    };
  },
};
</script>

<style scoped>
#app {
  padding: 20px;
}
#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  padding: 10px 20px;
}
.logo img {
  display: block;
}
.dropdown {
  position: relative;
}
.dropdown-toggle {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: none;
  border: none;
  z-index: 1; 
}
.logout {
  background-color: blue;
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
  cursor: pointer;
}
input{
  width: 100%;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
}
input:focus{
  outline: none;
  border: 1px solid crimson;
  border-radius: 5px;
}
button{
  height: 50px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
}
.edit{
  background: blue;
  border-radius: 10px;
  width: 20%;
}
.delete{
  background: red;
  border-radius: 10px;
  width: 20%;
  margin: 0px 30px;
}
.add{
  background: turquoise;
  border-radius: 10px;
  width: 50%;
  margin-left: 0px !important;
}
.logout{
  width: 100%;
  background: blue;
  border-radius: 20px;
}
.key{
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
}
th{
  height: 50px;
  background: none;
  border: none;
  color: rgb(161, 207, 219);
  font-size: 24px;
  font-weight: bold;
  text-align: left;
}
td{
  text-align: left;
}
table{
  margin: auto;
  width: 80%;
}
.mobile-container{
  width: 100%;
  height: 100%;
  background: none;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid rgb(80, 80, 80);
  border-radius: 10px;
  padding: 10px 10px;
  margin-bottom: 20px;
}
.mobile-input{
  width: 70%;
  height: auto;
  background: none;
  border: none;
  color: white;
  font-size: 12px;
  font-weight: normal;
  margin-left: 15px;
}
.mobile-row{
  margin: 0px 10px;
  text-align: left;
  height: 30px;
  padding: 20px 0px;
  font-weight: normal;
}
.mobile-row-buttons{
  margin: 0px 10px;
  text-align: center;
  padding: 20px 0px;  
}
.mobile-edit{
  background: blue;
  border-radius: 10px;
  width: 20%;
  height: auto;
  margin: 0px 10px;
}
.mobile-delete{
  background: red;
  border-radius: 10px;
  width: 20%;
  height: auto;
  margin: 0px 10px;
}
b{
  margin-top: 20px;
  padding: 0px 10px;
  color: white;
}
.mobile-input-newparameter{
  width: 40%;
  height: auto;
  background: none;
  border: none;
  color: white;
  font-size: 12px;
  font-weight: normal;
  margin-left: 15px;
}
.mobile-add{
  background: turquoise;
  border-radius: 10px;
  width: 50%;
  height: auto;
  margin: 0px 10px;
}
.mobile-row-add{
  margin: 0px 10px;
  text-align: center;
  padding: 20px 0px;  
}
.mobile-row-newparameter{
  margin: 0px 10px;
  text-align: center;
  padding: 20px 0px;
  font-weight: normal;
}
</style>
