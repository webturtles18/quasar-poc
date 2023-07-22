<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">Todo</div>
        <div class="text-subtitle1">{{ todayDate }}</div>
      </div>
      <q-img
        src="~/assets/images/water.jpg"
        class="header-img absolute-top"
      ></q-img>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="400"
    >
      <q-scroll-area class="main-menu">
        <q-list padding>
          <q-item :to="{ name: 'todo' }" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section> Todo </q-item-section>
          </q-item>
          <q-item :to="{ name: 'help' }" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section> Help </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="~/assets/images/water.jpg"
        style="height: 192px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Priyank Khunt</div>
          <div>@webturtles</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, defineComponent, ref } from "vue";
import { date } from "quasar";

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const essentialLinks = computed(() => {
  return [
    {
      title: "Docs",
      caption: "quasar.dev",
      icon: "school",
      link: "https://quasar.dev",
    },
    {
      title: "Github",
      caption: "github.com/quasarframework",
      icon: "code",
      link: "https://github.com/quasarframework",
    },
    {
      title: "Discord Chat Channel",
      caption: "chat.quasar.dev",
      icon: "chat",
      link: "https://chat.quasar.dev",
    },
    {
      title: "Forum",
      caption: "forum.quasar.dev",
      icon: "record_voice_over",
      link: "https://forum.quasar.dev",
    },
    {
      title: "Twitter",
      caption: "@quasarframework",
      icon: "rss_feed",
      link: "https://twitter.quasar.dev",
    },
    {
      title: "Facebook",
      caption: "@QuasarFramework",
      icon: "public",
      link: "https://facebook.quasar.dev",
    },
    {
      title: "Quasar Awesome",
      caption: "Community Quasar projects",
      icon: "favorite",
      link: "https://awesome.quasar.dev",
    },
  ];
});

const todayDate = computed(() => {
  const timeStamp = Date.now();
  return date.formatDate(timeStamp, "dddd D MMMM");
});
</script>

<style lang="scss">
.header-img {
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  filter: grayscale(100%);
}
.main-menu {
  height: calc(100% - 192px);
  margin-top: 192px;
  border-right: 1px solid #ddd;
}
</style>
