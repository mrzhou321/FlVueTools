<template>
  <div>
    <div class="title">{{ name }}</div>
    <table border="1" style="border-collapse:collapse;border-color: #a0c6e5;" class="main-table">
      <thead>
      <tr>
        <td v-for="item in columns" :key="item.key">
          <l-f-checkbox v-if="item.type === 'selectable'" :name="item.title"></l-f-checkbox>
          {{ item.title }}
        </td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(dataItem,index) in dataSource" :key="index">
        <td v-if="columns[index].type === 'selectable'">
          <l-f-checkbox v-model="dataItem.checked"></l-f-checkbox>
        </td>
        <td v-for="item in columns" :key="item.key">
          {{ dataItem[item.dataIndex] }}
        </td>
      </tr>
      </tbody>
      <tfoot v-if="showSummary">
      <tr>
        <td colspan="5" class="il-total">
          <slot name="summaryFooter"></slot>
        </td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
  import LFCheckbox from '../LfCheckbox'

  export default {
    components: {
      LFCheckbox
    },
    name: 'LfTable',
    data() {
      return {
        selectable: true
      }
    },
    props: {
      dataSource: {
        type: Array,
        required: true
      },
      columns: {
        type: Array,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      showSummary: {
        type: Boolean,
        default: false
      }
    },
    created() {
      // console.log(this.columns, this.dataSource)
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    background-color: #00BCD4;
    color: white;
    width: 100%;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main-table {
    border: .2px;
    tbody tr:hover {
      background: #00ff00;
    }
  }

  tr {
    text-align: center;
  }
</style>
