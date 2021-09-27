<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="List" href="/tabs/tab1">
          <ion-icon :icon="list" />
          <ion-label>List</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="Add" href="/tabs/tab2">
          <ion-icon :icon="add" />
          <ion-label>Add</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="Search" href="/tabs/tab3">
          <ion-icon :icon="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { list, search, add } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      list, 
      search, 
      add,
    }
  }
}
</script>