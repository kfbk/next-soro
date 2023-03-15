import Image from 'next/image'

export default function Event() {
  return (
    <>
      <h1>検定事業</h1>
      <h2>令和４年度検定のご案内</h2>
      <table width="100%">
        {/* <colgroup> <col width="100"> <col width="236"> <col width="179"> <col width="168"></colgroup> */}
        <tbody>
          <tr>
            <td rowspan="6">実施日</td>
            <td>令和4年8月28日</td>
            <td>珠　　算</td>
            <td>暗　　算</td>
          </tr>
          <tr>
            <td>令和4年10月30日</td>
            <td>珠　　算</td>
            <td>暗　　算</td>
          </tr>
          <tr>
            <td>令和4年12月18日</td>
            <td>珠　　算</td>
            <td>暗　　算</td>
          </tr>
          <tr>
            <td>令和5年2月26日</td>
            <td>珠　　算</td>
            <td>暗　　算</td>
          </tr>
          <tr>
            <td>令和5年4月30日</td>
            <td>珠　　算</td>
            <td>暗　　算</td>
          </tr>
          <tr>
            <td>令和5年6月18日</td>
            <td>珠　　算</td>
            <td>暗　　算</td>
          </tr>
        </tbody>
      </table>
      <table width="100%" className="mt-4">
        <tbody>
          <tr>
          <td width="20%">申込締切日</td>
          <td>３週間前の月～木曜日午前中<br />(1) 本人または保護者が受験料+事務手数料を添えて申し込む<br />(2) 受付時書面にて個人情報取扱同意書の提出<br />(3) 会場の関係により県外から受付はできない</td>
          </tr>
          <tr>
          <td>申込場所</td>
          <td>群馬県珠算連盟事務局</td>
          </tr>
        </tbody>
      </table>
      <h1>研修事業</h1>
      <h2>珠算指導者講習会</h2>
      <div>
        <p>当連盟では、年２回程度珠算指導者のための「専門講習会」や「教養講習会」を開催して、指導者としての資質を養っております。</p>
        <p>最近では次の方が実施されました。</p>
        <p className="pl-16">
          演　題　　　　「さまざまな事例から学ぶ人権」<br />
          講　師　　　　法務省人権援護委員　鈴木節夫先生
        </p>
        <Image src="/images/suzuki.jpg"
          alt="menu"
          width={300} height={10}
          className="mx-auto mt-3"
        ></Image>
        <p className="pl-16">
          演　題　　　　幼児指導から高段位の指導まで<br />
          講　師　　　　全珠連沖縄県支部長　　宮城忍人先生
        </p>
        <Image src="/images/miyagi.jpg"
          alt="menu"
          width={300} height={10}
          className="mx-auto mt-3"
        ></Image>
      </div>
      <h2>珠算指導者講習会の開催案内</h2>
      <p>
        教養講習会の開催案内を、次のマークからダウンロードできます。<br />
        （令和４年１１月 更新）
        <a href='/pdf/kyouyou.pdf' target="_blank">
          <Image src="/images/pdf_symbol.gif"
            alt="menu"
            width={32} height={10}
            className="ml-10 mt-3"
          ></Image>
        </a>
      </p>
      <h1>表彰事業</h1>
      <p>
        毎年３月には優秀生徒を表彰し、表彰状と記念品が贈られます。平成２６年度は、平成２７年３月１日に８５３名の塾生が表彰を受けました。
      </p>
      <Image src="/images/hyousyou.jpg"
          alt="menu"
          width={300} height={10}
          className="mx-auto mt-3"
        ></Image>
    </>
  )
}