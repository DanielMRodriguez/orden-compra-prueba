<template>
  <div class="total-content shadow">
    <div class="my-2">
      <h3 class="subtotal text-primary">Subtotal:</h3>
      <h3 class="subtotal-cant ">{{ total | price }}</h3>
    </div>

    <button class="btn btn-block btn-success my-2">Procesar pago</button>
  </div>
</template>

<script>
export default {
  props: ['total'],
  name: 'Total'
}
</script>

<style scope>
.total-content {
  padding: 1rem 10px;
  background: white;
  border-radius: 10px;
}
.subtotal,
.subtotal-cant {
  display: inline;
}
.subtotal-cant {
  float: right;
  color: orange;
}
</style>
