<template>
  <div class="container-fluid" id="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 py-4">
          <h1>Ordenes de compra</h1>
        </div>

        <div class="col-12 col-md-10">
          <Tabla></Tabla>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabla from '../components/Tabla.vue'
export default {
  components: { Tabla }
}
</script>

<style>
#home {
  background-color: #eef0f8;
}
</style>
