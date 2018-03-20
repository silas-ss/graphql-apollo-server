<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" class="glossy">
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        Tasks
      </q-toolbar-title>
    </q-toolbar>

    <!--
      Replace following <div> with
      <router-view /> component
      if using subRoutes
    -->
    <div class="layout-padding">
      <q-btn color="primary" @click="modalCreate = true">Create</q-btn>

      <q-list highlight>
        <q-list-header>Tasks</q-list-header>
        <q-item link v-for="task in findAllTasks" :key="task.id">
          <q-item-main :label="task.title" />
        </q-item>
      </q-list>
    </div>
  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QItemTile,
  QModal,
  QModalLayout,
  QInput,
  QPopover
} from 'quasar'

import {
  TASKS_QUERY
} from 'src/queries/task'

let self

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QItemTile,
    QModal,
    QModalLayout,
    QInput,
    QPopover
  },
  data () {
    self = this
    return {
      findAllTasks: []
    }
  },

  apollo: {
    findAllTasks: {
      query: TASKS_QUERY
    }
  },

  created () {
    self.findAllTasks = []
  }
}
</script>

<style lang="stylus">
.logo-container
  width 255px
  height 242px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d
</style>
