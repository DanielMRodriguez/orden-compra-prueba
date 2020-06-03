<template>
  <div class="container-fluid cart pt-5">
    <div class="container">
      <div class="row">
        <div class="col-12 py-2">
          <h1 class="text-primary">Orden de compra</h1>
        </div>
        <div class="col-8">
          <h2 class="text-secondary">Carrito</h2>

          <p class="ml-auto mr-4 price-title">precio por unidad</p>
        </div>
        <hr />
        <div class="col-8">
          <div class="list-group shadow">
            <div
              v-for="(item, index) in products"
              v-bind:key="item.sku"
              href="#"
              class="list-group-item list-group-item-action"
            >
              <Product
                v-bind:product="item"
                v-on:deleteProduct="deleteProduct"
                v-bind:index="index"
              ></Product>
            </div>
          </div>
        </div>
        <div class="col-4">
          <Total v-bind:total="total" />

          <Add-product v-on:addProduct="addProduct" />
        </div>
      </div>
      <footer class="row py-2">
        <div class="col-12 text-center">
          <a href="#">Aviso de privacidad</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Product from './components/Product.vue'
import Total from './components/Total.vue'
import AddProduct from './components/Add-product.vue'
export default {}
</script>
