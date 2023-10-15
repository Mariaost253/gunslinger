<template>
  <div class="q-pa-lg example-row-equal-width">
    <div class="row justify-center main">
      <div class="col" style="align-items: center;">
        <div>
          <q-card dark bordered class="my-card">
            <q-card-section >
              <div class="text-h6 title" style="text-transform: uppercase;">Upgrading Firearms</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              The range of upgrades available for firearms is shown in
the Firearm Modifications table.<br/>
<span style="color: burlywood;"><b>Muzzle Devices</b></span><br />
• A muzzle device can only be attached to a firearm with
the threaded barrel tag.<br/>
• Only one muzzle device can be attached to a firearm
at a time.<br/>
• As an action, you can use a free hand to attach a
muzzle device to a firearm you are holding, or to
remove or replace an existing muzzle device.<br/>
            </q-card-section>
          </q-card>
          <q-card dark bordered class="my-card">
            <q-card-section >
              <div class="text-h6 title" style="text-transform: uppercase;">Runesmithing</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              The unique properties of the magic items in the preceding
appendix are presented here, categorized by rarity for use
as runestones.<br/>
<span style="color: darkred;"><b>New Runestones</b></span><br />
           <span style="color: burlywood;"><b>Common:</b></span> Hawkeye <br />
           <span style="color: burlywood;"><b>Uncommon: </b></span>Prism, Sureshot, Underdog <br />
           <span style="color: burlywood;"><b>Rare: </b></span>Death Sentence, Fireball, Ghostbuster<br />
           <span style="color: burlywood;"><b>Very Rare: </b></span>Firefly, Kingslayer<br />
           <span style="color: burlywood;"><b>Legendary: </b></span>Curtain Call<br />
            </q-card-section>
          </q-card>

          <q-card dark bordered class="my-card">
            <q-img
          src="../assets/mods.png"
          width="800px"
          height="800px"
          class="q-mt-sm q-mb-sm" />
          <br />
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
color: darkred;
text-align: start;
}

.content {
text-align: start;
color: white;
}

</style>
