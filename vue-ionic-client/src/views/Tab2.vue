<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Add</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-item>
            <div v-if="tutorial.published">
                <ion-icon :icon="cloudyOutline" />
            </div>
            <div v-else>
                <ion-icon :icon="cloudOfflineOutline" />
            </div>
            <ion-label class="ion-text-wrap">
                <h2>
                    <span class="date">
                        <ion-toggle
                            v-if="tutorial.published"
                            :checked="tutorial.published"
                            @click="setPublished(false)"/>
                        <ion-toggle
                            v-else
                            :checked="tutorial.published"
                            @click="setPublished(true)"/>
                    </span>
                </h2>
            </ion-label>
        </ion-item>
      
        <div class="ion-padding">
            <h1><ion-label position="stacked">Title</ion-label></h1>
            <input type="text" class="form-control" placeholder="Title" v-model="tutorial.title"/>
            <h1 style="margin-top:32px"><ion-label position="stacked">Description</ion-label></h1>
            <textarea type="text" class="form-control" placeholder="Description" v-model="tutorial.description"/>

            <section>
                <ion-button expand="block" @click="saveTutorial()" color="success">Save</ion-button>
            </section>
        </div>
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
  IonIcon, 
  IonItem, 
  IonLabel, 
  IonToggle,
  IonButton,
  toastController
} from '@ionic/vue';
import { cloudOfflineOutline, cloudyOutline } from "ionicons/icons";
import { defineComponent } from 'vue';
import TutorialDataService from '../services/TutorialDataService';
import ITutorialType from '../types/tutorial.type';

export default defineComponent({
  name: 'Tab2',
  data() {
    return {
      tutorial: {
          id: null,
          title: "",
          description: "",
          published: false
      },
      message: '',
      submitted: false,
      cloudOfflineOutline, 
      cloudyOutline
    }
  },
  methods: {
    async showToast(msg: string) {
        const toast = await toastController.create({
            color: 'dark',
            duration: 2000,
            message: msg
        });

        await toast.present();
    },

    setPublished(status: boolean) {
      console.log(status);
      if (this.tutorial != null) {
          this.tutorial.published = status;
      }
    },

    saveTutorial() {
      if (this.tutorial != null && this.tutorial.published != null) {
        const data: ITutorialType = {
          title: this.tutorial.title,
          description: this.tutorial.description,
          published: this.tutorial.published,
        };

        TutorialDataService.create(data)
          .then(response => {
            console.log(response.data);
            this.submitted = true;
            this.message = 'Tutorial was deleted successfully!';
            this.refresh();
            this.showToast(this.message)
            this.$router.push({ name: "tabs" });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },

    refresh(){
      this.submitted = false;
      this.tutorial = { id: null, title: "", description: "", published: false };
    },

  },
  components: { 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonPage,
    IonIcon, 
    IonItem, 
    IonLabel, 
    IonToggle,
    IonButton
  },
});
</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h2 {
  font-weight: 600;
}

ion-item .date {
  float: right;
  align-items: center;
  display: flex;
}

ion-item ion-icon {
  font-size: 42px;
  margin-right: 8px;
}

ion-item ion-note {
  font-size: 15px;
  margin-right: 12px;
  font-weight: normal;
}

input {
    font-size: 15px;
    width: 100%;
    margin-top: 8px;
}

textarea {
    font-size: 15px;
    height: 250px;
    width: 100%;
    resize: none;
    margin-top: 8px;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
}

p {
  line-height: 22px;
}

ion-toggle {
  --handle-background-checked: #fff url(/assets/power-icon.png) no-repeat center / contain;
}

section {
    margin-top: 1em;
    margin-bottom: 2.5em;
}
</style>