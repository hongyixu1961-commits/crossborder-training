import Link from "next/link";
import AccountMenu from "../../../components/account-menu";

const lessons = [
  {title:"平台认知：Amazon 发展与模式",time:"约 15 分钟",done:true},
  {title:"账号注册与后台基础设置",time:"约 15 分钟",done:true},
  {title:"商品上架流程与注意事项",time:"约 20 分钟",done:false},
  {title:"物流与库存基础",time:"约 20 分钟",done:false},
  {title:"售后与客户体验",time:"约 15 分钟",done:false},
  {title:"第一周知识回顾与考试准备",time:"约 10 分钟",done:false},
];

const flow = ["① 选品","② 上架测款","③ 优化 Listing","④ 广告拉升","⑤ 稳定放量"];
const modules = [
  ["选品","市场调研 → 需求分析 → 竞品分析 → 利润测算"],
  ["Listing 运营","关键词调研 → 标题与五点 → 主图/A+/视频 → SEO 优化"],
  ["广告运营","自动广告 → 手动分层 → 否定与出价 → ACOS 复盘"],
  ["促销活动","Coupon 优惠券 → 秒杀/Deal → 站内外联动"],
  ["数据分析","流量 → 转化率 → 广告数据 → 库存与利润"],
  ["日常运营","绩效监控 → 跟卖与 Buy Box → 售后 → 周报复盘"],
];

export default function AmazonOperations(){
  return <main>
    <header>
      <Link href="/" className="brand">✦ CrossBorder <b>Academy</b></Link>
      <nav><Link href="/">首页</Link><Link href="/learning">学习中心</Link><a>课程中心</a><Link href="/exams/list">考试中心</Link></nav>
      <AccountMenu/>
    </header>
    <section className="content">
      <Link href="/courses" style={{display:"inline-block",color:"#163d35",fontSize:18,textDecoration:"none",marginBottom:22}}>← 返回课程中心</Link>
      <p className="eyebrow">运营实战 · 初级</p>
      <h1>Amazon 运营基础</h1>
      <p className="lead">从平台认知到商品上架，建立完整的 Amazon 运营基本功。</p>

      <div className="learning-card" style={{margin:"28px 0 36px"}}>
        <b>第一周学习目标</b>
        <p style={{margin:"12px 0 0",color:"#68716c",lineHeight:1.7}}>了解 Amazon 平台与主要业务模式，掌握账号、Listing、物流库存和客户体验等基础概念，为后续运营实战打好基础。</p>
      </div>

      <section style={{background:"#fff",border:"1px solid #e5ded2",borderRadius:18,padding:"28px 30px",marginBottom:42,boxShadow:"0 10px 24px rgba(22,61,53,.04)"}}>
        <p className="eyebrow" style={{marginBottom:8}}>运营全景图</p>
        <h2 style={{margin:"0 0 8px"}}>从选品到稳定放量的完整路径</h2>
        <p style={{color:"#68716c",margin:"0 0 24px"}}>先理解整体流程，再进入每个模块学习具体方法。</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:8,alignItems:"center",marginBottom:26}}>
          {flow.map((step,i)=><div key={step} style={{display:"flex",alignItems:"center",gap:8}}>
            <div style={{flex:1,textAlign:"center",padding:"13px 8px",borderRadius:999,background:i===flow.length-1?"#1f9d55":"#2734ae",color:"#fff",fontWeight:700,fontSize:14}}>{step}</div>
            {i<flow.length-1&&<span style={{color:"#2734ae",fontWeight:700}}>→</span>}
          </div>)}
        </div>
        <div style={{display:"grid",gap:10}}>
          {modules.map(([name,desc])=><div key={name} style={{display:"grid",gridTemplateColumns:"150px 1fr",gap:14,alignItems:"center",padding:14,border:"1px solid #e5e8ee",borderRadius:10}}>
            <strong style={{background:"#2734ae",color:"#fff",borderRadius:8,padding:"12px 10px",textAlign:"center"}}>{name}</strong>
            <span style={{color:"#4e5754",fontSize:14,lineHeight:1.6}}>{desc}</span>
          </div>)}
        </div>
      </section>

      <h2>课程章节</h2>
      <div style={{background:"#fff",border:"1px solid #e5ded2",borderRadius:18,padding:"0 22px",maxWidth:980}}>
        {lessons.map((lesson,index)=><Link key={lesson.title} href={"/courses/amazon-operations?lesson="+(index+1)} style={{display:"flex",alignItems:"center",gap:18,padding:"25px 8px",borderBottom:index===lessons.length-1?"none":"1px solid #e5ded2",textDecoration:"none",color:"#163d35"}}>
          <span style={{fontSize:23,width:28,textAlign:"center",color:lesson.done?"#163d35":"#4e7064"}}>{lesson.done?"✓":"○"}</span>
          <span style={{flex:1,fontSize:20,fontWeight:600}}>{lesson.title}</span>
          <span style={{fontSize:15,color:"#89938b"}}>{lesson.done?"已完成":lesson.time}</span>
        </Link>)}
      </div>

      <div style={{display:"flex",gap:14,flexWrap:"wrap",marginTop:30}}>
        <Link href="/courses/amazon-operations?lesson=1" className="cta">继续第一章 →</Link>
        <Link href="/exams/list" style={{display:"inline-flex",alignItems:"center",padding:"12px 18px",border:"1px solid #d8d2c7",borderRadius:9,color:"#163d35",fontWeight:700,textDecoration:"none"}}>完成后参加考试</Link>
      </div>
    </section>
  </main>
}
