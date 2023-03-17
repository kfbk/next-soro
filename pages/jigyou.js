import Image from 'next/image'

export default function Jigyou() {
  return (
    <>
      <h1>定款</h1>
      <p>「定款」PDFファイル　
        <a href='/pdf/kyouyou.pdf' target="_blank">
            <Image src="/images/pdf_symbol.gif"
              alt="menu"
              width={32} height={10}
              className="ml-10 mt-3 inline"
            ></Image>
          </a>
      </p>
      <h1>役員名簿</h1>
      <p>「役員名簿」PDFファイル　
        <a href='/pdf/kyouyou.pdf' target="_blank">
            <Image src="/images/pdf_symbol.gif"
              alt="menu"
              width={32} height={10}
              className="ml-10 mt-3 inline"
            ></Image>
          </a>
      </p>
      <h1>役員の報酬基準</h1>
      <p>「役員の報酬基準」PDFファイル　
        <a href='/pdf/kyouyou.pdf' target="_blank">
            <Image src="/images/pdf_symbol.gif"
              alt="menu"
              width={32} height={10}
              className="ml-10 mt-3 inline"
            ></Image>
          </a>
      </p>
      <h1>会員名簿</h1>
      <p>「会員名簿」PDFファイル　
        <a href='/pdf/kyouyou.pdf' target="_blank">
            <Image src="/images/pdf_symbol.gif"
              alt="menu"
              width={32} height={10}
              className="ml-10 mt-3 inline"
            ></Image>
          </a>
      </p>
      <h1>事業報告等</h1>
      <table width="100%" className="ml-4">
        <tbody>
          <tr>
            <td>　種　　類</td>
            <td width="13%">平成<br />29年度</td>
            <td width="13%">平成<br />30年度</td>
            <td width="13%">令和<br />元年度</td>
            <td width="13%">令和<br />2年度</td>
            <td width="13%">令和<br />3年度</td>
          </tr>
          <tr>
            <td>事業報告書</td>
            <td> <a href="http://88gunma.or.jp/document/h30/jigyou.pdf" target="_blank" rel="noopener noreferrer"><img class="alignnone size-full wp-image-37" src="/images/pdf_symbol.gif" alt="pdf_symbol" width="34" height="32" /></a></td>
            <td> <a href="http://88gunma.or.jp/document/r01/jigyou.pdf" target="_blank" rel="noopener noreferrer"><img class="alignnone size-full wp-image-37" src="/images/pdf_symbol.gif" alt="pdf_symbol" width="34" height="32" /></a></td>
            <td> <a href="http://88gunma.or.jp/document/r02/jigyou.pdf" target="_blank" rel="noopener noreferrer"><img class="alignnone size-full wp-image-37" src="/images/pdf_symbol.gif" alt="pdf_symbol" width="34" height="32" /></a></td>
            <td> <a href="http://88gunma.or.jp/document/r03/jigyou.pdf" target="_blank" rel="noopener noreferrer"><img class="alignnone size-full wp-image-37" src="/images/pdf_symbol.gif" alt="pdf_symbol" width="34" height="32" /></a></td>
            <td> <a href="http://88gunma.or.jp/document/r04/jigyou.pdf" target="_blank" rel="noopener noreferrer"><img class="alignnone size-full wp-image-37" src="/images/pdf_symbol.gif" alt="pdf_symbol" width="34" height="32" /></a></td>
          </tr>
          <tr>
            <td>正味財産増減<br />計算書</td>
            <td> <a href="http://88gunma.or.jp/document/h30/zaisan2.pdf" target="_blank" rel="noopener noreferrer"><img class="alignnone size-full wp-image-37" src="/images/pdf_symbol.gif" alt="pdf_symbol" width="34" height="32" /></a></td>
            <td> <a href="http://88gunma.or.jp/document/r01/zaisan.pdf" target="_blank" rel="noopener noreferrer"><img class="alignnone size-full wp-image-37" src="/images/pdf_symbol.gif" alt="pdf_symbol" width="34" height="32" /></a></td>
            <td> <a href="http://88gunma.or.jp/document/r02/zaisan.pdf" target="_blank" rel="noopener noreferrer"><img class="alignnone size-full wp-image-37" src="/images/pdf_symbol.gif" alt="pdf_symbol" width="34" height="32" /></a></td>
            <td> <a href="http://88gunma.or.jp/document/r03/zaisan.pdf" target="_blank" rel="noopener noreferrer"><img class="alignnone size-full wp-image-37" src="/images/pdf_symbol.gif" alt="pdf_symbol" width="34" height="32" /></a></td>
            <td> <a href="http://88gunma.or.jp/document/r04/zaisan.pdf" target="_blank" rel="noopener noreferrer"><img class="alignnone size-full wp-image-37" src="/images/pdf_symbol.gif" alt="pdf_symbol" width="34" height="32" /></a></td>
          </tr>
          <tr>
            <td>貸借対照表</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> <a href="http://88gunma.or.jp/document/r04/taisyaku.pdf" target="_blank" rel="noopener noreferrer"><img class="alignnone size-full wp-image-37" src="/images/pdf_symbol.gif" alt="pdf_symbol" width="34" height="32" /></a></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}