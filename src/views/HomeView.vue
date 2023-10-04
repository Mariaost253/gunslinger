<template>
    <div class="row justify-center q-pa-md">
  <div class="home">
  <div class=" row wrap justify-center items-start content-start">
  <div class="justify-start items-start content-start col-auto">
      <q-card-section>
        <div class="q-gutter-sm">
          <q-input dense filled v-model="numShotgunBullet" type="Number">
           <template v-slot:before>
              <label>Shots Own: </label>
           </template>
         </q-input>
         <q-input dense filled v-model="numPistolBullet" type="Number">
          <template v-slot:before>
            <label>Rounds Own: </label>
           </template>
        </q-input>
        </div>
    </q-card-section>
  </div>
  <q-separator dark vertical />
  <div>
      <q-card-section>
        <div class="text-h5">DeadEye Crit Manager</div>
        <div class="q-gutter-sm q-mt-lg">
            <q-radio dense v-model="critManager" val="16" label="16" color="red"/>
            <q-radio dense v-model="critManager"  val="17" label="17" color="red"/>
            <q-radio dense v-model="critManager"  val="18" label="18" color="red"/>
            <q-radio dense v-model="critManager" val="19" label="19" color="red"/>
            <q-radio dense v-model="critManager"  val="20" label="20" color="red"/>
        </div>
    </q-card-section>
  </div>

</div>
<div class=" row wrap justify-start items-start content-start">
<div class="self-center" style="overflow: auto;">
  <div style="max-width: 1100px; min-width: 800px;" class="row justify-center col-2">
    <q-table
      flat bordered
      grid
      :rows="items"
      row-key="id"
      hide-header
      hide-bottom
    >
      <template v-slot:item="props">
        <SkillComponent 
        :item="props.row"
        @update-json = "updateInStock"
        />
      </template>
    </q-table>
  </div>
  </div>
  </div>
  </div>
</div>
</template>

<script>
import SkillComponent from '@/components/SkillComponent.vue'
import data from '@/server/assets/data.json'
import miscData from '@/server/assets/miscData.json'
import axios from 'axios';
export default {
  name: 'HomeView',
  components: {
    SkillComponent
  },
  data() {
    return {
      items: data,
      critManager: miscData.critManager,
      numShotgunBullet: miscData.numShotgunBullet,
      numPistolBullet: miscData.numPistolBullet
    }
  },
  watch: {
    critManager(newVal, oldVal){
      this.saveData();
    },
    numShotgunBullet(newVal, oldVal){
      this.saveData();
    },
    numPistolBullet(newVal, oldVal){
      this.saveData();
    },
  }, 
  methods: {
    updateInStock(id, newInStockValue){
      const itemToUpdate = this.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.inStock = newInStockValue;
      }
      this.saveBulletsData();
    },
    async saveData() {
      try {
        const dataToSave = {
          critManager: this.critManager,
          numShotgunBullet: this.numShotgunBullet,
          numPistolBullet: this.numPistolBullet
        };
        const response = await axios.post('http://localhost:3000/api/saveData', dataToSave);

        if (response.data.message === 'Data has been saved.') {
          console.log('Data has been saved successfully.');
        } else {
          console.error('Failed to save data.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async saveBulletsData() {
      try {
        const dataToSave = this.items;
        const response = await axios.post('http://localhost:3000/api/saveBulletsData', dataToSave);

        if (response.data.message === 'Data has been saved.') {
          console.log('Data has been saved successfully.');
        } else {
          console.error('Failed to save data.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  },
}
</script>

<style scoped>
</style>
