<template>
  <q-layout>
    <q-page-container>
      <q-page
          class="row"
          style="background: linear-gradient(#ffffff, #dedeff);"
      >
        <!-- page content -->
        <div class="column q-pa-lg">
          <div class="row">

            <div class="q-pa-md row justify-center">
              <div style="width: 100%; max-width: 400px">
                <q-chat-message
                    name="me"
                    :text="['hey, how are you?']"
                    stamp="7 minutes ago"
                    sent
                    bg-color="yellow-5"
                />
                <q-chat-message
                    name="Jane"
                    :text="['doing fine, how r you?',
                    'I just feel like typing a really, really, REALLY long message to annoy you...'
                    ]"
                    size="6"
                    stamp="4 minutes ago"
                    text-color="white"
                    bg-color="primary"
                />
              </div>
            </div>

          </div>
        </div>
        <!-- /page content -->
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
