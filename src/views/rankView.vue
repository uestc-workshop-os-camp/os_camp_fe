<template>
  <div class="min-h-screen bg-slate-50 p-6">
    <!-- Header -->
    <header
      class="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-4 flex items-center justify-between gap-4"
    >
      <div class="flex items-center gap-4">
        <img alt="logo" class="w-12 h-12 rounded-md object-cover" src="/img/homePicNew.png" />
        <div>
          <div class="text-lg font-semibold">光点计划 III</div>
          <div class="text-sm text-gray-500">开源操作系统训练营 — 排行榜</div>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <el-space>
          <el-button type="primary" @click="returnHome">返回主页</el-button>
        </el-space>
      </div>
    </header>

    <!-- Controls -->
    <div class="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
      <div class="flex items-center gap-4">
        <el-switch
          v-model="isPhaseTwo"
          active-text="阶段二"
          inactive-text="阶段一"
          @change="togglePhase"
        />
      </div>

      <div class="md:col-span-2 flex justify-end items-center gap-4">
        <el-input
          v-model="search"
          clearable
          placeholder="搜索用户名"
          size="default"
          style="width: 320px"
          @clear="onSearchClear"
        >
          <template #prefix>
            <i class="el-icon-search" />
          </template>
        </el-input>

        <el-select
          v-model="pageInfo.pageSize"
          placeholder="每页条数"
          style="width: 120px"
          @change="onPageSizeChange"
        >
          <el-option v-for="size in pageSizes" :key="size" :label="size + ' / 页'" :value="size" />
        </el-select>
      </div>
    </div>

    <!-- Table Card -->
    <div class="max-w-6xl mx-auto mt-6">
      <el-card class="overflow-hidden" shadow="hover">
        <div class="w-full" style="height: auto">
          <el-table
            :data="tableData"
            :default-sort="{ prop: 'rank', order: 'ascending' }"
            :height="height"
            border
            row-class-name="h-14"
            stripe
          >
            <el-table-column align="center" label="排名" prop="rank" width="92">
              <template #default="{ row }">
                <div class="flex items-center justify-center space-x-2">
                  <div v-if="row.rank <= 3" class="flex items-center">
                    <img :src="getRankImage(row.rank)" alt="medal" class="w-8 h-8" />
                  </div>
                  <div v-else class="text-sm font-medium">{{ row.rank }}</div>
                </div>
              </template>
            </el-table-column>

            <el-table-column align="left" label="用户" min-width="150" prop="username">
              <template #default="{ row }">
                <div class="flex items-center gap-4">
                  <el-avatar :src="row.header_url || defaultAvatar" size="small" />
                  <div>
                    <div class="font-medium">{{ row.username }}</div>
                    <div class="text-xs text-gray-400">{{ row.email || '' }}</div>
                  </div>
                </div>
              </template>
            </el-table-column>

            <el-table-column align="center" label="总分" prop="total" width="120" />

            <el-table-column
              v-if="!isPhaseTwo"
              align="center"
              label="得分"
              prop="points"
              width="120"
            />

            <template v-if="isPhaseTwo">
              <el-table-column align="center" label="ch3" prop="ch3" width="110" />
              <el-table-column align="center" label="ch4" prop="ch4" width="110" />
              <el-table-column align="center" label="ch5" prop="ch5" width="110" />
              <el-table-column align="center" label="ch6" prop="ch6" width="110" />
              <el-table-column align="center" label="ch8" prop="ch8" width="110" />
            </template>

            <el-table-column align="center" label="最后提交时间" prop="pass_time" width="200">
              <template #default="{ row }">
                <span>{{ row.pass_time }}</span>
              </template>
            </el-table-column>
          </el-table>

          <!-- Pagination -->
          <div class="flex items-center justify-between mt-4">
            <div class="text-sm text-gray-500">共 {{ pageInfo.pageTotal }} 条</div>
            <div class="flex items-center gap-4">
              <el-pagination
                :current-page="pageNow"
                :page-size="pageInfo.pageSize"
                :total="pageInfo.pageTotal"
                background
                layout="prev, pager, next, ->, jumper"
                @current-change="pageChange"
              />
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { get } from '../request/index.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const height = ref(520)
const defaultAvatar = '/avatar.jpg'

