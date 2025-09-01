<template>
  <div class="app-root">
    <div class="bg-gradient-to-br from-[#4DA2CB] to-[#67B26F] text-white">
      <section ref="sections" class="homePage">
        <div class="container hero">
          <nav aria-label="Main navigation" class="nav" role="navigation">
            <div class="brand">光点计划 III</div>
            <ul class="nav-list">
              <li>
                <RouterLink class="nav-link btn ghost" to="/rank">排行榜</RouterLink>
              </li>
            </ul>
          </nav>

          <div class="hero-grid">
            <div class="hero-left">
              <h1 class="title">开源操作系统训练营</h1>
              <p class="subtitle">
                从 Rustlings 到 rCore，手把手从零实现操作系统，夯实系统能力，结识志同道合的同伴。
              </p>

              <div class="actions">
                <a
                  class="btn outlined"
                  href="https://github.com/uestc-workshop-os-camp"
                  rel="noopener"
                  target="_blank"
                  >GitHub 报名</a
                >
              </div>

              <ul aria-hidden="false" class="features">
                <li>🚀 亲手接触前沿语言与现代计算架构</li>
                <li>💻 从零实现操作系统，深挖底层实现能力</li>
                <li>🤝 加入活跃社群，与工作室共同成长</li>
              </ul>
            </div>

            <div aria-hidden="true" class="hero-right">
              <div class="card-image">
                <img alt="OS Camp illustration" loading="lazy" src="/img/homePicNew.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="join" class="joinPage">
        <div class="container">
          <div class="grid-two">
            <article class="card soft">
              <p>
                光点计划由多个学生工作室联合举办，为期两个月，为对计算机底层感兴趣的同学提供一个实践平台。题目取自清华大学开源操作系统训练营，已得到老师与实验室的支持。
              </p>

              <ul class="mini-list">
                <li>📅 <strong>时长：</strong>2 个月</li>
                <li>
                  🔗 <strong>报名：</strong>
                  <a
                    class="link"
                    href="https://github.com/uestc-workshop-os-camp"
                    rel="noopener"
                    target="_blank"
                  >
                    GitHub 报名</a
                  >
                </li>
                <li>💬 <strong>官方QQ群：</strong>735598360</li>
              </ul>
            </article>

            <figure class="chat-preview card soft">
              <img alt="Chat preview" loading="lazy" src="/img/chat.jpg" />
            </figure>
          </div>
        </div>
      </section>

      <section id="studios" class="studioPage">
        <div class="container">
          <h2 class="section-title">成员工作室</h2>

          <ul class="studio-grid" role="list">
            <li
              v-for="(s, idx) in studios"
              :key="s.name"
              class="studio-card soft"
              @click="goToAnchor(s.anchor)"
            >
              <img :alt="s.name + ' logo'" :src="s.logo" loading="lazy" />
              <div class="studio-name">{{ s.name }}</div>
            </li>
          </ul>

          <div class="studio-list">
            <article
              v-for="(d, i) in studios"
              :id="d.anchor"
              :key="d.name"
              class="studio-full card soft"
            >
              <header class="studio-header">
                <div class="studio-info">
                  <img :alt="d.name + ' logo'" :src="d.logo" loading="lazy" />
                  <h3>{{ d.name }}</h3>
                </div>
                <a :href="d.website" class="btn outlined">官网</a>
              </header>

              <div class="accordion">
                <details open>
                  <summary>工作室简介</summary>
                  <div class="panel">{{ d.data1 }}</div>
                </details>
                <details open>
                  <summary>工作室文化</summary>
                  <div class="panel">{{ d.data2 }}</div>
                </details>
                <details open>
                  <summary>研究方向</summary>
                  <div class="panel">{{ d.data3 }}</div>
                </details>
                <details open>
                  <summary>项目成果</summary>
                  <div class="panel">{{ d.data4 }}</div>
                </details>
              </div>

              <div class="studio-gallery">
                <img v-for="(p, k) in d.pics" :key="k" :src="p" loading="lazy" />
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="container small">© 2024-2025 光点计划团队</div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue'
import { RouterLink } from 'vue-router'

