<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>List</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
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
import TutorialListItem from '../components/TutorialListItem.vue';
import { defineComponent } from 'vue';
import TutorialDataService from '../services/TutorialDataService';

export default defineComponent({
  name: 'Tab1',
  data() {
    return {
      tutorials: [],
      currentMessage: null,
      currentIndex: -1
    }
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data)
        })
        .catch(e => {
            console.log(e)
        });
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentMessage = null;
      this.currentIndex = -1;
    },

    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then(response => {
          this.refreshList();
          console.log(response.data);
        })
        .catch(e => {
            console.log(e)
        });
    },
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
  },
  mounted() {
    this.retrieveTutorials();
  },
  updated() {
    this.refreshList();
  }
});
</script> 