<template>
  <q-page class="flex page-container">

    <drawer
      active="about-me"
    />

    <div>
      <div
        class="q-pa-xl text-h4 text-center">
        About Me
      </div>

      <div
        class="q-pa-md text-subtitle1 text-center">
        Hello there! My name is Aaron, and I am a software engineer at the <span><a href="https://www.openrobotics.org/">Open Source Robotics Foundation</a></span>.</br>
        I am very fond of topics in math, computer science, machine learning & vision, especially in the field of robotics.</br>
        In my free time, I like to build and learn new things, read books, or play volleyball.</br>
        Right now, I am having fun with the <span><a href="https://quasar.dev/">Quasar Framework</a></span>.
      </div>

      <div 
        class="row inline">

        <div class="q-pa-md column inline" style="max-width: 300px">
          <q-list bordered padding>
            <q-item>
              <q-item-section>
                <q-item-label overline>READING LIST</q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item
              v-for="(book, $index) in current_reading"
              :key="$index"
            >
              <q-item-section>
                {{ book.name }}
              </q-item-section>
              <q-item-section style="max-width: 150px">
                <q-item-label caption>
                  {{ book.author }}
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item
              v-for="(book, $index) in books"
              :key="$index"
            >
              <q-item-section>
                {{ book.name }}
              </q-item-section>
              <q-item-section style="max-width: 150px">
                <q-item-label caption>
                  {{ book.author }}
                </q-item-label>
              </q-item-section>
            </q-item>

          </q-list>
        </div>

      </div>
      
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'Publications',
  data() {
    return {
      variable_stiffness_expanded: false,
      stiffness_modulator_expanded: false,
      analytical_design_expanded: false,
      current_reading:  [
        {
          name: 'The Alchemist',
          author: 'Paulo Coelho'
        },
        {
          name: '12 Rules for Life',
          author: 'Jordan B. Peterson'
        }
      ],
      books: [
        {
          name: 'Crime and Punishment',
          author: 'Fyodor Dostoevsky'
        },
        {
          name: 'Rich Dad Poor Dad',
          author: 'Robert Kiyosaki'
        },
        {
          name: 'The Gulag Archipelago',
          author: 'Aleksandr Solzhenitsyn'
        },
        {
          name: 'The Book of Joy',
          author: 'Desmond Tutu, 14th Dalai Lama'
        },
        {
          name: '5 Love Languages',
          author: 'Gary Chapman'
        }
      ]
    }
  },
  components: {
    'drawer': require('components/Drawer.vue').default
  }
}
</script>

<style lang="scss">
  .active {
    color: #26A69A;
  }
</style>
