<template>
  <div >
    <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2 rounded-borders">
      <q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        
        :width="200"
        :breakpoint="500"
        bordered
        dark
      >
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>
            <q-item   
            :active="activeItem === 'main'" 
            clickable
            v-ripple
            style="text-align: start; font-weight: 700;"
            @click="changePage('main')"
            :style="{ color: activeItem === 'main' ? 'red' : '' }"
            >
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>
              
              <q-item-section >
                Main
              </q-item-section>
            </q-item>

            <q-item   
            :active="activeItem === 'general-component'" 
            clickable
            v-ripple
            style="text-align: start; font-weight: 700;"
            @click="changePage('general-component')"
            :style="{ color: activeItem === 'general-component' ? 'red' : '' }"
            >
              <q-item-section avatar>
                <q-icon name="blur_on" />
              </q-item-section>

              <q-item-section >
                General
              </q-item-section>
            </q-item>

            <q-item   
            :active="activeItem === 'features-component'" 
            clickable
            v-ripple
            style="text-align: start; font-weight: 700;"
            @click="changePage('features-component')"
            :style="{ color: activeItem === 'features-component' ? 'red' : '' }"
            >
              <q-item-section avatar>
                <q-icon name="grain" />
              </q-item-section>

              <q-item-section>
                Features
              </q-item-section>
            </q-item>

            <q-item   
            :active="activeItem === 'sub-class-component'" 
            clickable
            v-ripple
            style="text-align: start;font-weight: 700;"
            @click="changePage('sub-class-component')"
            :style="{ color: activeItem === 'sub-class-component' ? 'red' : '' }"
            >
            <q-item-section avatar>
                <q-icon name="deblur" />
              </q-item-section>

              <q-item-section>
                Sub Classes
              </q-item-section>
            </q-item>

            <q-item   
            :active="activeItem === 'firearms-component'" 
            clickable
            v-ripple
            style="text-align: start;font-weight: 700;"
            @click="changePage('firearms-component')"
            :style="{ color: activeItem === 'firearms-component' ? 'red' : '' }"
            >
            <q-item-section avatar>
                <q-icon name="blur_circular" />
              </q-item-section>

              <q-item-section>
                Firearms
              </q-item-section>
            </q-item>

            <q-item   
            :active="activeItem === 'feats-component'" 
            clickable
            v-ripple
            style="text-align: start;font-weight: 700;"
            @click="changePage('feats-component')"
            :style="{ color: activeItem === 'feats-component' ? 'red' : '' }"
            >
            <q-item-section avatar>
                <q-icon name="filter_vintage" />
              </q-item-section>

              <q-item-section>
                Feats
              </q-item-section>
            </q-item>

            <q-item   
            :active="activeItem === 'firearm-mods-component'" 
            clickable
            v-ripple
            style="text-align: start;font-weight: 700; height: 50px;"
            @click="changePage('firearm-mods-component')"
            :style="{ color: activeItem === 'firearm-mods-component' ? 'red' : '' }"
            >
            <q-item-section avatar>
                <q-icon name="brightness_7" />
              </q-item-section>

              <q-item-section>
                Firearm <br /> Modifications
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
<q-page-container>
<q-page v-if="activeItem == 'main'">
<div class="row justify-center q-pt-sm">
  <div>
  <div class=" row wrap justify-center items-start content-start">
  <div class="justify-start items-start content-start col-auto">
      <q-card-section>
        <div class="q-gutter-sm">
        <q-input dense filled v-model="numPistolBullet" type="Number">
          <template v-slot:before>
            <label>Rounds Own: </label>
           </template>
        </q-input>
          <q-input dense filled v-model="numShotgunBullet" type="Number">
           <template v-slot:before>
              <label>Shots Own: </label>
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
        @update-inventory = "updateInventory"
        />
      </template>
    </q-table>
  </div>
  </div>
  </div>
  </div>
</div>
</q-page>
<keep-alive>
<q-page> <component :is="activeItem"> </component></q-page>
</keep-alive>
</q-page-container>
</q-layout>
  </div>
</template>

<script>
import SkillComponent from '@/components/SkillComponent.vue'
import GeneralComponent from '@/components/GeneralComponent.vue'
import FeaturesComponent from '@/components/FeaturesComponent.vue'
import SubClassComponent from '@/components/SubClassComponent.vue'
import FirearmsComponent from '@/components/FirearmsComponent.vue'
import FirearmModsComponent from '@/components/FirearmModsComponent.vue'
import data from '@/server/assets/data.json'
import miscData from '@/server/assets/miscData.json'
import axios from 'axios';
import { ref } from 'vue'
import FeatsComponent from '@/components/FeatsComponent.vue'
export default {
  name: 'HomeView',
  components: {
    SkillComponent,
    GeneralComponent,
    FeaturesComponent,
    SubClassComponent,
    FirearmsComponent,
    FeatsComponent,
    FirearmModsComponent
},
  
  data() {
    return {
      items: data,
      critManager: miscData.critManager,
      numShotgunBullet: miscData.numShotgunBullet,
      numPistolBullet: miscData.numPistolBullet,
      drawer: ref(false),
      miniState: ref(true),
      activeItem: 'main',
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
    changePage(item) {
      this.activeItem = item;
    },
    updateInStock(id, newInStockValue){
      const itemToUpdate = this.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.inStock = newInStockValue;
      }
      this.saveBulletsData();
    },
    updateInventory(which, amount){
        if(which){
          this.numPistolBullet -= amount;
        }
        else{
          this.numShotgunBullet -= amount;
        }
        this.saveData();
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
