<template>
  <div class="e-vue-table">
    <el-table
            v-loading="option.isLoading"
            ref="eVueTable"
            :data="data"
            :height="option.height"
            :max-height="option.maxHeight"
            :stripe="option.stripe"
            :border="option.border"
            :size="option.size"
            :fit="option.hasOwnProperty('fit') ? option.fit : true"
            :style="option.style"
            :show-header="option.hasOwnProperty('showHeader') ? option.showHeader : true"
            :highlight-current-row="option.highlightCurrentRow"
            :current-row-key="option.currentRowKey"
            :data-class-name="option.rowClassName"
            :data-style="option.rowStyle"
            :cell-class-name="option.cellClassName"
            :cell-style="option.cellStyle"
            :header-row-class-name="option.headerRowClassName"
            :header-cell-class-name="option.headerCellClassName"
            :header-row-style="option.headerRowStyle"
            :header-cell-style="option.headerCellStyle"
            :data-key="option.rowKey"
            :empty-text="option.emptyText"
            :default-expand-all="option.defaultExpandAll"
            :expand-row-keys="option.expandRowKeys"
            :default-sort="option.defaultSort"
            :tooltip-effect="option.tooltipEffect"
            :show-summary="option.showSummary"
            :sum-text="option.sumText"
            :summary-method="option.summaryMethod"
            :span-method="option.spanMethod"
            :select-on-indeterminate="option.hasOwnProperty('selectOnIndeterminate') ? option.selectOnIndeterminate : true"
            :indent="option.indent"
            :lazy="option.lazy"
            :load="option.load"
            :tree-props="option.treeProps"
            @selection-change="selectionChange"
            @select="select"
            @select-all="selectAll"
            @sort-change="sortChange"
            @row-click="rowClick"
            @row-dblclick="rowDblclick"
            @cell-mouse-enter="cellMouseEnter"
            @cell-mouse-leave="cellMouseLeave"
            @cell-click="cellClick"
            @cell-dblclick="cellDblclick"
            @current-change="currentRowChange"
            @expand-change="expandChange"
            @row-contextmenu="rowContextmenu"
            @header-click="headerClick"
            @header-dragend="headerDragend"
    >

      <!-- 暂无数据提醒 -->
      <template slot="empty">
        <div>
          <slot name="empty"
                v-if="$slots.empty"></slot>
          <div v-else>{{option.emptyText || '暂无数据'}}</div>
        </div>
      </template>


      <!--序号区域-->
      <el-table-column
              v-if="option.isIndex"
              type="index"
              :label="option.indexLabel"
              :index="option.indexMethod"
              :width="option.indexWidth || config.indexWidth"
              :fixed="option.indexFixed"
              :align="option.indexAlign/shop/goods-share"
      >
      </el-table-column>
      <!--end 序号区域-->
      <!--可展开区域-->
      <el-table-column
              v-if="option.isExpand"
              type="expand"
              :label="option.expandLabel"
              :width="option.expandWidth || config.expandWidth"
              :fixed="option.expandFixed"
              :align="option.expandAlign"
      >
        <template slot-scope="scope">
          <slot v-if="option.slotExpand"
                :data="scope.row"
                :index="scope.$index"
                :name="option.slotExpand">
          </slot>
        </template>
      </el-table-column>
      <!--end 可展开区域-->

      <!--多选区域-->
      <el-table-column
              v-if="option.isSelection"
              type="selection"
              :label="option.selectionLabel"
              :width="option.selectionWidth || config.selectionWidth"
              :fixed="option.selectionFixed"
              :align="option.selectionAlign"
      ></el-table-column>
      <!--end 多选区域-->

      <el-table-column
              v-for="(item,index) in option.column"
              :key="index"
              :label="item.label"
              :prop="item.prop"
              :type="item.colType || ''"
              :index="item.colType==='index'&&item.indexMethod ? item.indexMethod : ()=>{}"
              :column-key="item.columnKey"
              :width="item.width"
              :min-width="item.minWidth"
              :fixed="item.fixed"
              :render-header="item.renderHeader"
              :sortable="item.sortable"
              :sort-method="item.sortMethod"
              :sort-by="item.sortBy"
              :sort-orders="item.sortOrders"
              :resizable="item.resizable"
              :formatter="item.formatter"
              :show-overflow-tooltip="item.showOverflowTooltip || false"
              :align="item.align"
              :class-name="item.className"
              :label-class-name="item.labelClassName"
              :selectable="item.selectable"
              :reserve-selection="item.reserveSelection || false"
              :filters="item.filters || null"
              :filter-placement="item.filterPlacement"
              :filter-multiple="item.filterMultiple"
              :filter-method="item.filters?filterMethod:null"
              :filtered-value="item.filteredValue"
      >
        <!--头部-->
        <template slot="header" v-if="item.slotHeader">
          <slot v-if="item.slotHeader" :name="item.slotHeader"></slot>
        </template>

        <template slot-scope="scope">
          <!--插槽模式-->
          <slot v-if="item.slotName"
                :data="scope.row"
                :index="scope.$index"
                :name="item.slotName">
          </slot>
          <!--默认显示-->
          <span v-else>{{ scope.row[item.prop]&&String(scope.row[item.prop]) || option.propEmptyDefault || '-'}}</span>
        </template>
      </el-table-column>


      <!--编辑区域-->
      <el-table-column
              :label="option.menuLabel || '操作'"
              :width="option.menuWidth"
              :align="option.menuAlign || 'right'"
              :fixed="option.menuFixed"
              v-if="option.hasOwnProperty('isMenu') ? option.isMenu : true"
      >
        <template slot="header">
          <slot v-if="$slots.menuHeader" name="menuHeader"></slot>
        </template>

        <template slot-scope="scope">
          <el-button v-if="option.hasOwnProperty('isMenuEdit') ? option.isMenuEdit : true"
                     :size="option.menuEditOption&&option.menuEditOption.size || 'mini'"
                     :type="option.menuEditOption&&option.menuEditOption.type"
                     :plain="option.menuEditOption&&option.menuEditOption.plain"
                     :round="option.menuEditOption&&option.menuEditOption.round"
                     :circle="option.menuEditOption&&option.menuEditOption.circle"
                     :loading="option.menuEditOption&&option.menuEditOption.loading"
                     :icon="option.menuEditOption&&option.menuEditOption.icon"
                     :style="option.menuEditOption&&option.menuEditOption.style"
                     @click="tableEvents('handleEdit',scope)">{{option.menuEditTitle || '编辑'}}
          </el-button>
          <el-button v-if="option.hasOwnProperty('isMenuDelete') ? option.isMenuDelete : true"
                     :size="option.menuDeleteOption&&option.menuDeleteOption.size || 'mini'"
                     :type="option.menuDeleteOption&&option.menuDeleteOption.type || 'danger'"
                     :plain="option.menuDeleteOption&&option.menuDeleteOption.plain"
                     :round="option.menuDeleteOption&&option.menuDeleteOption.round"
                     :circle="option.menuDeleteOption&&option.menuDeleteOption.circle"
                     :loading="option.menuDeleteOption&&option.menuDeleteOption.loading"
                     :icon="option.menuDeleteOption&&option.menuDeleteOption.icon"
                     :style="option.menuDeleteOption&&option.menuDeleteOption.style"
                     @click="tableEvents('handleDelete',scope)">{{option.menuDeleteTitle ||
            '删除'}}
          </el-button>
          <slot name="menu"
                :data="scope.row"
                :index="scope.$index">
          </slot>

        </template>
      </el-table-column>

    </el-table>
    <div class="e-vue-pagination" v-if="option.isPagination">
      <div class="e-vue-pagination-left">
        <slot name="slotPagination"></slot>
      </div>
      <div class="e-vue-pagination-right">
        <pagination @paginationChance="paginationChance"
                    :current="option.paginationCurrent"
                    :size="option.paginationSize"
                    :total="option.paginationTotal">
          :pageSizes="option.paginationPageSizes">
        </pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
