import Link from "next/link";
import AccountMenu from "../../components/account-menu";

const weeks = [
  {label:"第一周", title:"亚马逊基本知识", desc:"平台基础、Listing、FBA 与账户健康"},
  {label:"第二周", title:"跨境运营全流程", desc:"选品、上架、物流与日常运营"},
  {label:"第三周", title:"广告基础知识", desc:"广告类型、投放设置与数据分析"},
  {label:"第四周", title:"运营案例分析", desc:"结合真实案例复盘运营方法"},
];

export default function Learning(){
  return <main>
    <header>
      <Link href="/" className="brand">✦ CrossBorder <b>Academy</b></Link>
      <nav><Link href="/">首页</Link><a>学习中心</a><Link href="/courses">课程中心</Link><Link href="/exams/list">考试中心</Link></nav>
      <AccountMenu/>
    </header>
    <section className="content">
      <p className="eyebrow">LEARNING CENTER</p>
      <h1>学习中心</h1>
      <p className="lead">按四周培训路径学习，逐步掌握跨境电商运营能力。</p>

      <div className="stats">
        <div><small>培训阶段</small><strong>4 周</strong></div>
        <div><small>课程模块</small><strong>持续更新</strong></div>
        <div><small>配套考试</small><strong>3 套</strong></div>
      </div>

      <h2>四周学习路径</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",gap:14,marginBottom:42}}>
        {weeks.map((week,i)=><div key={week.label} style={{background:"#fff",border:"1px solid #e5ded2",borderRadius:14,padding:"20px 18px",minHeight:155}}>
          <small style={{color:"#587863",fontWeight:700}}>{week.label}</small>
          <h3 style={{fontSize:20,lineHeight:1.35,margin:"12px 0 8px",color:"#163d35"}}>{week.title}</h3>
          <p style={{fontSize:14,lineHeight:1.5,color:"#68716c",margin:0}}>{week.desc}</p>
        </div>)}
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20}}>
        <div>
          <h2>继续学习</h2>
          <div className="learning-card">
            <b>第一周 · 亚马逊基本知识</b>
            <span>从课程中心选择章节开始学习</span>
            <Link className="cta" href="/courses">进入课程中心 →</Link>
          </div>
        </div>
        <div>
          <h2>待完成任务</h2>
          <ul className="tasks">
            <li>完成对应周次课程学习</li>
            <li>参加阶段考试</li>
            <li>查看管理员发布的任务</li>
          </ul>
          <Link href="/exams/list" style={{display:"inline-block",marginTop:14,color:"#f26b4a",fontWeight:700}}>查看考试中心 →</Link>
        </div>
      </div>
    </section>
  </main>
}