const introList = reactive([
  {
    name: '一路工作室',
    data1:
      '于 2016 年底正式成立，由戴瑞婷老师负责组建。工作室成立之初下属于学工部，服务于学院的各种需求而开发对应的 Web 系统，后归属于创新工坊，在服务于学院的同时参加各种比赛。',
    data2:
      '一路是一个自由的工作室，同学们收获知识共同进步，交流有关学习生活等等事情，还有许多特别热情且乐于助人的学长学姐，刚进入工作室的新同学也能快速融入。一路大家庭欢迎各类同学加入，如果你想要与优秀的同学共同勉励，一路会是你的不二之选。',
    data3: '工作室研究方向：前端 后端 机器学习',
    data4:
      '我们工作室的主要研究方向是 Web 系统开发，主要是前后端开发，其中包括前端 Serverless，流量优化，防抖动策略，懒加载策略的研究等，后端则是关于高并发，微服务的研究。但我们又不局限于 Web 系统，微信小程序，10S 开发也有所涉及和研究。 同时我们拓展了机器学习方向，提供学习资源，项目资源以及科研资源，欢迎大家的加入。 到目前为止，工作室接手过创新项目院级项目 11 项，校级项目 8 项。其中 Web 项目 9 项，微信小程序 6 项。如智能助困系统，高校督导系统，成绩发布系统，舌尖沙河，活动预约系统。',
    website: 'https://recruit.yilu-studio.cn/',
    logo: '/img/studio/yilu/logo.jpg',
    pics: ['/img/studio/yilu/pic1.jpg', '/img/studio/yilu/pic2.png']
  },
  {
    name: '微光工作室',
    data1:
      '成立于 2012 年，前身“微软创新工作室”、“黑色之光工作室”。团队立足 IT 基础与底层架构相关技术，面向兴趣和前沿应用方向扩展，是技术氛围最浓厚、团队联系最紧密的工作室之一。',
    data2:
      '“心有微光，不惧黑暗”是我们的口号，也是微光工作室在发展中始终贯彻的信条。秉持“兴趣驱动，自由发展”的理念，我们乐于接收对不同技术方向感兴趣的朋友，善于探求未知的技术领域。工作室由一群热爱技术的 Geek 组成，力图召集志同道合，敢于创新的伙伴们共同拼搏，挑战自我。\n微光工作室技术氛围浓厚，学期内定期组织多场技术相关分享会活动，由工作室内有相关研究经验的同学对某项技术主题展开专题分享，激发工作室成员在相关领域的学习热情。针对成员的学习需求，工作室还不定期组织项目学习和任务指导，供成员自由学习参考。',
    data3:
      '作为研究氛围最自由的工作室之一，微光工作室并不限制团队成员的技术方向，而是鼓励成员以兴趣导向的积极进步寻找适合自己的领域。经过多年发展，工作室当前形成了以 IT 基础架构领域为中心的团队技术方向，并辅以上层应用和前沿领域技术推进，同时鼓励百花齐放的路线创新。\n目前团队在校成员在 OS 内核、云计算、编译技术、硬件设计、SDN 等方向均有研究进展与项目实现，毕业成员也多投身基础架构相关岗位和研究领域。除此之外，团队也拥有应用层 Web 开发、机器学习等成熟的技术组与培养路线，欢迎不同技术方向的同学与我们共同进步。',
    data4:
      '近期成果奖项：2022中国高校计算机大赛-网络技术挑战赛区域赛一等奖、国家级一等奖 2020 中国高校计算机大赛-网络技术挑战赛区域赛一等奖、国家级二等奖；2021 中国高校计算机大赛-网络技术挑战赛区域赛一等奖、国家级三等奖;    第十三届服务外部创新创业大赛西部区域赛一等奖、国家级二等奖；第十四届服务外部创新创业大赛西部区域赛一等奖、国家级三等奖;第十六届中国大学生计算机设计大赛 省级二等奖 x 1、省级三等奖 x 1;第十三、十四届蓝桥杯信息技术产业人才大赛 省级二等奖 x 2 + 省级三等奖 x 2;2021 中国高校计算机大赛-微信小程序应用开发赛区域一等奖、国家级三等奖;2020 中国高校计算机大赛-微信小程序应用开发赛区域二等奖',
    website: 'https://www.glimmer.org.cn/',
    logo: '/img/studio/glimmer/logo.png',
    pics: [
      '/img/studio/glimmer/pic1.png',
      '/img/studio/glimmer/pic2.png',
      '/img/studio/glimmer/pic3.png'
    ]
  },
  {
    name: 'YOLO 工作室',
    data1: '着眼当下，我们欢迎任何充满活力与创新力的新血液',
    data2:
      '指导老师：江维、詹瑾瑜；2021，2020，2019，2018 级的众多优秀学长的亲自带领；实习内推，就业指导，科研指路，你需要的，我们都有',
    data3:
      '成员风格各异，自由成长不受限，只要你能保持活力，无论是 Web 开发，还是嵌入式底层研发，又或者海外留学与科研，总能绽放属于自己的光芒',
    data4:
      '主要科研项目：嵌入式 AI 与可信 AI。工作室在智能嵌入式系统领域，发表了一系列高水平学术论文：“解决工业信息物理系统 DNN 安全性分层保护难题”，“提出 DNN 对抗强度和类型感知的检测防御方法”，“指出可解释驱动的 DNN 后门攻击防御方法”，“提出抗模型权重扰动的激活上界感知 DNN 容错方法”，“提出针对大数据存储节点的 CPU-FPGA 协同加速方法”等',
    website: '#',
    logo: '/img/studio/yolo/logo.jpg',
    pics: ['/img/studio/yolo/pic1.jpg', '/img/studio/yolo/pic2.png', '/img/studio/yolo/pic3.png']
  },
  {
    name: '嵌入式工作室',
    data1:
      '成立于 2011 年，是信软学院创新工坊历史最悠久的工作室之一，现已成长为信软学院旗下科创组织中数一数二的工作室。工作室以建立完善的“计算机体系结构"为宗旨，秉承 "To Learn By Doing" 的学习理念，以培养未来系统架构师、首席技术官为目标。',
    data2:
      '嵌入式工作室研究单片机与 ARM-Linux 开发、计算枳视觉、硬件电路设计、Linux 系统级程序设计、FPGA、算法等。工作室在成立的八年里获得了诸多的成就。每一届都有极大比例的工作室成员前往 Intel、大疆、腾讯、字节跳动、商汤、地平线、美团、旷视等国内外大型企业实习实训。还有百分之八十五的保研率与大量的校赛国赛国际比赛竞赛获奖。',
    data3:
      '嵌入式工作室现在每届约为二十人，为工作室成员提供良好的嵌入式开发环境，通过竞赛与项目来提升自己，带你深入了解计算机体系架构，从无到有的创造，从一块芯片到一个四轴飞行器，从一块开发板到一个自动避障小车，裁剪内核，定制系统。',
    data4:
      '巡线四轴无人机、Makepander 太极熊创客教育、基于微信小程序的弹幕式课堂互动助手、智能枕芯项目等',
    website: '#',
    logo: '/img/studio/embedded/logo.jpg',
    pics: ['/img/studio/embedded/pic1.png', '/img/studio/embedded/pic2.png']
  }
])

