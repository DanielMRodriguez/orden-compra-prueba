<template>
  <div class="col-12 p-0 product" id="pro">
    <div class="media">
      <svg
        class="bd-placeholder-img mr-3 d-flex align-self-center"
        width="64"
        height="64"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: 80x64"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96" />
      </svg>
      <div class="media-body">
        <h4 class="name-product">{{ product.name }}</h4>
        <span class="badge badge-success">Disponible</span>
        <p class="sku-product">
          sku: <strong>{{ product.sku }}</strong>
        </p>
        <div>
          <label for="quantity" class="mr-3 cantidad-label-product"
            >Cantidad</label
          >
          <input
            type="number"
            class="ctr"
            name="quantity"
            id="quantity"
            v-model="product.quantity"
          />
          <div class="separator"></div>
          <a
            href="#"
            class="text-danger eliminar-product"
            v-on:click="$emit('deleteProduct', index)"
            >eliminar</a
          >
        </div>
      </div>
      <h4>{{ product.price | price }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product', 'index']
}
</script>

<style scoped>
.separator {
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  display: inline;
  margin: 0 30px;
}
.ctr {
  width: 6rem;
}
.ctr:focus {
  outline: 1px solid orange;
}
.sku-product {
  font-weight: 400;
}
.name-product {
  font-weight: 500;
  /* color: ; */
}
</style>