// data
const tableData = ref([])
const step1Data = ref([])
const step2Data = ref([])
const loading = ref(false)

// search & debounce
const search = ref('')
let searchTimer = null

// pagination
const pageNow = ref(1)
const pageInfo = reactive({ pageSize: 10, pageTotal: 0 })
const pageSizes = [10, 20, 50, 100]

// query
const query = reactive({ page: 1, page_num: 10, mode: 1 })
const isPhaseTwo = ref(false)

// format time (safe)
function formatUnixTime(unixTime) {
  if (!unixTime) return '-'
  const t = Number(unixTime)
  if (Number.isNaN(t)) return String(unixTime)
  const date = new Date(t * 1000)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${year}-${month}-${day} ${hours}:${minutes}`
}

// fetch current page data (server-side pagination)
async function fetchData() {
  try {
    loading.value = true
    const { data } = await get(`/api/scores/${query.page}/${query.page_num}/${query.mode}`)
    for (let item of data) {
      item.pass_time = formatUnixTime(item.pass_time)
    }
    tableData.value = data
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

// fetch all data for search and CSV export
async function getStep1data() {
  try {
    const { data } = await get(`/api/scores/1/999/1`)
    for (let item of data) item.pass_time = formatUnixTime(item.pass_time)
    step1Data.value = data
    pageInfo.pageTotal = data.length
  } catch (e) {
    console.error(e)
  }
}

async function getStep2data() {
  try {
    const { data } = await get(`/api/scores/1/999/2`)
    for (let item of data) item.pass_time = formatUnixTime(item.pass_time)
    step2Data.value = data
    pageInfo.pageTotal = data.length
  } catch (e) {
    console.error(e)
  }
}

// toggle phase
async function togglePhase() {
  query.mode = isPhaseTwo.value ? 2 : 1
  search.value = ''
  pageNow.value = 1
  query.page = 1
  query.page_num = pageInfo.pageSize
  await fetchData()
  if (query.mode === 1) await getStep1data()
  else await getStep2data()
}

// page change
async function pageChange(page) {
  pageNow.value = page
  query.page = page
  await fetchData()
}

// change page size
const onPageSizeChange = async (size) => {
  pageInfo.pageSize = size
  query.page_num = size
  pageNow.value = 1
  query.page = 1
  await fetchData()
}

// search with debounce: when empty, refetch current page; when filled, use full dataset filter
watch(
  () => search.value,
  (val) => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(async () => {
      const q = String(val || '')
        .trim()
        .toLowerCase()
      if (!q) {
        // reset: show server page
        await fetchData()
        return
      }
      // use local full-data search
      if (query.mode === 1) {
        tableData.value = step1Data.value.filter((d) =>
          (d.username || '').toLowerCase().includes(q)
        )
      } else {
        tableData.value = step2Data.value.filter((d) =>
          (d.username || '').toLowerCase().includes(q)
        )
      }
    }, 300)
  }
)

function onSearchClear() {
  search.value = ''
}

// initial mount
onMounted(async () => {
  height.value = window.innerHeight - 300
  query.page_num = pageInfo.pageSize
  await fetchData()
  await getStep1data()
})

function returnHome() {
  router.push('/')
}

function getRankImage(rank) {
  switch (rank) {
    case 1:
      return '/img/rank/gold.png'
    case 2:
      return '/img/rank/silver.png'
    case 3:
      return '/img/rank/bronze.png'
    default:
      return '/'
  }
}
</script>

<style scoped>
.h-14 {
  height: 56px;
}

.el-card {
  border-radius: 12px;
}

/* small responsive tweaks */
@media (max-width: 768px) {
  .el-table .cell {
    font-size: 13px;
  }
}
</style>
