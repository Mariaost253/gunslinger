<template>
  <div class="q-pa-lg example-row-equal-width">
    <div class="row justify-center main">
      <div class="col" style="align-items: center;">
       <div >
      <q-card dark bordered class="my-card">
         <q-card-section>
           <div class="text-h6 title">CREATING A GUNSLINGER</div>
         </q-card-section>
         <q-separator dark inset />
         <q-card-section class="content">
           When building a gunslinger, consider how you came to live
       by the gun. Was it for justice? Fame? To protect someone
       or something you hold dear? And what drives you now?
       The reassuring clink of coin in your pocket? The righteous
       satisfaction of vanquishing evil? Maybe past transgressions
       weigh heavy on your heart, driving you to find redemption? Or do you seek revenge? Who is the character behind the gun?
         </q-card-section>
       </q-card>
   
       <q-card dark bordered class="my-card">
         <q-card-section>
           <div class="text-h6 title">QUICK BUILD</div>
         </q-card-section>
         <q-separator dark inset />
         <q-card-section class="content">
           You can make a gunslinger quickly by following these suggestions. First, make Dexterity your highest ability score,
          followed by Wisdom. Second, choose the criminal or folk hero background.
         </q-card-section>
       </q-card>
   
       <q-card dark bordered class="my-card">
         <q-card-section>
           <div class="text-h6 title">MULTICLASSING</div>
         </q-card-section>
         <q-separator dark inset />
         <q-card-section class="content">
           If your group uses the optional rule on multiclassing in the
          basic rules, here’s what you need to know if you choose
            gunslinger as one of your classes.
           <span style="color: burlywood;"><b>Ability Score Minimum.</b></span> As a multiclass character, you
           must have Dexterity and Wisdom scores of at least 13 to
           take a level in this class, or to take a level in another class
           if you are already a gunslinger.
           <span style="color: burlywood;"><b>Proficiencies Gained.</b></span> If gunslinger isn’t your initial
          class, here are the proficiencies you gain when you take
            your first level as a gunslinger: light armor, simple weapons, firearms.
         </q-card-section>
       </q-card>
   
       <q-card dark bordered class="my-card">
         <q-card-section>
           <div class="text-h6 title">HIT POINTS</div>
         </q-card-section>
         <q-separator dark inset />
         <q-card-section class="content">
           <span style="color: burlywood;"><b>Hit Dice:</b></span> 1d8 per gunslinger level <br />
           <span style="color: burlywood;"><b>Hit Points at 1st Level:</b></span> 8 + your Constitution modifier <br />
           <span style="color: burlywood;"><b>Hit Points at Higher Levels:</b></span> 1d8 (or 5) + your
           Constitution modifier per gunslinger level after 1st
         </q-card-section>
       </q-card>

       <q-card dark bordered class="my-card">
         <q-card-section>
           <div class="text-h6 title">PROFICIENCIES</div>
         </q-card-section>
         <q-separator dark inset />
         <q-card-section class="content">
           <span style="color: burlywood;"><b>Armor:</b></span> Light armor <br />
           <span style="color: burlywood;"><b>Weapons:</b></span> : Simple weapons, firearms, whips <br />
           <span style="color: burlywood;"><b>Tools:</b></span>  Thieves’ tools, tinker’s tools, or one type of gaming set <br />
           <span style="color: burlywood;"><b>Saving Throws:</b></span> Dexterity, Charisma
           Constitution modifier per gunslinger level after 1st <br />
           <span style="color: burlywood;"><b>Skills:</b></span> Choose two from Animal Handling, Athletics,
                                       Insight, Intimidation, Perception, Sleight of Hand,
                                       Stealth, and Survival
         </q-card-section>
       </q-card>

       <q-card dark bordered class="my-card">
         <q-card-section>
           <div class="text-h6 title">EQUIPMENT</div>
         </q-card-section>
         <q-separator dark inset />
         <q-card-section class="content">
            You start with the following equipment, in addition to the equipment granted by your background: <br />
           <span style="color: burlywood;"><b>1.</b></span> leather armor and a simple weapon of your choice <br />
           <span style="color: burlywood;"><b>2.</b></span> a sidearm and 20 rounds <br />
           <span style="color: burlywood;"><b>3.</b></span> (a) a hand cannon and 20 rounds or (b) a repeating rifle and 20 rounds or (c) a sawed-off shotgun and 20 shotshells <br />
           <span style="color: burlywood;"><b>4.</b></span> (a) a dungeoneer’s pack or (b) an explorer’s pack <br />
           If you forgo this starting equipment, as well as the items offered by your background, you start with 6d4 × 10 gp to buy your equipment.
        </q-card-section>
       </q-card>
     </div>
     
   </div>
   <div class="col">
       <q-card style="height: 500px; max-width: 400px;" class="my-card-img" dark bordered >
         <img src="../assets/prof.png"
         >
       </q-card>
     </div>
   
   </div>
   
   </div>
   </template>
  <style scoped>
.example-row-equal-width {
width: auto;
min-width: 800px;
max-width: 1600px;
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
width: 750px;
min-width: 650px;
max-width: 750px;
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

@media (max-width: 1630px) {
.example-row-equal-width {
width: auto;
min-width: 800px;
max-width: 1000px;
margin: 0 auto;
position: relative;
}
.example-row-equal-width .main {
  flex-direction: column;
}

.example-row-equal-width .main > div {
  width: 100%;
}

.col{
  padding-bottom: 0px !important;
  padding-top: 0px !important;
}

.my-card {
  width: 850px;
  min-width: 650px;
  max-width: 850px;
  margin-bottom: 20px;
} 
}
  </style>
  