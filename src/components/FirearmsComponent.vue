<template>
  <div class="q-pa-lg example-row-equal-width">
    <div class="row justify-center main">
      <div class="col" style="align-items: center;">
        <div>
          <q-card dark bordered class="my-card">
            <q-card-section >
              <div class="text-h6 title" style="text-transform: uppercase;">Firearm Properties</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              <span style="color: burlywood;"><b>Ammunition: </b></span> You can discharge a firearm only if appropriate ammunition has been loaded into the weapon.
Each time you discharge a firearm, you expend one piece
of ammunition. Firearm ammunition is destroyed on use. <br />
              <span style="color: burlywood;"><b>Kick: </b></span> This weapon can be used with one or two hands.
You have disadvantage on ranged attack rolls you make
with it using one hand, unless your Strength score is equal
to or higher than the weapon’s kick score. <br />
              <span style="color: burlywood;"><b>Loud: </b></span> Attacks with this weapon emit a piercing crack,
audible out to 300 feet.<br />
              <span style="color: burlywood;"><b>Pocket: </b></span> You have advantage on Dexterity (Sleight of
Hand) checks to conceal this weapon. (The pocket property can also be applied to blowguns, daggers, darts, hand crossbows, and slings) <br />
<span style="color: burlywood;"><b>Reload: </b></span> This weapon can be fired a number of times
equal to its reload score before it must be reloaded before
it can be fired again. Reloading takes an action or bonus
action. You must have a free hand to reload a firearm. <br />
<span style="color: burlywood;"><b>Special weapons - Shotgun: </b></span> The damage of a shotgun increases to 1d12
when attacking a target within 10 feet of you. <br />
            </q-card-section>
          </q-card>

          <q-card dark bordered class="my-card">
            <q-card-section >
              <div class="text-h6 title" style="text-transform: uppercase;">Firearm Ammunition</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              Ammunition used by firearms is presented here:
              <br />
        <q-img
          src="../assets/ammo.png"
          width="400px"
          class="q-mt-sm q-mb-sm" />
          <br />
<span style="color: burlywood;"><b>Special Ammunition - Heat Seeker: </b></span> When you attack a creature that isn’t a
Construct or an Undead using this ammunition, you gain a
+1 bonus to the attack roll, and the target gains no benefit
from cover for the attack. <br />

<q-img
          src="../assets/firearms.png"
          width="600px"
          class="q-mt-sm q-mb-sm" />
          <br />
          <span style="color: burlywood;"><b>Incendiary: </b></span> Attacks using this ammunition that hit deal
fire damage instead of the weapon’s normal damage type,
causes the target to start burning (1d6), and ignite flammable objects that aren’t being worn or carried.<br />
<span style="color: burlywood;"><b>Burning: </b></span>  <br />
•A burning creature takes fire damage at the start of
each of its turns. The amount of damage is shown in
the triggering effect in parentheses. <br />
• The creature sheds bright light in a 20-foot radius and
dim light for an additional 20 feet.<br />
• If a creature is subjected to burning from multiple
sources, only the highest source of damage applies;
they aren’t added together. For example, a creature
subjected to burning (1d6) and burning (2d6) takes
2d6 fire damage at the start of each of its turns.<br />
• The condition ends if the creature or another creature
within 5 feet of it uses an action to put out the flames,
or some other effect douses it, such as being doused
with water<br />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.example-row-equal-width {
  width: auto;
min-width: 800px;
max-width: 1000px;
margin: 0 auto;
position: relative;
}

.example-row-equal-width .row > div {
padding: 10px 15px;
}


.example-row-equal-width .row + .row {
margin-top: 1rem;
}

.my-card {
width: 950px;
min-width: 650px;
max-width: 950px;
margin-bottom: 10px;
}

.title {
font-weight: 700;
color: #ff5454;
text-align: start;
}

.content {
text-align: start;
color: white;
}

</style>
