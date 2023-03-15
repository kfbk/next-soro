import Image from 'next/image'

export default function Meet() {
  return (
    <>
      <h1 className='mt-0'>群馬県珠算競技大会</h1>
      <div>
        群馬県珠算競技大会は昭和２７年第１回が開催されてから令和元年度は６７回を迎えます。
      </div>
      <div>珠算競技大会の開催案内</div>
      <div>
        <a href='/pdf/kyougiyoukou.pdf' className="text-red-600" target="_blank">
        「第67回群馬県珠算競技大会の競技要項」
        </a>
        を掲載します。<br />
        （上記をクリックして下さい）
      </div>
      <h1>各地域珠算競技大会</h1>
      <div>群馬県珠算珠算連盟の珠算競技会は全県下だけでなく、各地域ごとにも開催されております。</div>
      <Image src="/images/maebashi.jpg"
          alt="menu"
          width={300} height={10}
          className="mx-auto mt-3"
        ></Image>
      <div className="text-center">前橋競技</div>
      <Image src="/images/isesaki.jpg"
          alt="menu"
          width={300} height={10}
          className="mx-auto mt-3"
        ></Image>
      <div className="text-center">伊勢崎競技</div>
      <Image src="/images/seimou.jpg"
          alt="menu"
          width={300} height={10}
          className="mx-auto mt-3"
        ></Image>
      <div className="text-center">西毛競技</div>
      <Image src="/images/toumou.jpg"
          alt="menu"
          width={300} height={10}
          className="mx-auto mt-3"
        ></Image>
      <div className="text-center">東毛競技</div>
      <Image src="/images/hokumou.jpg"
          alt="menu"
          width={300} height={10}
          className="mx-auto mt-3"
        ></Image>
      <div className="text-center">北毛競技</div>
      <h1>関孝和先生顕彰全日本珠算大会</h1>
      <div>
        関孝和先生はライプニッツや、ニュートンとともに世界の三大数学者といわれ、その和算による高い数理論は立派に宇宙時代の今日に生きています。関孝和先生は、藤岡市に生まれ江戸に出て大成されました。
        その偉業をしのび業績を顕彰することは、今後の科学教育の向上に寄与することが大であると存じ、この大会は開催されています。<br />
        昭和25年から始まったこの競技大会は、自治体で行う珠算競技大会としは唯一のものです。北は青森、南は沖縄から大勢の参加者が集まります。<br />
        この大会は、藤岡市で主催され、当連盟は全面的に応援をし、お手伝いをしております。
      </div>
      <Image src="/images/taikai.jpg"
          alt="menu"
          width={300} height={10}
          className="mx-auto m-2"
        ></Image>
    </>
  )
}