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
