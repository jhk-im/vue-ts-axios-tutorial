<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>List</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="false">
      <ion-list >
        <ion-item v-for="(item, index) in tutorials" :key="index">
            <TutorialListItem :key="item.id" :tutorial="item" />
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList,
  IonItem
} from '@ionic/vue';
import { defineComponent } from 'vue';
import TutorialListItem from '../components/TutorialListItem.vue';
import TutorialDataService from '../services/TutorialDataService';

export default defineComponent({
  name: 'Tab1',
  data() {
    return {
      tutorials: []
    }
  },
  methods: {
    getTutorials() {
      TutorialDataService.getAll()
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data)
        })
        .catch(e => {
            console.log(e)
        });
    },

    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then(response => {
          this.getTutorials();
          console.log(response.data);
        })
        .catch(e => {
            console.log(e)
        });
    },
  },
  mounted() {
    this.getTutorials();
  },
  updated() {
    this.getTutorials();
  },
  components: { 
    TutorialListItem, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonPage, 
    IonList,
    IonItem
  }
});
</script> 