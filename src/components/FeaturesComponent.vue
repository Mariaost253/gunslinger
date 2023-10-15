<template>
  <div class="q-pa-lg example-row-equal-width">
    <div class="row justify-center main">
      <div class="col" style="align-items: center;">
        <div>
          <q-card dark bordered class="my-card">
            <q-card-section class="row justify-between no-padding q-mt-xs">
              <div class="text-h6 title" style="text-align: start;">DEADEYE</div>
              <div class="text-h6 title" style="text-align: end;">1ST</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              In combat, you find your flow with deadly efficiency.
              Whenever you hit a creature with a ranged weapon attack,
              the lowest number you must roll on the d20 to score a critical hit with subsequent ranged weapon attacks decreases
              by one. You can gain this benefit multiple times, but it can't
              reduce the threshold for scoring a critical hit below 16.
              You lose this benefit if you miss with an attack, you become incapacitated, or if your turn ends and you haven't
              attacked a creature since your last turn.
              From 14th level, whenever you gain this benefit, you
              can gain it one additional time, but it still can't reduce the
              threshold for scoring a critical hit below 16.
            </q-card-section>
          </q-card>

          <q-card dark bordered class="my-card">
            <q-card-section class="row justify-between no-padding q-mt-xs">
              <div class="text-h6 title" style="text-align: start;">BAD MEDICINE</div>
              <div class="text-h6 title" style="text-align: end;">1ST</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              You can roll one additional weapon damage die when determining the extra damage for a critical hit with a firearm.
              The number of additional dice increases as you gain levels
              in this class, as shown in the Bad Medicine column of the
              Gunslinger table.
            </q-card-section>
          </q-card>

          <q-card dark bordered class="my-card">
            <q-card-section class="row justify-between no-padding q-mt-xs">
              <div class="text-h6 title" style="text-align: start;">GRIT</div>
              <div class="text-h6 title" style="text-align: end;">2ND</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              The hard-fought battles of your past have instilled in you a
              wellspring of resolve, which is represented by grit points.
              You have a number of grit points equal to 1 + your Wisdom
              modifier (minimum of 1 point).
              You can spend these points to fuel various grit features.
              You start knowing four such features: Buck Up, Bullet
              Time, Covering Fire, and Dodge Roll. You learn more grit
              features as you gain levels in this class.
              When you spend a grit point, it is unavailable until you
              regain it. You regain 1 expended grit point whenever you
              score a critical hit against a hostile creature, and you regain all expended grit points when you finish a short or
              long rest.<br />
              <span style="color: burlywood;"><b>BUCK UP: </b></span> You can spend 1 grit point as a bonus action to spend one
              or more Hit Dice, following the normal rules for regaining
              hit points using Hit Dice. The maximum number of Hit
              Dice you can spend each time you use this feature equals
              your proficiency bonus. <br />
              <span style="color: burlywood;"><b>BULLET TIME: </b></span> When a creature you can see makes a ranged attack against
              you, you can spend 1 grit point to impose disadvantage on
              the attack roll. <br />
              <span style="color: burlywood;"><b>COVERING FIRE: </b></span> While you are holding a firearm, when a creature you can
              see within 60 feet of you makes an attack against a creature other than you, you can spend 1 grit point as a reaction
              to impose disadvantage on the attack roll.<br />
              <span style="color: burlywood;"><b>DODGE ROLL: </b></span> You can spend 1 grit point as a bonus action to move up
              to 10 feet without provoking opportunity attacks. You can't
              take this bonus action if your speed is 0. <br />
            </q-card-section>
          </q-card>

          <q-card dark bordered class="my-card">
            <q-card-section class="row justify-between no-padding q-mt-xs">
              <div class="text-h6 title" style="text-align: start; text-transform: uppercase;">Quickdraw</div>
              <div class="text-h6 title" style="text-align: end;">2ND</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              You have advantage on initiative rolls. In addition, whenever you draw or stow a firearm, you can draw or stow any
               number of weapons as part of the same move or action.
            </q-card-section>
          </q-card>

          <q-card dark bordered class="my-card">
            <q-card-section class="row justify-between no-padding q-mt-xs">
              <div class="text-h6 title" style="text-align: start; text-transform: uppercase;">Gunslinger Trail</div>
              <div class="text-h6 title" style="text-align: end; text-transform: uppercase;">3rd</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              You choose a path to walk: Maverick, Beastrider, Enforcer,
Preacher, or Revelator, each of which is detailed at the end
of the class’s description. Your choice grants you features
at 3rd level and again at 6th, 10th, and 17th level.
            </q-card-section>
          </q-card>

          <q-card dark bordered class="my-card">
            <q-card-section class="row justify-between no-padding q-mt-xs">
              <div class="text-h6 title" style="text-align: start; text-transform: uppercase;">Ability Score Improvement</div>
              <div class="text-h6 title" style="text-align: end; text-transform: uppercase;">4th</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              At 4th level, and again at 8th, 12th, 16th, and 19th level,
