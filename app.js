const systems = {
  resident: {
    title: "居民端 APP",
    description:
      "面向社区居民，提供全流程生活服务、健康守护与智能体验。",
    features: [
      {
        title: "智能匹配系统",
        bullets: [
          "AI 网络识别用户需求，结合画像自动派单",
          "根据历史偏好推荐优质服务者",
          "异常需求触发风控机制"
        ]
      },
      {
        title: "多设备协同",
        bullets: [
          "定制语音助手与人工客服一键下单",
          "健康检测设备实时预警并联动社区人员",
          "家庭成员共享订单状态与照护方案"
        ]
      },
      {
        title: "评价处理系统",
        bullets: [
          "NPS 智能识别满意度并触发 AI 售后",
          "不满意自动上升人工客服，缩短响应时间",
          "全流程评价数据沉淀至风控模型"
        ]
      }
    ]
  },
  merchant: {
    title: "商家端后台",
    description:
      "赋能社区商户与服务者的数字化运营，覆盖订单、收益与营销。",
    features: [
      {
        title: "订单管理中心",
        bullets: [
          "接单、派单、进度、售后一体化管理",
          "多人协同与移动端实时处理",
          "服务者轨迹与打卡同步"
        ]
      },
      {
        title: "收益与结算系统",
        bullets: [
          "自动生成收益报表与结算周期",
          "支持多角色分润与税务发票模块",
          "提现安全合规，实时到账提醒"
        ]
      },
      {
        title: "营销工具包",
        bullets: [
          "优惠券、拼团、广告位竞价自助投放",
          "会员成长体系提升复购率",
          "培训认证模块保障服务质量"
        ]
      }
    ]
  },
  regional: {
    title: "地区数据中台",
    description:
      "区域运营调度的指挥枢纽，实时监控服务质量与风险。",
    features: [
      {
        title: "智能调度引擎",
        bullets: [
          "双时间维度 AI 模型匹配服务资源",
          "可视化地图调度最近可达服务者",
          "高风险用户实时响应"
        ]
      },
      {
        title: "质量与风险管理",
        bullets: [
          "内置服务 SOP 检查表标准化执行",
          "延误、投诉、低评分自动复核",
          "违规记录与保险信息全流程追踪"
        ]
      },
      {
        title: "活动与舆情洞察",
        bullets: [
          "社区活动、积分任务一键创建",
          "舆情与 NPS 热力图辅助决策",
          "Community Well-being Dashboard 展示幸福指数"
        ]
      }
    ]
  },
  hq: {
    title: "总部数据中台",
    description:
      "沉淀平台级数据资产，支撑智能推荐与商业决策。",
    features: [
      {
        title: "数据采集与建模",
        bullets: [
          "整合订单、支付、IoT 等多源数据",
          "西安邮电大学算法实验室模型训练",
          "构建用户画像与需求热区"
        ]
      },
      {
        title: "智能推荐系统",
        bullets: [
          "根据历史行为与社区特征个性化推荐",
          "预测服务需求高峰与人力排班",
          "向商家开放 API 优化选址与定价"
        ]
      },
      {
        title: "安全合规与数字孪生",
        bullets: [
          "数据分级存储与加密传输符合个人信息保护要求",
          "生成城市社区数字孪生模拟",
          "输出政府决策所需的需求预测报告"
        ]
      }
    ]
  }
};

const journeySteps = [
  {
    title: "发现阶段",
    description:
      "线下活动与线上投放双路径获客，基于地理位置展示周边服务。"
  },
  {
    title: "下单阶段",
    description: "用户选择服务、时间、价格与服务者等级，在线支付生成订单。"
  },
  {
    title: "智能调度",
    description: "算法根据位置、技能与评价进行最优匹配，自动分配服务者。"
  },
  {
    title: "履约执行",
    description: "服务者准时上门，上传现场照片与打卡记录，确保履约质量。"
  },
  {
    title: "反馈闭环",
    description: "用户确认并评价，NPS 分数进入质控模型形成持续优化闭环。"
  }
];

const innovations = [
  {
    title: "智能调度算法",
    description:
      "结合 GIS 地理信息与 AI 学习模型，实现最近、最优、最高效派单。"
  },
  {
    title: "区块链存证",
    description: "服务流程、支付记录与评价上链存证，保障数据可信与透明。"
  },
  {
    title: "老年人适配",
    description: "语音助手、亲友代下单、一键求助与大字体界面，提升易用性。"
  },
  {
    title: "可穿戴设备接口",
    description: "对接血压仪、心率手环等设备，实时掌握健康数据，及时预警。"
  },
  {
    title: "多维服务评价模型",
    description: "融合时间、质量与情绪指标的 NPS 模型，驱动精细化运营。"
  }
];

function renderSystems() {
  Object.entries(systems).forEach(([key, system]) => {
    const panel = document.getElementById(key);
    const header = document.createElement("div");
    header.className = "system-panel__header";
    header.innerHTML = `<h3>${system.title}</h3><p>${system.description}</p>`;

    const featureGrid = document.createElement("div");
    featureGrid.className = "system-features";

    system.features.forEach((feature) => {
      const card = document.createElement("div");
      card.className = "feature-card";
      card.innerHTML = `
        <h4>${feature.title}</h4>
        <ul>
          ${feature.bullets.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      `;
      featureGrid.appendChild(card);
    });

    panel.appendChild(header);
    panel.appendChild(featureGrid);
  });
}

function renderJourney() {
  const container = document.querySelector(".journey");
  journeySteps.forEach((step, index) => {
    const card = document.createElement("div");
    card.className = "journey-step";
    card.dataset.step = index + 1;
    card.innerHTML = `
      <h3>${step.title}</h3>
      <p>${step.description}</p>
    `;
    container.appendChild(card);
  });
}

function renderInnovations() {
  const container = document.querySelector(".innovation-grid");
  innovations.forEach((innovation) => {
    const card = document.createElement("div");
    card.className = "innovation-card";
    card.innerHTML = `
      <h3>${innovation.title}</h3>
      <p>${innovation.description}</p>
    `;
    container.appendChild(card);
  });
}

function bindTabs() {
  const buttons = document.querySelectorAll(".system-tabs__btn");
  const panels = document.querySelectorAll(".system-panel");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;

      buttons.forEach((btn) => btn.classList.toggle("is-active", btn === button));
      panels.forEach((panel) =>
        panel.classList.toggle("is-active", panel.id === target)
      );
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSystems();
  renderJourney();
  renderInnovations();
  bindTabs();
});
