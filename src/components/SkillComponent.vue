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
        <q-btn no-caps color="primary" class="btn" @click="reloadOne()">Reload</q-btn>
        <q-btn no-caps color="primary" class="btn" @click="reloadAll()">Reload All</q-btn>
        <q-btn no-caps color="red" class="btn" @click="fire()">Fire</q-btn>
      </q-card-actions>
    </div>
    </q-card>
  </div>
</template>

<script>
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
      bullets: [false, false, false, false, false, false]
    }
  }, 
  mounted() {
    this.updateBullets();
  },
  methods :{
    updateBullets() {
      const { inStock } = this.item;

      // Update the bullets array based on the value of inStock
      for (let i = 0; i < this.bullets.length; i++) {
        this.bullets[i] = i < inStock;
      }
    },
    reloadAll(){
      if(this.item.id != 5){
      this.bullets = this.bullets.map(() => true);
      } else{
        this.bullets[0] = true;
        this.bullets[1] = true;
      }
      const count = this.bullets.reduce((count, bullet) => {
        return count + (bullet ? 1 : 0); }, 0);
      this.$emit('update-json', this.item.id, count);
    },
    reloadOne() {
    const len = this.item.id == 5 ? 2 :this.bullets.length;
    for (let i = 0; i < len; i++) {
      if (this.bullets[i] !== true) {
        this.bullets[i] = true;
        break;
        }
      }
      const count = this.bullets.reduce((count, bullet) => {
        return count + (bullet ? 1 : 0); }, 0);
      this.$emit('update-json', this.item.id, count);
    },
    fire(){
      for (let i = this.bullets.length - 1; i >= 0; i--) {
      if (this.bullets[i] === true) {
        this.bullets[i] = false;
        break;
      }
    }
    const count = this.bullets.reduce((count, bullet) => {
        return count + (bullet ? 1 : 0); }, 0);
    this.$emit('update-json', this.item.id, count);
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
