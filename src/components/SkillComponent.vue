<template>
    <div class="q-pa-lg row items-start q-gutter-md" >
       <q-card class="my-card bordered bg-dark" style="color: white;">
      <q-card-section>
        <div class="text-h6">{{ item.name }}</div>
        <div class="text-subtitle1" style="text-align: start;"> <b>Type: </b> {{ item.type }}</div>
        <div class="text-subtitle1" style="text-align: start;"> <b>Cost: </b> {{ item.cost }}</div>
        <div class="text-subtitle1" style="text-align: start;"> <b>Range: </b> {{ item.range }}</div>
        <div class="text-subtitle1" style="text-align: start;"> <b>Damage: </b> {{ item.damage }}</div>
        <div class="text-subtitle1" style="text-align: start;"> <b>Reload: </b> {{ item.reload }}</div>
        <div class="text-subtitle1" style="text-align: start;"> <b>Properties: </b> {{ item.properties }}</div>
      </q-card-section>

      <q-separator />

      <div class="q-pa-sm">
        <div class="row q-gutter-xs q-ml-sm">
          <q-checkbox 
          dark
          color="red"
          v-model="bullets[0]"
          disable
          size="md"
          checked-icon="task_alt"
          unchecked-icon="highlight_off"
        />
        <q-checkbox 
        dark
        color="red"
          v-model="bullets[1]"
          disable
          size="md"
          checked-icon="task_alt"
          unchecked-icon="highlight_off"
        />
        <div v-if="item.id != 5">
      <q-checkbox 
      dark
      color="red"
          v-model="bullets[2]"
          disable
          size="md"
          checked-icon="task_alt"
          unchecked-icon="highlight_off"
      />
      <q-checkbox 
      dark
      color="red"
          v-model="bullets[3]"
          disable
          size="md"
          checked-icon="task_alt"
          unchecked-icon="highlight_off"
      />
      <q-checkbox 
      dark
      color="red"
          v-model="bullets[4]"
          disable
          size="md"
          checked-icon="task_alt"
          unchecked-icon="highlight_off"
      />
      <q-checkbox 
         dark
           color="red"
          v-model="bullets[5]"
          disable
          size="md"
          checked-icon="task_alt"
          unchecked-icon="highlight_off"
      />
    </div>

      </div>
      <q-card-actions class ="q-ml-xs" style="align-items: center; position: relative;">
        <q-btn no-caps color="primary" class="btn" @click="reloadOne()" >Reload</q-btn>
        <q-btn no-caps color="primary" class="btn" @click="reloadAll()" :disable="reloadAllBtn">Reload All</q-btn>
        <q-btn no-caps color="red" class="btn" @click="fire()" >Fire</q-btn>
      </q-card-actions>
    </div>
    </q-card>
  </div>
</template>

<script>
import miscData from '@/server/assets/miscData.json'
export default {
  name: 'SkillComponent',
  props: {
    item: {
    name: String,
    type: String,
    cost: String,
    range: String,
    damage: String,
    reload: String,
    properties: String,
    inStock: Number
    }
  },
  data() {
    return {
      bullets: [false, false, false, false, false, false],
      critManager: miscData.critManager,
      numShotgunBullet: miscData.numShotgunBullet,
      numPistolBullet: miscData.numPistolBullet,
      pistolIds: [1,2,3],
      shotgunsIds: [4,5],
      reloadAllBtn: false
    }
  }, 
  mounted() {
    this.updateBullets();
  },
  methods :{
    updateBullets() {
      const { inStock } = this.item;
      for (let i = 0; i < this.bullets.length; i++) {
        this.bullets[i] = i < inStock;
      }
    },
    reloadAll(){
      const count = this.bullets.reduce((count, bullet) => {
        return count + (bullet ? 1 : 0); }, 0);
      if(this.pistolIds.includes(this.item.id) && this.numPistolBullet > 0){
        const bulletsToChange = Math.min(this.numPistolBullet, 6 - count);
          for (let i = 0; i < bulletsToChange; i++) {
              const indexToChange = this.bullets.indexOf(false);
              if (indexToChange !== -1) {
                 this.bullets[indexToChange] = true;
                }
           }
           this.sendToJson();
           this.updateInventory(true,bulletsToChange);
          } 
        if(this.shotgunsIds.includes(this.item.id)){
          
          if(this.item.id == 4 && this.numShotgunBullet > 0 ){
            const bulletsToChange = Math.min(this.numShotgunBullet, 6 - count);
          for (let i = 0; i < bulletsToChange; i++) {
              const indexToChange = this.bullets.indexOf(false);
              if (indexToChange !== -1) {
                 this.bullets[indexToChange] = true;
                }
           }
           this.sendToJson();
           this.updateInventory(false, bulletsToChange);
        }
             if(this.item.id == 5 && this.numShotgunBullet > 0 ){
              const bulletsToChange = Math.min(this.numShotgunBullet, 2 - count);
          for (let i = 0; i < bulletsToChange; i++) {
              const indexToChange = this.bullets.indexOf(false);
              if (indexToChange !== -1) {
                 this.bullets[indexToChange] = true;
                }
           }
           this.sendToJson();
           this.updateInventory(false, bulletsToChange);
           }
        }
    },
    reloadOne() {
    const len = this.item.id == 5 ? 2 :this.bullets.length;
    if((this.numShotgunBullet > 0 && this.shotgunsIds.includes(this.item.id)) || 
          (this.numPistolBullet > 0 && this.pistolIds.includes(this.item.id))){
    for (let i = 0; i < len; i++) {
      if (this.bullets[i] !== true) {
        this.bullets[i] = true;
        break;
        }
      }
      if(this.pistolIds.includes(this.item.id)){
        this.updateInventory(true,1);
      } else if (this.shotgunsIds.includes(this.item.id)){
        this.updateInventory(false,1);
      }
      this.sendToJson();
    }
    },
    fire(){
      for (let i = this.bullets.length - 1; i >= 0; i--) {
      if (this.bullets[i] === true) {
        this.bullets[i] = false;
        break;
      }
    }
    this.sendToJson();
    },
    sendToJson(){
      const count = this.bullets.reduce((count, bullet) => {
        return count + (bullet ? 1 : 0); }, 0);
        this.$emit('update-json', this.item.id, count);
    },
    updateInventory(which, amount){
      this.$emit('update-inventory', which, amount);
    }
  }
}
</script>

<style scoped>

.btn{
  width: 80px;
}
.my-card{
  width: 100%;
  max-width: 300px;
  background-color: white;
}
</style>