const studios = computed(() =>
  introList.map((s) => ({
    anchor: slugify(s.name),
    ...s
  }))
)

function slugify(str) {
  return str
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9-\u4e00-\u9fa5]/g, '')
    .toLowerCase()
}

function goToAnchor(anchor) {
  const el = document.querySelector('#' + anchor)
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 80,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
:root {
  --bg-from: #363dc2;
  --bg-to: #202692;
  --card-bg: rgba(255, 255, 255, 0.04);
  --card-glass: rgba(255, 255, 255, 0.06);
  --glass: rgba(255, 255, 255, 0.06);
  --accent: #cdd0ff;
  --accent-2: rgba(141, 196, 255, 0.12);
  --soft-shadow: 0 10px 30px rgba(6, 10, 26, 0.6);
}

* {
  box-sizing: border-box;
}

.app-root {
  min-height: 100vh;
  background: linear-gradient(180deg, var(--bg-from), var(--bg-to));
  color: #fff;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
}

/* Small utility for consistent "soft card" look used across the layout */
.card.soft {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 1.25rem;
  box-shadow: var(--soft-shadow);
  backdrop-filter: blur(6px) saturate(120%);
  -webkit-backdrop-filter: blur(6px) saturate(120%);
  transition:
    transform 220ms cubic-bezier(0.2, 0.9, 0.3, 1),
    box-shadow 220ms ease;
}

.card.soft:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: 0 20px 50px rgba(6, 10, 26, 0.7);
}

