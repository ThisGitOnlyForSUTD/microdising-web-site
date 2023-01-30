import productList from "~/locals/product"

export const state = () => ({
  productList,
  selectesProduct: null

})

export const mutations = {
  select(state, payload) {
    state.selectesProduct = state.productList.find(e => e.id === payload)
  }
}

export const getters = {
  SHOW_PRODUCTS(state) {
    return state.productList
  },
  SELCETED_PRODUCT (state) {
    return state.selectesProduct
  }
}

