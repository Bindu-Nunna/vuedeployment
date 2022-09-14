<template>
    <div>
        <h1>Menu List</h1>
        <button v-if="restaurentDetails" @click="getRestuarantMenuItems">Show Menu</button>
        <div v-if="filteredMenu.length">
            <ul v-for="(item,index) in filteredMenu" :key="index">
                <li>{{item.name}}</li>

            </ul>
        </div>
    </div>

</template>
<script>
import { mapGetters } from 'vuex';
export default {
    props: ["restaurentDetails"],
   
    data() {
        return {
            filteredMenu: []
        }
    },
    computed: {
        ...mapGetters('restuarant', ['getMenu'])
    },
    methods: {
        getRestuarantMenuItems() {
            console.log(this.$props.restaurentDetails, this.getMenu, 'param')
            // this.$data.filteredMenu = this.getMenu.filter(ele => {
            //     console.log(ele.restuarentId, 'ele.restuarentId');
            //     console.log(this.$props.restaurentDetails, 'ele.restuarentId');

            //    if(ele.restuarentId === this.$props.restaurentDetails.restuarentId){
            //     return ele.menuItems;
            //    }
            // })
            // console.log(this.$data.filteredMenu, 'filteredMenu');

        },
       
    }
}
</script>