/* Hero */
.homePage {
  scroll-snap-align: start;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.brand {
  font-weight: 800;
  font-size: 1.125rem;
}

.nav-list {
  display: flex;
  gap: 1rem;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: inherit;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.125rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 2rem;
  align-items: center;
}

.title {
  font-size: 2.75rem;
  line-height: 1;
  margin: 0 0 1.5rem 0;
}

.subtitle {
  color: rgba(255, 255, 255, 0.92);
  max-width: 42rem;
}

.actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

.features {
  margin-top: 1.25rem;
  display: grid;
  gap: 0.5rem;
}

.card-image {
  width: 360px;
  height: 360px;
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.02));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(4px);
}

.card-image img {
  max-width: 300px;
  max-height: 300px;
  transform: rotate(-3deg);
  transition: transform 300ms ease;
}

.card-image:hover img {
  transform: rotate(0deg) scale(1.02);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 600;
}

.btn.outlined {
  background: transparent;
  border: 4px solid rgba(255, 255, 255, 0.12);
}

.btn.ghost {
  background: rgba(255, 255, 255, 0.06);
}

.btn.small {
  padding: 0.4rem 0.6rem;
  font-size: 0.9rem;
}

/* Join */
.joinPage {
  scroll-snap-align: start;
}

.grid-two {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 1.5rem;
  align-items: center;
}

.card {
  padding: 1.25rem;
  border-radius: 16px;
}

.mini-list {
  margin-top: 1rem;
}

.chat-preview img {
  width: 100%;
  border-radius: 16px;
}

/* Studios */
.studioPage {
  padding-bottom: 3rem;
}

.section-title {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.studio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.studio-card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01));
  border-radius: 16px;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition:
    transform 220ms cubic-bezier(0.2, 0.9, 0.3, 1),
    box-shadow 220ms ease;
}

/* subtle gradient accent band on top edge */
.studio-card::after {
  content: '';
  position: absolute;
  left: -40%;
  top: -60%;
  width: 180%;
  height: 120%;
  background: radial-gradient(circle at 20% 20%, rgba(141, 196, 255, 0.06), transparent 10%),
    radial-gradient(circle at 80% 80%, rgba(196, 255, 176, 0.04), transparent 12%);
  pointer-events: none;
  transform: translateY(-10%);
}

.studio-card img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 999px;
  border: 3px solid rgba(255, 255, 255, 0.06);
  transition:
    transform 260ms ease,
    box-shadow 260ms ease;
}

.studio-card:hover img {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 10px 30px rgba(6, 10, 26, 0.55);
}

.studio-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 22px 48px rgba(6, 10, 26, 0.6);
}

.studio-list {
  margin-top: 1.25rem;
  display: grid;
  gap: 1rem;
}

.studio-full .studio-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.studio-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.studio-info img {
  width: 64px;
  height: 64px;
  border-radius: 16px;
}

.accordion details {
  background: rgba(255, 255, 255, 0.02);
  margin-top: 0.5rem;
  padding: 0.6rem;
  border-radius: 16px;
}

.accordion summary {
  cursor: pointer;
  font-weight: 600;
}

.panel {
  margin-top: 0.5rem;
}

.studio-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.studio-gallery img {
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  aspect-ratio: 4/3;
  transition:
    transform 260ms ease,
    box-shadow 260ms ease;
}

.studio-gallery img:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 12px 34px rgba(6, 10, 26, 0.55);
}

/* Footer */
.footer {
  min-height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.small {
  font-size: 0.95rem;
}

:focus {
  outline: none;
}

:focus-visible {
  outline: 3px solid rgba(197, 208, 255, 0.6);
  outline-offset: 3px;
}

.accordion details {
  background: rgba(255, 255, 255, 0.03);
  margin-top: 0.75rem;
  border-radius: 16px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.accordion summary {
  cursor: pointer;
  font-weight: 600;
  padding: 0.6rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
}

.accordion summary::-webkit-details-marker {
  display: none;
}

.accordion summary::after {
  content: '▸';
  transition: transform 0.3s ease;
}

details[open] summary::after {
  transform: rotate(90deg);
}

.panel {
  max-height: 0;
  opacity: 0;
  padding: 0 0.8rem;
  transition: all 0.35s ease;
}

details[open] .panel {
  max-height: 500px;
  opacity: 1;
  margin-bottom: 0.6rem;
  padding: 0.6rem 0.8rem;
}
</style>
