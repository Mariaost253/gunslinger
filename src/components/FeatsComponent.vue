<template>
  <div class="q-pa-lg example-row-equal-width">
    <div class="row justify-center main">
      <div class="col" style="align-items: center;">
        <div>
          <q-card dark bordered class="my-card">
            <q-card-section >
              <div class="text-h6 title" style="text-transform: uppercase;">Bully</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              You are adept at using firearms in close quarters, gaining the following benefits:<br/>
              • Being within 5 feet of a hostile creature doesn’t impose disadvantage on your ranged attack rolls.<br/>
• Once per turn, when you hit a creature within 10 feet
of you with a ranged attack using a firearm, you can
force the target to make a Strength saving throw (DC
equal to 8 + your proficiency bonus + your Dexterity
modifier). On a failed save, you push the target 5 feet
away from you and knock it prone.<br/>
            </q-card-section>
          </q-card>

          <q-card dark bordered class="my-card">
            <q-card-section >
              <div class="text-h6 title" style="text-transform: uppercase;">Marksman</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              You are an expert at hitting your mark with ranged weapons, gaining the following benefits:<br/>
              • Being prone doesn’t impose disadvantage on your
ranged weapon attacks. <br/>
• Attacking a prone target doesn’t impose disadvantage
on your ranged weapon attack rolls if the target is
within your weapon’s normal range. <br/>
• If you haven’t moved since the start of your turn, you
can use a bonus action to steady your aim. Until the
end of your next turn, you have advantage on the next
ranged weapon attack roll you make. This effect ends
early if you move or take damage.<br/>
            </q-card-section>
          </q-card>

          <q-card dark bordered class="my-card">
            <q-card-section >
              <div class="text-h6 title" style="text-transform: uppercase;">Pistolero</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              Prerequisite: Proficiency with pistols, 
Your speed and skill with a six-gun is unmatched. You gain
the following benefits:<br/>
• When you take the Attack action and attack with a
one-handed weapon, you can use a bonus action to
attack with a pistol you are holding in your other hand. <br/>
• If you are surprised at the beginning of combat and
aren’t incapacitated, you can act normally on your first
turn, but only if you attack with a pistol before doing
anything else on that turn.<br/>
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
