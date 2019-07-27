import evueForm from './form/packages/index/index.js'
import evueTable from './table/packages/index/index.js'

const install = function (Vue) {
  Vue.component(evueForm.name, evueForm);
  Vue.component(evueTable.name, evueTable);
};
export default install