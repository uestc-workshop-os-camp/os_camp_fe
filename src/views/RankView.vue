<template>
  <!-- 排行榜头部 -->
  <div class="rankHeader w-full h-[130px] bg-white border-solid border flex">
    <img src="/img/logo.png" alt="" class="z-10 absolute top-1 left-4 w-[165px]">
    <!-- 用户头像 -->
    <div class="myRepo absolute right-14 top-10 flex items-center">
      <div>
        <el-button @click="returnHome">
          返回主页
        </el-button>
      </div>
      <img class="rounded-full ml-5 hover:scale-110" :src="userAvatar" width="55px">
    </div>
  </div>
  <!-- 切换阶段 -->
  <div class="w-[50vw] ml-[35vw]">
    <div class=" w-full flex mt-4  justify-between">
      <el-switch v-model="isPhaseTwo" active-text="阶段二" inactive-text="阶段一" @change="togglePhase"></el-switch>
      <el-input v-if="isPhaseTwo" v-model="search" size="default" placeholder="搜索用户名" style="width: 240px" />
    </div>
  </div>
  <!-- 排行榜部分 -->

  <div class="w-full flex items-center flex-col">
    <!-- 阶段一 -->
    <div v-if="!isPhaseTwo" class="lg:w-3/4 w-full ">
      <el-table :data="tableData" stripe row-class-name="h-14" :height="height">
        <el-table-column type="index" label="排名" width="80" />
        <el-table-column prop="username" label="用户" width="200">
          <template #default="scope">
            <div class="flex items-center justify-start flex-row">
              <img :src="scope.row.header_url" width="30px" class="rounded-full" />
              <div class=" ml-4">{{ scope.row.username }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="total" label="题目总分" width="160" />
        <el-table-column prop="points" label="得分" width="160" />
        <el-table-column prop="pass_time" label="最后提交时间" />
        <el-table-column align="right">
          <template #header>
            <el-input v-model="search" size="default" placeholder="搜索用户名" />
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 阶段二 -->
    <div v-else class="w-full">
      <!-- 阶段二 -->
      <el-table :data="tableData" stripe row-class-name="h-14" :height="height">
        <el-table-column type="index" label="排名" width="80" />
        <el-table-column prop="username" label="用户" width="200">
          <template #default="scope">
            <div class="flex items-center justify-start flex-row">
              <img :src="scope.row.header_url" width="30px" class="rounded-full" />
              <div class=" ml-4">{{ scope.row.username }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="total" label="总分" width="160" />
        <el-table-column prop="ch3" label="ch3" width="160" />
        <el-table-column prop="ch4" label="ch4" width="160" />
        <el-table-column prop="ch5" label="ch5" width="160" />
        <el-table-column prop="ch6" label="ch6" width="160" />
        <el-table-column prop="ch8" label="ch8" width="160" />
        <el-table-column prop="pass_time" label="最后提交时间" />
      </el-table>
    </div>

    <!-- 排行榜分页选项 -->
    <el-pagination class="flex justify-center mt-6" layout="prev, pager, next" :page-size="pageInfo.pageSize"
      :pager-count="pageInfo.pageCount" :current-page="pageNow.value" :total="pageInfo.pageTotal"
      @current-change="pageChange($event)" />
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from 'vue'
import { get } from '../request/index.js'
import { useRouter } from 'vue-router';

const router = useRouter()
// 表格固定高度:
const height = ref(450)
// 返回主页
const returnHome = () => {
  router.push('/')
}
// 用户数据
const tableData = ref([])
// 搜索框内容
const search = ref('')

// 当前页数和分页信息
const pageNow = ref(1) // 设置当前页面
const pageInfo = reactive({
  pageSize: 10, // 每页人数
  pageCount: 5, // 选项数量
  pageTotal: 200, // 数据总量
})

// 初始化请求参数
const query = reactive({
  page: 1, // 第几页，从第一页算（编号第一个是1）
  page_num: 10, // 每一页的数量，也就是一页里面会放多少个数据
  mode: 1 // 查询哪一个榜单，1 是一阶段榜，2是二阶段榜
})

// 当前是否为阶段二
const isPhaseTwo = ref(false)

// 右上方用户头像
const userAvatar = "/avatar.jpg"
// const userName = "uestcer"

// 时间戳修改
function formatUnixTime(unixTime) {
  const date = new Date(unixTime * 1000); // Unix 时间戳是秒级的，需要转换为毫秒级
  // 获取年、月、日、小时和分钟
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  // 拼接成 yyyy-mm-dd hh:mm 格式
  const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}`;
  return formattedTime;
}

// 获取数据
async function fetchData() {
  const { data } = await get(`/api/scores/${query.page}/${query.page_num}/${query.mode}`)
  for (let item of data) {
    item.pass_time = formatUnixTime(item.pass_time)
  }
  console.log(data)
  // 修改分页选项
  pageInfo.pageTotal = data.length
  tableData.value = data
}

// 切换阶段
const togglePhase = () => {
  query.mode = isPhaseTwo.value ? 2 : 1; // 根据当前状态切换查询模式
  search.value = ''
  fetchData(); // 重新获取数据
}

// 选择其他页面
const pageChange = (page) => {
  pageNow.value = page;
  query.page = page
}

// 监听当前页面变化
watch(pageNow, async () => {
  await fetchData()
})

watch(() => search.value, async () => {
  if (query.mode == 1) {
    //阶段一全局搜索
    tableData.value = step1Data.value.filter((data) => {
      return data.username.toLowerCase().includes(search.value.toLowerCase())
    })
  }
  else {
    //阶段二全局搜索
    tableData.value = step2Data.value.filter((data) => {
      return data.username.toLowerCase().includes(search.value.toLowerCase())
    })
  }
})
// 阶段一全部数据
const step1Data = ref([])
// 阶段二全部数据
const step2Data = ref([])

// 组件挂载时获取数据
onMounted(async () => {
  let viewheight = window.innerHeight
  height.value = viewheight - 300
  await fetchData()
  // 获取阶段一全部数据
  const { data: step1 } = await get(`/api/scores/1/999/1`)
  for (let item of step1) {
    item.pass_time = formatUnixTime(item.pass_time)
  }
  // 修改分页选项
  pageInfo.pageTotal = step1.length
  step1Data.value = step1


  // 获取阶段二全部数据
  const { data: step2 } = await get(`/api/scores/1/999/2`)
  for (let item of step2) {
    item.pass_time = formatUnixTime(item.pass_time)
  }
  // 修改分页选项
  pageInfo.pageTotal = step2.length
  step2Data.value = step2
})
</script>