you can increase one ability score of your choice by 2, or
you can increase two ability scores of your choice by 1. As
normal, you can’t increase an ability score above 20 using
this feature
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col">
        <q-card dark bordered class="my-card">
            <q-card-section class="row justify-between no-padding q-mt-xs">
              <div class="text-h6 title" style="text-align: start; text-transform: uppercase;">Extra Attack</div>
              <div class="text-h6 title" style="text-align: end; text-transform: uppercase;">5th</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              You can attack twice, instead of once, whenever you take
the Attack action on your turn.
            </q-card-section>
          </q-card>

          <q-card dark bordered class="my-card">
            <q-card-section class="row justify-between no-padding q-mt-xs">
              <div class="text-h6 title" style="text-align: start; text-transform: uppercase;">Lock n’ Load</div>
              <div class="text-h6 title" style="text-align: end; text-transform: uppercase;">5th</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              You can load or reload a firearm you are holding as part of
your move or your action.
            </q-card-section>
          </q-card>

          <q-card dark bordered class="my-card">
            <q-card-section class="row justify-between no-padding q-mt-xs">
              <div class="text-h6 title" style="text-align: start; text-transform: uppercase;">Ace in the Hole</div>
              <div class="text-h6 title" style="text-align: end; text-transform: uppercase;">7th</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              Once per turn when you miss with an attack roll, you can
spend 1 grit point to add your Wisdom modifier to the roll,
potentially turning the miss into a hit.
            </q-card-section>
          </q-card>

          <q-card dark bordered class="my-card">
            <q-card-section class="row justify-between no-padding q-mt-xs">
              <div class="text-h6 title" style="text-align: start; text-transform: uppercase;">Born Lucky</div>
              <div class="text-h6 title" style="text-align: end; text-transform: uppercase;">9th</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              When you are forced to make a saving throw, you can
spend 1 grit point to make it with advantage.
            </q-card-section>
          </q-card>

          <q-card dark bordered class="my-card">
            <q-card-section class="row justify-between no-padding q-mt-xs">
              <div class="text-h6 title" style="text-align: start; text-transform: uppercase;">Frontier Justice</div>
              <div class="text-h6 title" style="text-align: end; text-transform: uppercase;">11th</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              When a creature you can see willingly moves into a space
within 10 feet of you while you are wielding a firearm, you
can use your reaction to make one ranged weapon attack
against that creature.
            </q-card-section>
          </q-card>

          <q-card dark bordered class="my-card">
            <q-card-section class="row justify-between no-padding q-mt-xs">
              <div class="text-h6 title" style="text-align: start; text-transform: uppercase;">Skullcracker</div>
              <div class="text-h6 title" style="text-align: end; text-transform: uppercase;">13th</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              When you deal damage with a ranged weapon attack to a
creature that is concentrating, the target has disadvantage
on the saving throw it makes to maintain its concentration.
If the attack is a critical hit, the target automatically fails
this saving throw.
            </q-card-section>
          </q-card>

          <q-card dark bordered class="my-card">
            <q-card-section class="row justify-between no-padding q-mt-xs">
              <div class="text-h6 title" style="text-align: start; text-transform: uppercase;">cheat death</div>
              <div class="text-h6 title" style="text-align: end; text-transform: uppercase;">15th</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              When you are reduced to 0 hit points but not killed outright, you can spend 1 grit point to drop to 1 hit point instead. Each time you do so, you gain 1 level of exhaustion.
            </q-card-section>
          </q-card>

          <q-card dark bordered class="my-card">
            <q-card-section class="row justify-between no-padding q-mt-xs">
              <div class="text-h6 title" style="text-align: start; text-transform: uppercase;">True Grit</div>
              <div class="text-h6 title" style="text-align: end; text-transform: uppercase;">18th</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              When you start your turn and have no grit points remaining, you regain 1 grit point.
            </q-card-section>
          </q-card>

          <q-card dark bordered class="my-card">
            <q-card-section class="row justify-between no-padding q-mt-xs">
              <div class="text-h6 title" style="text-align: start; text-transform: uppercase;">Golden Gun</div>
              <div class="text-h6 title" style="text-align: end; text-transform: uppercase;">20th</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section class="content">
              You have advantage on ranged weapon attack rolls while the threshold for scoring a critical hit is 16 or lower.
            </q-card-section>
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
  padding: 10;
}
.col{
  padding-bottom: 0px !important;
  padding-top: 0px !important;
}
.my-card {
  width: 850px;
  min-width: 650px;
  max-width: 850px;
  margin-bottom: 1px;
} 
}
</style>
