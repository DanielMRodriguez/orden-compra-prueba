<template>
  <div class="add-content shadow">
    <form class="formulario fomr-group row">
      <div class="col-12 form-group">
        <label for="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ingresa el nombre del producto"
          class="form-control ctr"
          v-model="item.name"
        />
      </div>
      <div class="col-12 form-group">
        <label for="sku">sku</label>
        <input
          type="text"
          id="sku"
          name="sku"
          placeholder="Ingresa el sku"
          class="form-control ctr"
          v-model="item.sku"
        />
      </div>

      <div class="col-12 form-group">
        <label for="price">Precio</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="Ingresa el precio en pesos"
          class="form-control ctr"
          v-model="item.price"
        />
      </div>
      <div class="col-12 form-group">
        <label for="quantity">cantidad</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          class="form-control ctr"
          v-model="item.quantity"
        />
      </div>

      <div class="col-6 form-group">
        <button
          type="button"
          class="btn btn-block btn-danger"
          v-on:click="limpiarValores"
        >
          Cancelar
        </button>
      </div>
      <div class="col-6 form-group">
        <button
          type="button"
          class="btn btn-block btn-success"
          v-on:click="addProduct"
        >
          Agregar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: 'AddProduct',
  data: function() {
    return {
      item: {
        name: '',
        sku: '',
        price: 0,
        quantity: 0
      }
    }
  },
  methods: {
    addProduct: function() {
      let item = this.item
      let valid = this.validarDatos(
        item.name,
        item.sku,
        item.price,
        item.quantity
      )
      if (valid.error) {
        swal('Error', valid.message, 'error')
      } else {
        this.$emit('addProduct', this.item)
        swal('Exito', valid.message, 'success')
        this.limpiarValores()
      }
    },
    validarDatos: function(name, sku, price, quantity) {
      name = name.trim()
      if (name == '') {
        console.log(sku, price, quantity)
        return { error: true, message: 'Debes llenar el nombre del producto' }
      } else if (name.length < 3) {
        return {
          error: true,
          message:
            'EL nombre del producto debe tener al menos 3 caracteres de largo'
        }
      }

      sku = sku.trim()
      if (sku == '') {
        return { error: true, message: 'Debes llenar el sku del producto' }
      } else if (sku.length < 3) {
        return {
          error: true,
          message: 'EL nombre del sku debe tener al menos 3 caracteres de largo'
        }
      }

      let validPrice = isNaN(price)
      if (validPrice) {
        return { error: true, message: 'El precio debe ser un número' }
      } else if (sku.length < 3) {
        return {
          error: true,
          message: 'EL nombre del sku debe tener al menos 3 caracteres de largo'
        }
      }

      let validQuantity = isNaN(quantity)
      if (validQuantity) {
        return { error: true, message: 'La cantidad debe ser un número' }
      }

      return { error: false, message: 'El producto fue agregado correctamente' }
    },
    limpiarValores: function() {
      this.item = {
        name: '',
        sku: '',
        price: 0,
        quantity: 0
      }
    }
  }
}
</script>

<style>
.add-content {
  border-radius: 10px;
  background: white;
  padding: 30px;
  margin-top: 30px;
  width: 100%;
}
</style>
