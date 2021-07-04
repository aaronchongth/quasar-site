<template>
  <q-page class="flex page-container">

    <drawer
      active="about-me"
    />

    <div>
      <div
        class="q-pa-lg text-h4">
        About Me
      </div>

      <q-markdown
        :src="AboutMe"
        class="q-pa-lg"
      />

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

        <!-- <div class="q-pa-md column inline" style="max-width: 300px">
          <q-list bordered padding>
            <q-item>
              <q-item-section>
                <q-item-label overline>RECENT HAIKUS I WROTE</q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item
              v-for="(haiku, $index) in haikus"
              :key="$index"
            >
              <q-item-label caption>
                {{ haiku.verse_1 }}
                <br/>
                {{ haiku.verse_2 }}
                <br/>
                {{ haiku.verse_3 }}
              </q-item-label>
            </q-item>

          </q-list>
        </div> -->

      </div>
      
    </div>

  </q-page>
</template>

<script>
import AboutMe from '../markdown/AboutMe.md'
export default {
  name: 'About Me',
  data() {
    return {
      AboutMe: AboutMe,
      current_reading:  [
        {
          name: '12 Rules for Life',
          author: 'Jordan B. Peterson'
        },
        {
          name: 'The Gulag Archipelago',
          author: 'Aleksandr Solzhenitsyn'
        }
      ],
      books: [
        {
          name: 'The Alchemist',
          author: 'Paulo Coelho'
        },
        {
          name: 'Crime and Punishment',
          author: 'Fyodor Dostoevsky'
        },
        {
          name: 'Rich Dad Poor Dad',
          author: 'Robert Kiyosaki'
        },
        {
          name: 'The Book of Joy',
          author: 'Desmond Tutu, 14th Dalai Lama'
        },
        {
          name: '5 Love Languages',
          author: 'Gary Chapman'
        }
      ],
      haikus: [
        {
          verse_1: 'Haikus are quite fun,',
          verse_2: 'they do not always make sense,',
          verse_3: 'appendectomy.'
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
