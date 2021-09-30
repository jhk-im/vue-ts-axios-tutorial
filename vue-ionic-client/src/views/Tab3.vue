<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Search</ion-title>
      </ion-toolbar>
    </ion-header>
    
     <ion-content :fullscreen="true">
      <ion-searchbar @ionChange="searchWithTitle($event.value)" placeholder="Search" v-model="title" />
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
  IonItem,
  IonSearchbar
} from '@ionic/vue';
import { defineComponent } from 'vue';
import TutorialListItem from '../components/TutorialListItem.vue';
import TutorialDataService from '../services/TutorialDataService';

export default defineComponent({
  name: 'Tab3',
  data() {
    
    return {
      tutorials: [],
      title: ''
    }
  },
  methods: {
    searchWithTitle() {
      this.tutorials = [];
      if (this.title != '') {
        TutorialDataService.findByTitle(this.title)
        .then(response => {
          this.tutorials = response.data;
          console.log(this.title);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      }
    }
  },
  updated() {
    this.tutorials = [];
    this.title = '';
  },
  components: { 
    TutorialListItem,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonPage,
    IonList,
    IonItem,
    IonSearchbar
  }
});
</script>