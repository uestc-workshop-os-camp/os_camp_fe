<template>
    <!-- 网站配色
    --background-color: #363dc2;
    --background-color-2: #282faf;
    --background-color-3: #202692; -->
    <!-- 可参考的动态背景js  https://github.com/codrops/MorphingBackgroundShapes/blob/master/js/demo1.js -->

    <!-- 这是背景后面那一坨 -->
    <div class="morph-wrap fixed z-0">
        <svg class="morph" width="1400" height="770" viewBox="0 -00 1400 770">
            <path class="" fill="#282faf"
                d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z" />
        </svg>
    </div>

    <!-- 首页 -->
    <div
        class="content--layout content-wrap homePage w-full h-screen bg-[#363dc2] flex justify-center items-center flex-col -z-20">
        <!-- 首页头部 -->
        <div class="homePageTop flex w-full min-w-20 h-8 justify-between absolute top-0">
            <div
                class="rankButton bg-transparent w-auto min-w-10 h-auto text-white font-bold text-xl relative left-10 top-10 border-b-2 border-solid border-white hover:text-[#cdd0ff]">
                Visit Rank</div>
            <div class="loginButton bg-transparent text-white font-bold right-10 text-xl relative top-10 z-10">Login
            </div>
        </div>

        <!-- 首页标题 -->
        <div class="homePageTitle w-auto h-auto  bg-transparent p-1 flex justify-center">
            <div class="content__img"><img src="@/assets/img/homePic.jpg" alt=""
                    class="relative left-1/5 bottom-10 z-0 shadow-2xl max-w-[350px] max-h-[350px]:"></div>
            <div class="title text-white relative left-5 z-10 w-3/4">
                <h1 class=" font-extrabold text-7xl relative right-48 mb-4 bottom-6">操作系统开源活动</h1>
                <div class="content__title overflow-hidden">
                    <div class="font-bold text-3xl">UESTC OS Activity #2024</div>
                    <div class="font-bold text-3xl">UESTC OS Activity #2024</div>
                    <div class="font-bold text-3xl">UESTC OS Activity #2024</div>
                    <div class="font-bold text-3xl">UESTC OS Activity #2024</div>
                    <div class="font-bold text-3xl mt-5"> 一路 | 微光 | YOLO | 嵌入式</div>
                </div>

            </div>
        </div>
    </div>

    <!-- 工作室页面 -->
    <div class="studioPage w-full h-[500vh] bg-[#363dc2] flex items-center flex-col">
        <!-- 想做一个点击工作室logo下滑到对应位置的效果，还未实现 -->
        <div class="content-wrap studioNavigate w-full h-screen flex  items-center flex-col z-0">
            <h1 class=" text-white text-5xl font-bold mb-16 mt-16">成员工作室</h1>
            <div class="flex mt-16">
                <!-- 一路 -->
                <div class="studioLogo flex flex-col justify-center items-center">
                    <div class=" ml-5 mr-5 min-w-[100px]"><img src='../assets/img/studio/yilu/logo.jpg'
                            class="rounded-full" width="250px"></div>
                    <a href="#yilu" class="content__link text-white font-lg text-2xl mt-10">一路工作室</a>
                </div>
                <!-- 微光 -->
                <div class="studioLogo flex flex-col justify-center items-center">
                    <div class=" ml-5 mr-5 min-w-[100px]"><img src='../assets/img/studio/yilu/logo.jpg'
                            class="rounded-full" width="250px"></div>
                    <a href="#weiguang" class="content__link text-white font-lg text-2xl mt-10">微光工作室</a>
                </div>
                <!-- yolo -->
                <div class="studioLogo flex flex-col justify-center items-center">
                    <div class=" ml-5 mr-5 min-w-[100px]"><img src='../assets/img/studio/yilu/logo.jpg'
                            class="rounded-full" width="250px"></div>
                    <a href="#yolo" class="content__link text-white font-lg text-2xl mt-10">yolo工作室</a>
                </div>
                <!-- 嵌入式 -->
                <div class="studioLogo flex flex-col justify-center items-center">
                    <div class=" ml-5 mr-5 min-w-[100px]"><img src='../assets/img/studio/embedded/logo.jpg'
                            class="rounded-full" width="250px"></div>
                    <a href="#qianrushi" class="content__link text-white font-lg text-2xl mt-10">嵌入式工作室</a>
                </div>
            </div>
        </div>
        <!-- 一路 -->
        <!-- <div id="yilu"
            class="content-wrap yilu w-3/4 h-screen p-20 bg-transparent text-white flex justify-center items-center mt-10 text-right"
            style="clip-path: url(#loginSvg);">
            <div class="studioText mr-16">
                <div class=" flex justify-between items-center">
                    <a :href=introducionYilu.website class="text-xl h-8 ml-6 border-b-2 hover:text-slate-300">官网访问</a>
                    <h2 class=" font-bold text-5xl mb-6">{{ introducionYilu.name }}</h2>
                </div>
                <div class="mb-4 text-lg">{{ introducionYilu.data1 }}</div>
                <div class="mb-4 text-lg">{{ introducionYilu.data2 }}</div>
                <div class="mb-4 text-xl">{{ introducionYilu.data3 }}</div>
            </div>
            <div class="studioPic"><img :src=introducionYilu.pic1Src alt="" width="2000px"></div>
        </div> -->
        <div id="yilu"
            class="content-wrap yilu w-3/4 h-screen p-20 bg-transparent text-white flex justify-center items-center"
            style="clip-path: url(#loginSvg);">
            <el-card class="box-card w-full min-h-[80vh]">
                <div class="studioText">
                    <div class="flex justify-between items-center">
                        <a :href="introducionYilu.website"
                            class="text-xl h-8 ml-6 border-b-2 hover:text-slate-300">官网访问</a>
                        <h2 class="font-bold text-5xl mb-6">
                            <span
                                style="background-image: linear-gradient(to right top, #89ffff, #63b8f8);background-clip: text; color: transparent;">
                                {{ introducionYilu.name }}</span>
                            🥏
                        </h2>
                    </div>
                </div>

                <!-- 折叠面板组件 -->
                <el-collapse v-model="yiluActiveNames" accordion="true">
                    <el-collapse-item title="工作室简介🪁" name="1">
                        <div class="mb-4 text-lg flex">
                            {{ introducionYilu.data1 }}
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="工作室文化🎯" name="2">
                        <div class="mb-4 text-lg">{{ introducionYilu.data2 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="研究方向🧐" name="3">
                        <div class="mb-4 text-xl">{{ introducionYilu.data3 }}</div>
                    </el-collapse-item>
                </el-collapse>

                <div class="studioPic flex justify-evenly p-4">
                    <img :src="introducionYilu.pic1Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                    <img :src="introducionYilu.pic1Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                    <img :src="introducionYilu.pic1Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                </div>
            </el-card>
        </div>
        <!-- 微光 -->
        <!-- <div id="weiguang"
            class="content-wrap glimmer w-3/4 h-screen p-20 bg-transparent text-white flex justify-center items-center mt-10 text-left"
            style="clip-path: url(#loginSvg);">
            <div class="studioPic">
                <img :src=introducionGlimmer.pic1Src alt="" width="2000px">
                <img :src=introducionGlimmer.pic2Src alt="" width="2000px">
            </div>
            <div class="studioText ml-16">
                <div class="flex justify-between items-center">
                    <h2 class=" font-bold text-5xl mb-6">{{ introducionGlimmer.name }}</h2>
                    <a :href=introducionGlimmer.website
                        class="text-xl h-8 mr-6 border-b-2 hover:text-slate-300">官网访问</a>
                </div>
                <div class="mb-4 text-lg">{{ introducionGlimmer.data1 }}</div>
                <div class="mb-4 text-lg">{{ introducionGlimmer.data2 }}</div>
                <div class="mb-4 text-lg">{{ introducionGlimmer.data3 }}</div>
            </div>
        </div> -->
        <div id="weiguang"
            class="content-wrap glimmer w-3/4 h-screen p-20 bg-transparent text-white flex justify-center items-center text-left"
            style="clip-path: url(#loginSvg);">
            <el-card class="box-card w-full min-h-[80vh]">
                <div class="studioText">
                    <div class="flex justify-between items-center">
                        <a :href="introducionGlimmer.website"
                            class="text-xl h-8 ml-6 border-b-2 hover:text-slate-300">官网访问</a>
                        <h2 class="font-bold text-5xl mb-6">
                            <span
                                style="background-image: linear-gradient(to right top, #00b0ff, #0137ff);background-clip: text; color: transparent;">
                                {{ introducionGlimmer.name }}</span>
                            ❄️
                        </h2>
                    </div>
                </div>

                <!-- 添加折叠面板组件 -->
                <el-collapse v-model="weiguangActiveName" accordion>
                    <el-collapse-item title="工作室简介🪁" name="1">
                        <div class="mb-4 text-lg">{{ introducionGlimmer.data1 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="工作室文化🎯" name="2">
                        <div class="mb-4 text-lg">{{ introducionGlimmer.data2 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="研究方向🧐" name="3">
                        <div class="mb-4 text-lg">{{ introducionGlimmer.data3 }}</div>
                    </el-collapse-item>
                </el-collapse>
                <div class="studioPic flex justify-evenly p-4">
                    <img :src="introducionGlimmer.pic1Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                    <img :src="introducionGlimmer.pic2Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                </div>
            </el-card>
        </div>
        <!-- YOLO -->
        <!-- <div id="yolo"
            class="content-wrap yilu w-3/4 h-screen p-20 bg-transparent text-white flex justify-center items-center mt-10 text-right"
            style="clip-path: url(#loginSvg);">
            <div class="studioText mr-16">
                <div class=" flex justify-between items-center">
                    <a :href=introducionYolo.website class="text-xl h-8 ml-6 border-b-2 hover:text-slate-300">官网访问</a>
                    <h2 class=" font-bold text-5xl mb-6">{{ introducionYolo.name }}</h2>
                </div>
                <div class="mb-4 text-2xl">{{ introducionYolo.data1 }}</div>
                <div class="mb-4 text-lg">{{ introducionYolo.data2 }}</div>
                <div class="mb-4 text-lg">{{ introducionYolo.data3 }}</div>
            </div>
            <div class="studioPic"><img :src=introducionYolo.pic1Src alt="" width="1300px"></div>
        </div> -->
        <div id="yolo"
            class="content-wrap yilu w-3/4 h-screen p-20 bg-transparent text-white flex justify-center items-center"
            style="clip-path: url(#loginSvg);">
            <el-card class="box-card w-full min-h-[80vh]">
                <div class="studioText">
                    <div class="flex justify-between items-center">
                        <a :href="introducionYolo.website"
                            class="text-xl h-8 ml-6 border-b-2 hover:text-slate-300">官网访问</a>
                        <h2 class="font-bold text-5xl mb-6">
                            <span
                                style="background-image: linear-gradient(to right top,#8fd3f4, #84fab0);background-clip: text; color: transparent;">
                                {{ introducionYolo.name }}</span>
                            🍀
                        </h2>
                    </div>
                </div>

                <!-- 折叠面板组件 -->
                <el-collapse v-model="yoloActiveNames" accordion="true">
                    <el-collapse-item title="工作室简介🪁" name="1">
                        <div class="mb-4 text-lg">{{ introducionYolo.data1 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="工作室文化🎯" name="2">
                        <div class="mb-4 text-lg">{{ introducionYolo.data2 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="研究方向🧐" name="3">
                        <div class="mb-4 text-xl">{{ introducionYolo.data3 }}</div>
                    </el-collapse-item>
                </el-collapse>

                <div class="studioPic flex justify-evenly p-4">
                    <img :src="introducionYolo.pic1Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                    <img :src="introducionYolo.pic1Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                    <img :src="introducionYolo.pic1Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                </div>
            </el-card>
        </div>
        <!-- 嵌入式 -->
        <!-- <div id="qianrushi"
            class="content--related embedded w-3/4 h-screen p-20 bg-transparent text-white flex justify-center items-center mt-10 text-left"
            style="clip-path: url(#loginSvg);">
            <div class="studioPic">
                <img :src=introducionEmbedded.pic1Src alt="" width="2000px">
            </div>
            <div class="studioText ml-16">
                <div class="flex justify-between items-center">
                    <h2 class=" font-bold text-5xl mb-6">{{ introducionEmbedded.name }}</h2>
                    <a :href=introducionEmbedded.website
                        class="text-xl h-8 mr-6 border-b-2 hover:text-slate-300">官网访问</a>
                </div>
                <div class="mb-4 text-lg">{{ introducionEmbedded.data1 }}</div>
                <div class="mb-4 text-lg">{{ introducionEmbedded.data2 }}</div>
                <div class="mb-4 text-lg">{{ introducionEmbedded.data3 }}</div>
            </div>
        </div> -->
        <div id="qianrushi"
            class="content--related  embedded w-3/4 h-screen p-20 bg-transparent text-white flex justify-center items-center"
            style="clip-path: url(#loginSvg);">
            <el-card class="box-card w-full min-h-[80vh]">
                <div class="studioText">
                    <div class="flex justify-between items-center">
                        <a :href="introducionEmbedded.website"
                            class="text-xl h-8 ml-6 border-b-2 hover:text-slate-300">官网访问</a>
                            <h2 class="font-bold text-5xl mb-6">
                            <span
                                style="background-image: linear-gradient(to right top,#667eea, #764ba2);background-clip: text; color: transparent;">
                                {{ introducionEmbedded.name }}</span>
                            ⚙️
                        </h2>
                    </div>
                </div>

                <el-collapse v-model="qianrushiActiveNames" accordion="true">
                    <el-collapse-item title="工作室简介🪁" name="1">
                        <div class="mb-4 text-lg">{{ introducionEmbedded.data1 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="工作室文化🎯" name="2">
                        <div class="mb-4 text-lg">{{ introducionEmbedded.data2 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="研究方向🧐" name="3">
                        <div class="mb-4 text-xl">{{ introducionEmbedded.data3 }}</div>
                    </el-collapse-item>
                </el-collapse>

                <div class="studioPic flex justify-evenly p-4">
                    <img :src="introducionEmbedded.pic1Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                    <img :src="introducionEmbedded.pic1Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                    <img :src="introducionEmbedded.pic1Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                </div>
            </el-card>
        </div>
    </div>
    <!-- 点击下滑按钮 -->
    <img v-if="pageNow != pageNum" @click="scrollDown" id="downButton" src="@/assets/svg/down.svg" alt="" width="45px"
        class=" fixed bottom-5 left-1/2 animate-bounce">
</template>

<script setup>
// import { useRouter } from 'vue-router';
import { reactive, onMounted, ref } from 'vue';
import { demo1 } from '../utils/animate/demo1.js'
// const router = useRouter()
onMounted(() => {
    demo1()
    document.addEventListener('wheel', scrollHandler, { passive: false })
})

// 移动控制
const pageNow = ref(1)
const pageNum = 6;
let isScrolling = false;

function scrollHandler(event) {
    event.preventDefault()
    if (isScrolling == true) { return }
    isScrolling = true
    new Promise((resolve) => {
        console.log(event)
        console.log(event.target)
        if (event.deltaY < 0) {
            window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
            console.log(window.innerHeight)
            if (pageNow.value > 1) { pageNow.value-- }
        }
        else if (event.deltaY > 0) {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            console.log(window.innerHeight)
            if (pageNow.value < pageNum) { pageNow.value++ }
        }
        setTimeout(() => { resolve() }, 500)
    }).then(() => { isScrolling = false; console.log(pageNow.value) })
};

// const studioLogo = reactive({
//     0: { srcImg: 'src/assets/img/studio/yilu/logo.jpg', name: '一路工作室', },
//     1: { srcImg: 'src/assets/img/studio/yilu/logo.jpg', name: '微光工作室', },
//     2: { srcImg: 'src/assets/img/studio/yilu/logo.jpg', name: 'YOLO工作室', },
//     3: { srcImg: 'src/assets/img/studio/embedded/logo.jpg', name: '嵌入式工作室', },
// })

const introducionYilu = reactive({
    name: '一路工作室',
    data1: '于2016年底正式成立，由戴瑞婷老师负责组建。工作室成立之初下属于学工部，服务于学院的各种需求而开发对应的Web系统，后归属于创新工坊，在服务于学院的同时参加各种比赛。',
    data2: '一路是一个自由的工作室，同学们收获知识共同进步，交流有关学习生活等等事情，还有许多特别热情且乐于助人的学长学姐，刚进入工作室的新同学也能快速融入。一路大家庭欢迎各类同学加入，如果你想要与优秀的同学共同勉励，一路会是你的不二之选。',
    data3: '工作室研究方向：前端 后端 机器学习',
    website: '#',
    pic1Src: 'src/assets/img/studio/yilu/pic1.jpg',
})

const introducionGlimmer = reactive({
    name: '微光工作室',
    data1: '成立于 2012 年，前身“微软创新工作室”、“黑色之光工作室”。团队立足 IT 基础与底层架构相关技术，面向兴趣和前沿应用方向扩展，是技术氛围最浓厚、团队联系最紧密的工作室之一。',
    data2: '“心有微光，不惧黑暗”是我们的口号，也是微光工作室在发展中始终贯彻的信条。秉持“兴趣驱动，自由发展”的理念，我们乐于接收对不同技术方向感兴趣的朋友，善于探求未知的技术领域。工作室由一群热爱技术的 Geek 组成，力图召集志同道合，敢于创新的伙伴们共同拼搏，挑战自我。',
    data3: '作为研究氛围最自由的工作室之一，微光工作室并不限制团队成员的技术方向，而是鼓励成员以兴趣导向的积极进步寻找适合自己的领域。经过多年发展，工作室当前形成了以 IT 基础架构领域为中心的团队技术方向，并辅以上层应用和前沿领域技术推进，同时鼓励百花齐放的路线创新。',
    website: '#',
    pic1Src: 'src/assets/img/studio/glimmer/pic1.png',
    pic2Src: 'src/assets/img/studio/glimmer/pic2.png',
})

const introducionYolo = reactive({
    name: 'YOLO工作室',
    data1: '“我们欢迎任何充满活力与创新力的新血液”',
    data2: '指导老师：江维、詹瑾瑜；2021，2020，2019，2018级的众多优秀学长的亲自带领；三教403专属工位，除图书馆或者教室的又一选择；实习内推，就业指导，科研指路，你需要的，我们都有',
    data3: '成员风格各异，自由成长不受限，只要你能保持活力，无论是web开发，还是嵌入式底层研发，又或者海外留学与科研，总能绽放属于自己的光芒',
    website: '#',
    pic1Src: 'src/assets/img/studio/yolo/pic1.jpg',
})

const introducionEmbedded = reactive({
    name: '嵌入式工作室',
    data1: '成立于2011年，是信软学院创新工坊历史最悠久的工作室之一，现已成长为信软学院旗下科创组织中数一数二的工作室。工作室以建立完善的“计算机体系结构"为宗旨，秉承"To Learn By Doing"的学习理念，以培养未来系统架构师、首席技术官为目标。',
    data2: '嵌入式工作室研究单片机与ARM-Linux开发、计算枳视觉、硬件电路设计、Linux系统级程序设计、FPGA、算法等。工作室在成立的八年里获得了诸多的成就。每一届都有极大比例的工作室成员前往Intel、大疆、腾讯、字节跳动、商汤、地平线、美团、旷视等国内外大型企业实习实训。还有百分之八十五的保研率与大量的校赛国赛国际比赛竞赛获奖。',
    data3: '嵌入式工作室现在每届约为二十人，我们在三教整个404以及部分405，为工作室成员提供良好的嵌入式开发环境，通过竞赛与项目来提升自己，带你深入了解计算机体系架构，从无到有的创造，从一块芯片到一个四轴飞行器，从一块开发板到一个自动避障小车，裁剪内核，定制系统。',
    website: '#',
    pic1Src: 'src/assets/img/studio/embedded/pic1.png',
})

// 工作室介绍折叠面板
const yiluActiveNames = ref('1')
const weiguangActiveName = ref('1')
const yoloActiveNames = ref('1')
const qianrushiActiveNames = ref('1')
</script>